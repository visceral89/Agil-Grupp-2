// Router går här
import { createRouter, createWebHistory } from "vue-router";

import Start from "../views/Start.vue";
import Game from "../views/Game.vue";
import Login from "../views/Login.vue";
import ChosenQuestion from "../views/ChosenQuestion.vue";

export default createRouter({
	history: createWebHistory("/"),
	routes: [
		{
			path: "/login",
			name: "Login",
			component: Login,
		},
		{
			path: "/game",
			name: "Game",
			component: Game,
		},
		{
			path: "/game/:id",
			name: "ChosenQuestion",
			component: ChosenQuestion,
		},
		{
			path: "/",
			name: "Start",
			component: Start,
		},
	],
});
