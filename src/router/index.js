// Router går här
import { createRouter, createWebHistory } from "vue-router";

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
	],
});
