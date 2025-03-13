<template>
    <nav class="navbar animate__animated animate__fadeIn">
        <div class="navbar-padding">
            <div class="navbar-content-mobile">
                <router-link to="/highscore" style="display: contents">
                    <span class="material-symbols-outlined md-36"
                        >leaderboard</span
                    ></router-link
                >
                <router-link to="/start" style="display: contents"
                    ><span
                        id="crown"
                        class="material-symbols-outlined md-36"
                        @click="toggleSubMenu"
                        >crown</span
                    ></router-link
                >
                <router-link
                    to="/"
                    style="display: contents"
                    @click="handleLogout"
                    ><span class="material-symbols-outlined md-36"
                        >logout</span
                    ></router-link
                >
            </div>
        </div>
    </nav>
</template>
<script>
    import { useUserStorage } from "../stores/storage"
    export default {
        data() {
            return { isSubMenuOpen: false, userStorage: useUserStorage() }
        },
        methods: {
            toggleSubMenu() {
                this.isSubMenuOpen = !this.isSubMenuOpen
            }
        }
    }
</script>
<style scoped>
    span {
        font-size: 34px;
        color: #e8e8e8;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .navbar {
        width: 100%;
        position: fixed;
        bottom: 6px;
    }
    .navbar-padding {
        padding-left: 6px;
        padding-right: 6px;
    }
    .navbar-content-mobile {
        background: var(--color-navbar-foot-background);
        padding: 16px 70px;
        border-radius: 6px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    #crown {
        font-size: 50px;
    }

    @media (min-width: 890px) {
        .navbar-content-mobile {
            display: none;
        }
    }
</style>
