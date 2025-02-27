<template>
	<NavbarTop v-if="!hideNav"/>
	<RouterView />
	<NavbarFoot  v-if="!hideNav"/>
</template>

<script>
import NavbarFoot from "./components/NavbarFoot.vue";
import NavbarTop from "./components/NavbarTop.vue";
export default {
	name: "App",
	components: { NavbarTop, NavbarFoot },
	computed: {
		hideNav() {
			return this.$route.meta.hideNavbars == true
		}
	}
};
</script>

<style scoped></style>
