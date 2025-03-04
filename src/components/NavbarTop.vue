<template>
    <nav class="navbar">
        <div class="navbar-content-mobile">
            <router-link to="/profile">
                <span class="material-symbols-outlined md-36"
                    >account_circle</span
                >
            </router-link>
            <router-link to="/start">
                <img
                    src="../assets/logo/FF-simple-logo.webp"
                    alt="frage fejden logo"
            /></router-link>
            <router-link to="/">
                <span class="material-symbols-outlined md-36">help</span>
            </router-link>
        </div>
        <div class="navbar-content-desktop">
            <router-link to="/start" style="display: contents">
                <div class="logo-container">
                    <img
                        src="../assets/logo/FF-simple-logo.webp"
                        alt="frage fejden logo"
                        class="logo"
                    />
                </div>
            </router-link>
            <div class="links-container">
                <router-link to="/start">spela</router-link>
                <router-link to="/highscore">highscore</router-link>
                <router-link to="/profile">profil</router-link>
                <router-link to="/" id="logout-link" @click="handleLogout"
                    ><div id="logout">
                        logga ut
                        <span class="material-symbols-outlined"> logout </span>
                    </div>
                </router-link>
            </div>
        </div>
    </nav>
</template>
<script>
    import { useUserStorage } from "../stores/storage"
    export default {
        data() {
            return {
                userStorage: useUserStorage()
            }
        },
        methods: {
            handleLogout() {
                // We clear the loggedInUser and also Player 1 & 2. Theese gets re-added on login.
                this.userStorage.logoutUser()
                this.userStorage.clearPlayers()
            }
        }
    }
</script>

<style scoped>
    span {
        font-size: 40px;
        color: #e8e8e8;
    }
    img {
        width: 154px;
        height: 77px;
    }

    .navbar {
        width: 100%;
        background: transparent;
        text-transform: uppercase;
        font-weight: bold;
    }
    .navbar-content-mobile {
        padding: 16px 20px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .navbar-content-desktop {
        display: none;
    }
    .logo {
        transition: all 0.5s ease;
    }
    .logo:hover {
        transform: scale(1.1);
    }
    .logo-container {
        display: flex;
        flex-grow: 1;
    }
    .links-container {
        display: flex;
        gap: 2rem;
    }
    #logout {
        font-size: 1rem;
        display: flex;
        align-items: center;
        gap: 1rem;
        span {
            font-size: 20px;
        }
        /* Funkade inte att köra &:hover */
    }
    #logout-link:hover {
        color: var(--color-accent);
    }

    @media (min-width: 890px) {
        .navbar-content-mobile {
            display: none;
        }
        .navbar-content-desktop {
            padding: 16px 50px;
            display: flex;
            align-items: center;
        }
    }
    @media (min-width: 1200px) {
        .links-container {
            gap: 100px;
        }
    }
</style>
