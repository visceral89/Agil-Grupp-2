<template>
    <div class="profile-wrapper">
        <div class="profile-header">
            <div class="avatar-container">
                <img
                    v-if="isTopScorer"
                    class="crown"
                    src="../assets/images/highscore-crown.webp"
                    alt="Krona"
                />
                <img
                    class="profile-avatar"
                    :src="user.avatar"
                    alt="Profilbild"
                />
            </div>
            <h2 class="profile-name">{{ user.username }}</h2>

            <h3 class="achievements-title">Utmärkelser</h3>
            <Achievments />

            <p class="points">{{ user.totalPoints }} p</p>

            <h3 class="friends-title">Vänner</h3>
            <div class="friends-list-container">
                <ul class="friends-list">
                    <li
                        v-for="friend in userFriends"
                        :key="friend.id"
                        class="friend-item"
                    >
                        <img
                            :src="friend.avatar"
                            alt="Avatar"
                            class="friend-avatar"
                        />
                        <span class="friend-name">{{ friend.username }}</span>
                        <span class="friend-points"
                            >{{ friend.totalPoints }} p</span
                        >
                        <span
                            class="remove-friend material-symbols-outlined"
                            @click="removeFriend(friend.id)"
                            >close</span
                        >
                    </li>
                </ul>
            </div>

            <div style="margin-top: 20px">
                <CustomButton class="add-friend-btn" @click="isModalOpen = true"
                    >Lägg till en vän</CustomButton
                >
            </div>
        </div>

        <Transition name="fade">
            <AddFriendModal
                :is-open="isModalOpen"
                :friends="filteredFriends"
                @friend-added="addFriend"
                @friend-removed="removeFriend"
                @close="isModalOpen = false"
            />
        </Transition>
    </div>
</template>

<script>
    import users from "../lib/users.json"
    import { useUserStorage } from "../stores/storage"
    import Achievments from "../components/Achievments.vue"
    import CustomButton from "../components/CustomButton.vue"
    import AddFriendModal from "../components/AddFriendModal.vue"

    export default {
        data() {
            return {
                userStorage: useUserStorage(),
                isModalOpen: false
            }
        },
        computed: {
            user() {
                return this.userStorage.loggedInUser
            },
            userFriends() {
                return this.user?.friends || []
            },
            filteredFriends() {
                return users.filter(
                    (friend) =>
                        friend.id !== this.user.id &&
                        !this.userFriends.some((f) => f.id === friend.id)
                )
            },
            maxPoints() {
                return Math.max(...users.map((user) => user.totalPoints))
            },
            isTopScorer() {
                return this.user.totalPoints === this.maxPoints
            }
        },
        methods: {
            addFriend(friend) {
                if (!this.userFriends.some((f) => f.id === friend.id)) {
                    this.userStorage.loggedInUser.friends.push(friend)
                }
                this.isModalOpen = false
            },
            removeFriend(friendId) {
                this.userStorage.loggedInUser.friends =
                    this.userStorage.loggedInUser.friends.filter(
                        (friend) => friend.id !== friendId
                    )
            }
        },
        components: {
            Achievments,
            CustomButton,
            AddFriendModal
        }
    }
</script>

<style scoped>
    .profile-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 3em;
        margin-bottom: 3em;
    }

    .profile-header {
        text-align: center;
    }

    .avatar-container {
        position: relative;
        display: inline-block;
    }

    .crown {
        position: absolute;
        top: -49px;
        left: 50%;
        transform: translateX(-50%);
        width: 80px;
        height: auto;
    }

    .profile-avatar {
        width: 120px;
        height: 120px;
        border-radius: 50%;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        object-fit: cover;
    }

    .profile-name {
        font-size: 1.8rem;
        font-weight: bold;
        margin-top: 10px;
    }

    .points {
        margin-top: 10px;
        font-size: 1.5rem;
        font-weight: bold;
    }

    .achievements-title,
    .friends-title {
        font-size: 1.5rem;
        font-weight: bold;
        text-align: center;
        margin-top: 15px;
        margin-bottom: 5px;
        color: var(--color-neutral-light);
    }

    .friends-list-container {
        width: 100%;
        max-width: 420px;
        height: 70px;
        overflow-y: auto;
        scrollbar-width: none;
        -ms-overflow-style: none;
        scroll-behavior: smooth;
    }

    .friends-list {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;
        padding: 0;
        list-style: none;
        width: 100%;
    }

    .friend-item {
        display: flex;
        align-items: center;
        background: var(--color-card-background);
        border-radius: var(--border-radius);
        padding: 3px 8px;
        box-shadow: var(--box-shadow);
        width: 100%;
        max-width: 185px;
        justify-content: space-between;
        gap: 5px;
    }

    .friend-avatar {
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }

    .friend-name {
        font-size: 1rem;
        color: var(--color-neutral-dark);
        flex-grow: 0;
        margin-left: 0;
    }

    .friend-points {
        font-size: 0.7rem;
        color: var(--color-secondary);
        margin-left: auto;
    }

    .remove-friend {
        cursor: pointer;
        color: var(--color-neutral-dark);
        font-size: 1.2rem;
        transition: color 0.3s ease;
        margin-left: auto;
    }

    .remove-friend:hover {
        color: var(--color-neutral-grey);
    }
</style>
