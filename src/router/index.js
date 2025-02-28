import { createRouter, createWebHistory } from "vue-router"

import Start from "../views/Start.vue"
import Game from "../views/Game.vue"
import Highscore from "../views/Highscore.vue"
import Login from "../views/Login.vue"
import Profile from "../views/Profile.vue"
import ChosenQuestion from "../views/ChosenQuestion.vue"
import ResultScreen from "../views/ResultScreen.vue"

export default createRouter({
  history: createWebHistory("/"),
  routes: [
    {
      path: "/",
      name: "Login",
      component: Login,
      meta: { hideNavbars: true }
    },
    {
      path: "/game",
      name: "Game",
      component: Game
    },
    {
      path: "/game/:id",
      name: "ChosenQuestion",
      component: ChosenQuestion
    },
    {
      path: "/game/result",
      name: "ResultScreen",
      component: ResultScreen
    },
    {
      path: "/highscore",
      name: "Highscore",
      component: Highscore
    },
    {
      path: "/profile",
      name: "Profile",
      component: Profile
    },
    {
      path: "/start",
      name: "Start",
      component: Start
    }
  ]
})
