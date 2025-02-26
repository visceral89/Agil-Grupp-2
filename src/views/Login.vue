<template>{{ userStorage.activeUser.username }} {{ userStorage.activeUser.id }}</template>

<script>
import { useUserStorage } from "../stores/storage";

export default {
	data() {
		return { userStorage: useUserStorage() };
	},
};
</script>

<style scoped></style>
