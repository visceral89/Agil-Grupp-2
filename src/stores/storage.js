import { defineStore } from "pinia";
import availableAchievments from "../lib/achievments.json";

export const useUserStorage = defineStore("userStorage", {
	state: () => ({
		// Default Active User, finns som en fallback ifall ingen data finns från Login.
		activeUser: {
			id: 5,
			username: "Gäst",
			password: "abc",
			avatar: "assets/images/user-avatars/guest.svg",
			achievements: [],
			friends: [],
			points: 0,
			email: "hej@iths.se",
		},
		// Player 1 sätts från logged in user i början.
		player1: {},
		// Player 2 är ursprungligen motståndaren. Activeplayer skiftas mellan spelare 1 och 2.
		player2: {},
		loggedinUser: {},
		availableAchievments: availableAchievments,
	}),
	actions: {
		loginUser(user) {
			this.activeUser = user;
			this.loggedinUser = user;
		},
		addPoints(points) {
			if (!this.activeUser) {
				console.log("Error: User not active?!");
			} else {
				this.activeUser.points += points;
				console.log(this.activeUser.points, "points");

				//call this function every time a user gets points to check if an achievment can be collected
				this.unlockAchievments();
			}
		},
		unlockAchievments() {
			//loop through the json-file
			this.availableAchievments.forEach((achievment) => {
				//checks if the active users points are equal to or more to unlock a achievment in the array
				if (this.activeUser.points >= achievment.pointsToUnlock) {
					console.log(achievment.title, "achievment unlocked");
					//push the achievment to the active users achievments
					this.activeUser.achievements.push(achievment);
				}
			});
		},
		setPlayers() {
			// Checks if player 1 exists, if not then assign the logged in player to player 1.
			if (Object.keys(this.player1).length < 1) {
				this.player1 = { ...this.loggedinUser };
				console.log(this.player1);
			} else {
				console.log("Player 1 finns redan i Pinia");
			}
		},
	},
});
