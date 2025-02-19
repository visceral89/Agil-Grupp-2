<script>
import NavbarFoot from "./components/NavbarFoot.vue";
import NavbarTop from "./components/NavbarTop.vue";
export default {
	name: "App",
	components: { NavbarTop, NavbarFoot },
};
</script>

<template>
	<NavbarTop />
	<RouterView />
	<NavbarFoot />
</template>

<style scoped></style>
