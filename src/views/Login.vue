<template>
	<div class="login-wrapper">
		<img class="login-logo" src="../assets/logo/FF-logo.webp" alt="FrågeFejden logotyp">
	</div>
	<form @submit.prevent="checkLogin" class="login-form">
		<input v-model="loginUsername" type="text" placeholder="Användarnamn">
		<input v-model="loginPassword" type="password" placeholder="Lösenord">
		<input type="submit" value="Logga in">
		<Button />
	</form>
</template>

<script>
import Button from "../components/Button.vue";
import users from "../lib/users.json"
import { useUserStorage } from "../stores/storage";

export default {
	components: {
		Button
	},
	data() {
		return { 
			loginPassword: '',
			loginUsername: '',
			users,
			userStorage: useUserStorage() 
		};
	},
	methods: {
		checkLogin() {
			console.log(this.users)
		}
	}
};
</script>

<style scoped>
.login-wrapper {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 4em;
  padding-top: 2em;
}

.login-logo {
	max-width: 30em;
	width: 50%;
}

.login-form {
	align-items: center;
	display: flex;
	flex-direction: column;
	input {
		background: var(--color-neutral-light);
		border: none;
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

input[type="submit"] {
		background: var(--color-secondary);
		padding: 9px 26px 9px 25px;
		color: #ECECEC;
		font-family: Poppins;
		font-size: 20px;
		font-weight: 500;
		&:hover {
			background-color: var(--color-card-hover);
		}
	}
	Button {
		background: var(--color-secondary);
		padding: 9px 26px 9px 25px;
		color: #ECECEC;
		font-family: Poppins;
		font-size: 20px;
		font-weight: 500;
		&:hover {
			background-color: var(--color-card-hover);
		}
	}
</style>
