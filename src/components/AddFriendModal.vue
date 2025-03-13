<template>
    <div v-if="isOpen" id="modal-container" @click.self="$emit('close')">
        <div id="flex-container">
            <div id="user-list">
                <div id="user-list-wrapper">
                    <h2>Lägg till en vän</h2>
                    <div>
                        <div
                            class="friend"
                            v-for="friend in friends"
                            :key="friend.id"
                        >
                            <img :src="friend.avatar" alt="avatar" />
                            <p>{{ friend.username }}</p>
                            <p id="points">Points: {{ friend.totalPoints }}</p>
                            <span
                                id="adduser"
                                class="material-symbols-outlined"
                                @click="addFriend(friend)"
                            >
                                add
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        emits: ["close", "friend-added"],
        props: {
            isOpen: Boolean,
            friends: {
                type: Array,
                required: true
            }
        },
        methods: {
            addFriend(friend) {
                this.$emit("friend-added", friend)
            }
        }
    }
</script>

<style scoped>
    #modal-container {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.2);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #flex-container {
        background: var(--color-neutral-light);
        padding: 20px;
        border-radius: 12px;
        width: 300px;
        max-height: 80vh;
        overflow-y: auto;
    }

    #user-list {
        text-align: center;
    }

    h2 {
        color: var(--color-neutral-dark);
        font-size: 1.2rem;
        font-weight: bold;
    }

    .friend {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px;
        border-bottom: 1px solid #ddd;
    }

    .friend img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }

    .friend p {
        color: var(--color-neutral-dark);
        font-size: 1rem;
        font-weight: 500;
    }

    .friend-name {
        color: var(--color-neutral-dark);
    }

    #points {
        color: var(--color-neutral-dark);
        font-size: 0.7rem;
        margin-left: 1rem;
    }

    #adduser {
        cursor: pointer;
        font-size: 1.5rem;
        color: var(--color-neutral-dark);
    }
</style>
