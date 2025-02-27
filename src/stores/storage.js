import { defineStore } from "pinia";

export const useUserStorage = defineStore("userStorage", {
	state: () => ({
		// Default Active User, finns som en fallback ifall ingen data finns från Login.
		activeUser: {
			id: 5,
			username: "Gäst",
			password: "abc",
			avatar: "assets/images/user-avatars/guest.svg",
			achievements: [
				{
					title: "En achivement",
					points: 100,
					img: "security",
					color: "#b57c47",
				},
			],
			friends: [],
			points: 0,
			email: "hej@iths.se",
		},
		opponent: {},
	}),
	actions: {
		loginUser(user) {
			this.activeUser = user;
		},
		addPoints(points) {
			if (!this.activeUser) {
				console.log("Error: User not active?!");
			} else {
				this.activeUser.points += points;
				console.log(this.activeUser.points, "poäng");

				this.unlockAchievments()
			}
		},
		unlockAchievments(points) {
			if (points >= Achievments.pointsToUnlock) {
				console.log("achievment unlocked");
				this.achievements.push()
			}
		}
	},
});
