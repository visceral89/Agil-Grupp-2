import { defineStore } from "pinia"
import availableAchievments from "../lib/achievments.json"
import users from "../lib/users.json"

export const useUserStorage = defineStore("userStorage", {
    state: () => ({
        // Default Active User, finns som en fallback ifall ingen data finns från Login.
        activeUser: null,
        guestUser: {
            id: 5,
            username: "Gäst",
            password: "abc",
            avatar: "assets/images/user-avatars/guest.svg",
            achievements: [],
            friends: [],
            totalPoints: 0,
            sessionPoints: 0,
            email: "hej@iths.se"
        },
        loggedInGuestUser: false,
        // Player 1 initializies to null nstead of empty object. This preserves reactivity and makes empty checks easier.
        player1: null,
        // Player 2 the opponent, also initializes as null. Activeplayer flips from player 1 to player 2 and back again when flipflop function triggers.
        player2: null,
        multiPlayer: false,
        loggedInUser: null,
        isTimeOut: false,
        stopTimer: false,
        isWinner: null,
        isLoser: null,
        isTie: null,
        availableAchievments: availableAchievments,
        users: users,
        twoplayer: false
    }),
    actions: {
        loginUser(user) {
            this.setActiveUser(user)
            this.loggedInUser = user

            this.unlockAchievments()
        },
        addPoints(points) {
            if (!this.activeUser) {
                this.flipActiveUser() //flips to new active user after points have been given
            } else {
                this.activeUser.sessionPoints += points
                this.activeUser.totalPoints += points
                //call this function every time a user gets points to check if an achievment can be collected
                this.unlockAchievments()
                this.flipActiveUser() //flips to new active user after points have been given
                this.stopTimer = true
                console.log(this.stopTimer, "stanna timer vid svar")
            }
        },
        unlockAchievments() {
            //loop through the json-file
            this.availableAchievments.forEach((achievment) => {
                //checks if the active users points are equal to or more to unlock a achievment in the array
                if (this.loggedInUser.totalPoints >= achievment.pointsToUnlock) {
                    //checks if the achievment is already in the activeusers achievments
                    if (this.loggedInUser.achievements.includes(achievment)) {
                        console.log('achievment already exists')
                    }
                    else {
                        //push the achievment to the active users achievments
                        this.loggedInUser.achievements.push(achievment)
                        console.log('achievment unlocked', achievment)
                    }
                }
            })
        },
        setHighscore(username) {
            this.users.sort((a, b) => {
                return b.toaltPoints - a.totalPoints
            })
            const highscoreIndex = this.users.findIndex(
                (user) => user.username === username
            )
            console.log(highscoreIndex)
            return highscoreIndex !== -1 ? highscoreIndex + 1 : null
        },
        setPlayers() {
            if (!this.loggedInUser) {
                console.log("No logged-in user found, cant set player1.")
                return
            }

            if (!this.player1) {
                this.player1 = this.loggedInUser
                console.log("Player 1 set to:", this.player1)
            } else {
                console.log("Player 1 already exists in Pinia.")
            }
        },
        setActiveUser(user) {
            // Short helper function that can be run From multiple places.This makes it moore dynamic if we for some reason want to change the active user via a parameter.
            this.activeUser = user
            console.log("Aktiv user:", this.activeUser)
        },
        setOpponent(user) {
            // This function is called from Invite modal and sets player 2 to be the opponent "manually"
            this.player2 = user
            console.log(this.player2)
        },
        checkTimeLeft() {
            this.isTimeOut = true
            console.log("tiden är ute")
        },
        flipActiveUser() {
            // Here we change active user from user 1 or User 2
            if (this.player1 && this.player2) {
                if (this.activeUser.id === this.player1.id) {
                    this.setActiveUser(this.player2)
                    console.log(this.activeUser, "Ny aktiv spelare, player 2")
                } else {
                    this.setActiveUser(this.player1)
                    console.log(this.activeUser, "Ny aktiv spelare, player 1")
                }
            } else {
                console.log("Player 1 or Player 2 is not set. Cant flipflop")
            }
        },
        checkWinner() {
            if (this.player1 && this.player2) {
                if (this.player1.sessionPoints > this.player2.sessionPoints) {
                    this.isWinner = this.player1
                    console.log(this.isWinner.username, "player 1 vinner")
                    this.isLoser = this.player2
                } else if (this.player1.sessionPoints < this.player2.sessionPoints) {
                    this.isWinner = this.player2
                    console.log(this.isWinner.username, "player 2 vinner")
                    this.isLoser = this.player1
                } else {
                    this.isTie = true
                    console.log(this.isTie, "oavgjort")
                }
            } else {
                console.log("finns bara 1 spelare som kan vinna")
            }
        },
        clearPlayers() {
            // Maybe we wont need this function but ill implement it just in case.
            // This function just clears the player 1 and 2. Incase we are resetting the game or something.

            this.player1 = null
            this.player2 = null
            console.log("Both Players reset to " + this.player1)
        },
        logoutUser() {
            // Logout function, resets loggedInUser to null.
            this.loggedInUser = null
            console.log("Logged out")
            // Nollställ activeUser
            this.activeUser = null
            //Nollställ guestUser
            this.loggedInGuestUser = false
        },
        setMultiPlayer() {
            this.multiPlayer = true
            console.log("setMultiPlayer körs")
        },
        setSinglePlayer() {
            // Kallas från 1-p Button
            this.multiPlayer = false
            console.log("setSinglePlayer körs")
        },
        clearSessionPoints() {
            users.forEach(user => user.sessionPoints = 0)
        }
    }
})
