// Router går här
import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

import Start from "../views/Start.vue";

export default createRouter({
	history: createWebHistory("/"),
	routes: [
		{
			path: "/",
			name: "Login",
			component: Home,
		},
		{
			path: "/start",
			name: "Start",
			component: Start,
		},
	],
});
