import { defineStore } from "pinia"
import availableAchievments from "../lib/achievments.json"
import users from "../lib/users.json"

export const useUserStorage = defineStore("userStorage", {
    state: () => ({
        activeUser: null,
        guestUser: {
            id: 5,
            username: "Gäst",
            password: "abc",
            avatar: "/user-avatars/guest.svg",
            achievements: [],
            friends: [],
            totalPoints: 0,
            sessionPoints: 0,
            email: "hej@iths.se"
        },
        loggedInGuestUser: false,
        guestUserInHighscore: false,
        player1: null,
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
                this.flipActiveUser()
            } else {
                this.activeUser.sessionPoints += points
                this.activeUser.totalPoints += points
                this.unlockAchievments()
                this.flipActiveUser()
                this.stopTimer = true
            }
        },
        unlockAchievments() {
            this.availableAchievments.forEach((achievment) => {
                if (
                    this.loggedInUser.totalPoints >= achievment.pointsToUnlock
                ) {
                    if (this.loggedInUser.achievements.includes(achievment)) {
                    } else {
                        this.loggedInUser.achievements.push(achievment)
                    }
                }
            })
        },
        setHighscore(username) {
            this.users.sort((a, b) => {
                return b.totalPoints - a.totalPoints
            })
            const highscoreIndex = this.users.findIndex(
                (user) => user.username === username
            )
            return highscoreIndex !== -1 ? highscoreIndex + 1 : null
        },
        setPlayers() {
            if (!this.player1) {
                this.player1 = this.loggedInUser
            }
        },
        setActiveUser(user) {
            this.activeUser = user
        },
        setOpponent(user) {
            this.player2 = user
        },
        checkTimeLeft() {
            this.isTimeOut = true
        },
        flipActiveUser() {
            if (this.player1 && this.player2) {
                if (this.activeUser.id === this.player1.id) {
                    this.setActiveUser(this.player2)
                } else {
                    this.setActiveUser(this.player1)
                }
            }
        },
        checkWinner() {
            if (this.player1 && this.player2) {
                if (this.player1.sessionPoints > this.player2.sessionPoints) {
                    this.isWinner = this.player1

                    this.isLoser = this.player2
                } else if (
                    this.player1.sessionPoints < this.player2.sessionPoints
                ) {
                    this.isWinner = this.player2

                    this.isLoser = this.player1
                } else {
                    this.isTie = true
                }
            }
        },
        clearPlayers() {
            this.player1 = null
            this.player2 = null
        },
        logoutUser() {
            this.loggedInUser = null

            this.activeUser = null
            this.loggedInGuestUser = false
        },
        setMultiPlayer() {
            this.multiPlayer = true
        },
        setSinglePlayer() {
            this.multiPlayer = false
        },
        clearSessionPoints() {
            users.forEach((user) => (user.sessionPoints = 0))
        }
    }
})
