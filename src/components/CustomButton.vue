<template>
    <button @click="onClick">
        <slot>{{ label }}</slot>
    </button>
</template>

<script>
    export default {
        methods: {
            onClick() {
                console.log("btn click")
            }
        },
        props: {
            label: {
                type: String,
                default: "CustomButton"
            }
        }
    }
</script>

<style scoped>
    button {
        background: var(--color-secondary);
        padding: 9px 26px 9px 25px;
        color: #ececec;
        font-family: Poppins;
        font-size: 20px;
        font-weight: 500;
        &:hover {
            background-color: var(--color-secondary-hover);
        }
    }
</style>
