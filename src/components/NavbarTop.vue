<script>
export default {
	data() {
		return {};
	},
};
</script>

<template>
	<nav class="navbar">
		<div class="navbar-content-mobile">
			<router-link to="/profile">
				<span class="material-symbols-outlined md-36">account_circle</span>
			</router-link>
			<img src="../assets/logo/FF-simple-logo.webp" alt="frage fejden logo" />
			<router-link to="/">
				<span class="material-symbols-outlined md-36">help</span>
			</router-link>
		</div>
		<div class="navbar-content-desktop">
			<div class="logo-container">
				<img src="../assets/logo/FF-simple-logo.webp" alt="frage fejden logo" />
			</div>
			<div class="links-container">
				<router-link to="/">spela</router-link>
				<router-link to="/">ranking</router-link>
				<router-link to="/profile">profil</router-link>
				<router-link to="/">inställningar</router-link>
			</div>
		</div>
	</nav>
</template>

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

.logo-container {
	display: flex;
	flex-grow: 1;
}
.links-container {
	display: flex;
	gap: 2rem;
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
