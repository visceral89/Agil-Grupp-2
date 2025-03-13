<template>
    <button>
        <slot>{{ label }}</slot>
    </button>
</template>

<script>
    export default {
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
        color: var(--color-neutral-light);
        font-size: 20px;
        font-weight: 500;
        &:hover {
            background-color: var(--color-secondary-hover);
        }
    }
</style>
