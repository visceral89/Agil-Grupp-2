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
		// Player 1 initializies to null nstead of empty object. This preserves reactivity and makes empty checks easier.
		player1: null,
		// Player 2 the opponent, also initializes as null. Activeplayer flips from player 1 to player 2 and back again when flipflop function triggers.
		player2: null,
		loggedinUser: null,
		availableAchievments: availableAchievments,
	}),
	actions: {
		loginUser(user) {
			this.setActiveUser(user);
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
					//checks if the achievment is already in the activeusers achievments
					if (this.activeUser.achievements.includes(achievment)) {
						console.log(achievment.title, "achievment already unlocked");
					}
					else {
						console.log(achievment.title, "achievment unlocked");
						//push the achievment to the active users achievments
						this.activeUser.achievements.push(achievment)
					}
				}
			})
		}
	},
});
