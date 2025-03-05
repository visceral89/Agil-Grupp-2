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
            meta: {
                hideNavbars: true,
                enterClass: "animate__animated animate__zoomIn",
                leaveClass: "animate__animated animate__zoomOut"
            }
        },
        {
            path: "/game",
            name: "Game",
            component: Game,
            meta: {
                enterClass: "animate__animated animate__fadeIn",
                leaveClass: "animate__animated animate__fadeOut"
            }
        },
        {
            path: "/game/:id",
            name: "ChosenQuestion",
            component: ChosenQuestion,
            meta: {
                enterClass: "animate__animated animate__fadeIn",
                leaveClass: "animate__animated animate__fadeOut"
            }
        },
        {
            path: "/game/result",
            name: "ResultScreen",
            component: ResultScreen,
            meta: {
                enterClass: "animate__animated animate__fadeIn",
                leaveClass: "animate__animated animate__fadeOut"
            }
        },
        {
            path: "/highscore",
            name: "Highscore",
            component: Highscore,
            meta: {
                enterClass: "animate__animated animate__fadeInRight",
                leaveClass: "animate__animated animate__fadeOutLeft"
            }
        },
        {
            path: "/profile",
            name: "Profile",
            component: Profile,
            meta: {
                enterClass: "animate__animated animate__fadeInRight",
                leaveClass: "animate__animated animate__fadeOutLeft"
            }
        },
        {
            path: "/start",
            name: "Start",
            component: Start,
            meta: {
                enterClass: "animate__animated animate__fadeInRight",
                leaveClass: "animate__animated animate__zoomOut"
            }
        }
    ]
})
