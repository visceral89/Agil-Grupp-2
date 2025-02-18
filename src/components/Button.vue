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
button {
    background-color: white; /* Ändra till variabel? */
    border: none;
    border-radius: .5em;
    color: black; /* Ändra till variabel? */
    cursor: pointer;
    font-size: 1em;
    padding: .6em 1em;
    transition: all 200ms ease-in-out;
    &:hover {
        background-color: black;
        color: white;
    }
}
</style>