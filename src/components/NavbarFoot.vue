<script>
export default {
	data() {
		return { isSubMenuOpen: false };
	},
};
</script>
<template>
	<nav class="navbar">
		<div class="navbar-content-mobile">
			<router-link to="/" style="display: contents">
				<span class="material-icons md-36">leaderboard</span></router-link
			>
			<router-link to="/" style="display: contents"
				><span id="crown" class="material-icons md-36">crown</span></router-link
			>
			<router-link to="/" style="display: contents"
				><span class="material-icons md-36">settings</span></router-link
			>
		</div>
	</nav>
</template>
<style scoped>
span {
	height: 37px;
	width: 37px;
	color: #e8e8e8;
	display: flex;
	justify-content: center;
	align-items: center;
}

.navbar {
	width: 100%;
}
.navbar-content-mobile {
	padding: 16px 70px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	background: rgba(246, 246, 246, 0.3);
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
