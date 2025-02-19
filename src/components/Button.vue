<template>
    <button :class="btn" @click="onClick">
        <slot>{{ label }}</slot>
    </button>
</template>

<script>
export default {
    methods: {
        onClick() {
            console.log('btn click')
        }
    },
    props: {
        label: {
            type: String,
            default: 'Button'
        }
    }
}
</script>

<style scoped>
.btn {
    border-radius: 6px;
    box-shadow: -2px 4px 0 0 rgba(0, 0, 0, 0.2);
    padding: 1.375em 2.5625em;
}
.btn-game-card {
    background-color: #E4CFF1; /* Ändra till variabel soft-pink */
}
</style>