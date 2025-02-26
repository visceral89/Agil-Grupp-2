import { defineStore } from "pinia";

export const useUserStorage = defineStore("userStorage", {
	state: () => ({
		// Default Active User, finns som en fallback ifall ingen data finns från Login.
		activeUser: {
			id: 1,
			username: "Anna",
			password: "abc",
			avatar: "assets/images/user-avatars/image-19.png",
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
			}
		},
	},
});
