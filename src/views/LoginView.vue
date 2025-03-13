<template>
    <div class="login-wrapper">
        <div class="logo-wrapper">
            <img
                class="login-logo"
                src="../assets/logo/FF-logo.webp"
                alt="FrågeFejden logotyp"
            />
        </div>
        <Transition name="fade" mode="out-in">
            <form
                v-if="!guestForm"
                @submit.prevent="handleLogin"
                class="login-form"
            >
                <input
                    v-model="loginUsername"
                    type="text"
                    placeholder="Användarnamn"
                />
                <input
                    v-model="loginPassword"
                    type="password"
                    placeholder="Lösenord"
                />
                <p v-if="loginError" class="login-error-msg">
                    {{ errorMessage }}
                </p>
                <CustomButton>Logga in</CustomButton>
                <p @click="toggleLogin" class="login-option">
                    Logga in som gäst
                </p>
            </form>
            <form
                v-else
                @submit.prevent="handleGuestLogin"
                class="guest-login-form"
            >
                <input
                    v-model="loginGuestname"
                    type="text"
                    placeholder="Gästnamn"
                />
                <p v-if="loginError" class="login-error-msg">
                    {{ errorMessage }}
                </p>
                <CustomButton>Logga in</CustomButton>
                <p @click="toggleLogin" class="login-option">
                    Logga in som användare
                </p>
            </form>
        </Transition>
    </div>
</template>

<script>
    import CustomButton from "../components/CustomButton.vue"
    import users from "../lib/users.json"
    import { useUserStorage } from "../stores/storage"

    export default {
        components: {
            CustomButton
        },
        data() {
            return {
                errorMessage: "",
                guestForm: false,
                loginError: false,
                loginGuestname: "",
                loginPassword: "",
                loginUsername: "",
                //users: users, //Överflödigt??
                userStorage: useUserStorage()
            }
        },
        methods: {
            handleLogin() {
                //Se ifall värdet i input-fälten stämmer överens med någon användare i users.json
                const loggedInUser = users.find(
                    (user) =>
                        user.username === this.loginUsername &&
                        user.password === this.loginPassword
                )

                //Om värdet stämmer omdirigera till startskärmen, annars generera ett felmeddelande
                if (loggedInUser) {
                    this.userStorage.loginUser(loggedInUser)
                    this.$router.push("/start")
                } else {
                    this.errorMessage = "Fel inloggningsuppgifter."
                    this.loginError = true
                }
            },
            handleGuestLogin() {
                //Se ifall input-fältet för Gästnamn inte är tomt
                if (this.loginGuestname.length > 0) {
                    const loggedInGuest = this.userStorage.guestUser
                    loggedInGuest.username = this.loginGuestname

                    //Nollställ ev. tidigare guestUser-data
                    this.userStorage.guestUser.totalPoints = 0
                    this.userStorage.guestUser.achievements = []

                    //Logga in ny guestUser
                    this.userStorage.loggedInGuestUser = true
                    this.userStorage.loginUser(loggedInGuest)
                    this.$router.push("/start")
                } else {
                    this.errorMessage = "Ange ett gästnamn."
                    this.loginError = true
                }
            },
            toggleLogin() {
                this.loginError = false
                this.guestForm = !this.guestForm
            }
        },
        created() {
            // Clears the players from previous values. Setting to null.
            this.userStorage.logoutUser()
            this.userStorage.clearPlayers()
        }
    }
</script>

<style scoped>
    .login-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100vh;
    }

    .logo-wrapper {
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-bottom: 3em;
        .login-logo {
            max-width: 20em;
            width: 60%;
        }
    }

    .login-form,
    .guest-login-form {
        align-items: center;
        display: flex;
        flex-direction: column;
        margin-bottom: 4em;
        input {
            background: var(--color-neutral-light);
            border: 1px solid var(--color-neutral-dark);
            border-radius: var(--border-radius);
            display: flex;
            justify-content: center;
            max-width: 10em;
            padding: var(--padding-card);
            &::placeholder {
                text-align: center;
            }
        }
        input + input {
            margin: 1em 0 4em;
        }
    }

    .login-option {
        cursor: pointer;
        font-size: 0.9em;
        text-decoration: underline;
        transition: var(--transition);
        &:hover {
            color: var(--color-accent);
        }
    }

    .guest-login-form input {
        margin: 2em 0 6em;
    }

    .login-error-msg {
        font-size: 0.8em;
        position: absolute;
        transform: translateY(7em);
    }

    /* Form transition */
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 250ms ease-in-out;
    }

    .fade-enter-from,
    .fade-leave-to {
        opacity: 0;
    }
</style>
