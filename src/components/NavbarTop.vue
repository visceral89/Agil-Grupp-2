<template>
    <nav class="navbar animate__animated animate__fadeIn">
        <div class="navbar-content-mobile">
            <router-link to="/profile">
                <span class="material-symbols-outlined md-36 mobile-icon"
                    >account_circle</span
                >
            </router-link>
            <router-link to="/start">
                <img
                    src="../assets/logo/FF-simple-logo.webp"
                    alt="frage fejden logo"
            /></router-link>
            <span
                @click="isHelpModalOpen = true"
                class="material-symbols-outlined md-36 mobile-icon help-modal"
                >help</span
            >
        </div>
        <div class="navbar-content-desktop">
            <div class="logo-container">
                <router-link to="/start" style="display: contents">
                    <img
                        src="../assets/logo/FF-simple-logo.webp"
                        alt="frage fejden logo"
                        class="logo"
                    />
                </router-link>
            </div>

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
            <span
                @click="isHelpModalOpen = true"
                class="material-symbols-outlined md-36 help-modal"
                >help</span
            >
        </div>
    </nav>
    <Teleport to="body">
        <Transition name="fade">
            <HelpModal
                v-if="isHelpModalOpen"
                @is-help-modal-open="toggleHelpModal"
            />
        </Transition>
    </Teleport>
</template>
<script>
    import { useUserStorage } from "../stores/storage"
    import HelpModal from "./HelpModal.vue"

    export default {
        components: {
            HelpModal
        },
        data() {
            return {
                isHelpModalOpen: false,
                userStorage: useUserStorage()
            }
        },
        methods: {
            handleLogout() {
                // We clear the loggedInUser and also Player 1 & 2. Theese gets re-added on login.
                console.log("Logout logik flyttad till /")
            },
            toggleHelpModal() {
                this.isHelpModalOpen = !this.isHelpModalOpen
            }
        }
    }
</script>

<style scoped>
    .mobile-icon {
        font-size: 40px;
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
        transform: scale(1.05);
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
        transition: var(--transition);
        span {
            font-size: 20px;
        }
        &:hover {
            color: var(--color-accent);
        }
    }

    .help-modal {
        cursor: pointer;
        padding-bottom: 6.5px;
        transition: var(--transition);
        &:hover {
            color: var(--color-accent);
        }
    }

    /* Modal transition */
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 250ms ease-in-out;
    }

    .fade-enter-from,
    .fade-leave-to {
        opacity: 0;
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

        .help-modal {
            bottom: 2em;
            position: absolute;
            right: 2em;
        }
    }
    @media (min-width: 1200px) {
        .links-container {
            gap: 100px;
        }
    }
</style>
