<script>
import NavbarFoot from "./components/NavbarFoot.vue";
export default {
	name: "App",
	components: { NavbarFoot },
};
</script>

<template>
	<RouterView />
	<NavbarFoot />
</template>

<style scoped></style>
