<template>
    <NavbarTop v-if="!hideNav" />
    <Router-View v-slot="{ Component, route }">
        <Transition
            :enter-active-class="route.meta.enterClass"
            :leave-active-class="route.meta.leaveClass"
            mode="out-in"
        >
            <component :is="Component" />
        </Transition>
    </Router-View>
    <NavbarFoot v-if="!hideNav" />
</template>

<script>
    import NavbarFoot from "./components/NavbarFoot.vue"
    import NavbarTop from "./components/NavbarTop.vue"
    export default {
        name: "App",
        components: { NavbarTop, NavbarFoot },
        computed: {
            hideNav() {
                return this.$route.meta.hideNavbars == true
            }
        }
    }
</script>

<style scoped>
    nav {
        animation-duration: 2s;
    }

    .animate__zoomIn,
    .animate__zoomOut {
        animation-duration: 1s;
    }
</style>
