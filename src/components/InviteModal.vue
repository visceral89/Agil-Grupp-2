<template>
	<div @click="$emit('is-invite-open')" id="modal-container">
		<div id="flex-container">
			<div id="user-list">
				<div id="user-list-wrapper">
					<h2>Lägg till motståndare</h2>
					<div>
						<div class="friend" v-for="user in users">
							<img :src="'src/' + user.avatar" alt="avatar" />
							<p>{{ user.username }}</p>
							<p id="points">Points: {{ user.points }}</p>
							<span class="material-symbols-outlined" @click="inviteFriend(user.id)"> add </span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import users from "../lib/users.json";
import { useUserStorage } from "../stores/storage";
export default {
	data() {
		return { users: users, userStorage: useUserStorage() };
	},
	methods: {
		inviteFriend(id) {
			// Skicka detta till Pinia.
			console.log(`Friend ${id} invited`);
		},
	},
};
</script>
<style scoped>
h2,
p,
span {
	color: var(--color-neutral-dark);
}
img {
	height: 32px;
	width: 32px;
	margin-right: 1rem;
}
span {
	font-size: 1.8rem;
}
#modal-container {
	position: absolute;
	top: 0;
	right: 0;
	left: 0;
	bottom: 0;
	background-color: hsla(0, 0%, 0%, 0.2);
	backdrop-filter: blur(5px);
}
#flex-container {
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
}

#user-list {
	z-index: 999;
	overflow-y: scroll;
	background-color: var(--color-neutral-light);
	width: 300px;
	height: 600px;
	border-radius: 12px;
}
#user-list-wrapper {
	padding: 1.5rem;
}
#points {
	font-size: 0.7rem;
}
.friend {
	display: grid;
	grid-template-columns: auto 1fr auto auto;
	align-items: center;
	border-bottom: 1px solid hsla(0, 0%, 0%, 0.1);
}

@media (min-width: 700px) {
	#user-list {
		height: 450px;
		width: 700px;
	}
}
</style>
