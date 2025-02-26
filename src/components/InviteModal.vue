<template>
	<div @click="$emit('is-invite-open')" id="modal-container">
		<div id="flex-container">
			<div id="user-list"></div>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {};
	},
};
</script>
<style scoped>
#modal-container {
	position: absolute;
	top: 0;
	right: 0;
	left: 0;
	bottom: 0;
	background-color: hsla(0, 0%, 0%, 0.5);
	backdrop-filter: blur(5px);
}
#flex-container {
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
}

#user-list {
	background-color: hsl(0, 0%, 90%);
	width: 300px;
	height: 300px;
	border-radius: 12px;
}
</style>
