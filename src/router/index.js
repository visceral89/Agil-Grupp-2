// Router går här
import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

export default createRouter({
	history: createWebHistory("/"),
	routes: [
		{
			path: "/",
			name: "Login",
			component: Home,
		},
	],
});
