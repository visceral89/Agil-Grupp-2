<template>
    <button @click="onClick">
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
</style>