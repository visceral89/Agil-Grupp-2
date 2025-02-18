// Router går här
import { createRouter, createWebHistory } from "vue-router";

import Start from "../views/Start.vue";

export default createRouter({
	history: createWebHistory("/"),
	routes: [
		{
			path: "/",
			name: "Login",
			component: Hej,
		},
		{
			path: "",
			name: "Profil",
			component: Hej,
		},
		{
			path: "/start",
			name: "Start",
			component: Start,
		},
	],
});
