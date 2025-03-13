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
        padding: 0.8rem 1.8rem;
        color: var(--color-neutral-light);
        font-size: 20px;
        font-weight: 500;
        &:hover {
            background-color: var(--color-secondary-hover);
        }
    }
</style>
