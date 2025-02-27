<template>
  <div class="profile-wrapper">
    <div class="profile-header">
      <img class="profile-avatar" :src="base_url + user.avatar" alt="Profilbild" @error="useDefaultAvatar">
      <h2 class="profile-name">{{ user.username }}</h2>
      <p class="points">{{ user.points }} p</p>
      <button @click="showFriends = !showFriends" class="friend-button">Vänner</button>
      <ul v-if="showFriends" class="friends-list">
        <li v-for="friend in users" :key="friend.id" class="friend-item">
          <img :src="base_url + friend.avatar" alt="Avatar" class="friend-avatar"/>
          <span class="friend-name">{{ friend.username }}</span>
          <span class="friend-points">{{ friend.points }} p</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import users from "../lib/users.json";
import { useUserStorage } from "../stores/storage";

export default {
  data() {
    return {
      base_url: "src/",userStorage:useUserStorage(),
      showFriends: false,
      users: users
    };
  },
  computed: {
    user() {
      return useUserStorage().activeUser;
    }
  },
  methods: {
    useDefaultAvatar(event) {
      event.target.src = "src/assets/images/user-avatars/avatar-image.jpg";
    }
  }
};
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

.profile-avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
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

.friend-button {
  background-color: var(--color-secondary);
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: var(--border-radius);
  margin-top: 15px;
  cursor: pointer;
  transition: var(--transition);
}

.friend-button:hover {
  background-color: var(--color-card-hover);
}

.friends-list {
  list-style: none;
  margin-top: 10px;
  background: var(--color-card-background);
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  padding: 10px;
  width: 300px;
}

.friend-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  font-size: 1.2rem;
  color: var(--color-neutral-dark);
  border-bottom: 1px solid hsla(0, 0%, 0%, 0.1);
}

.friend-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
}

.friend-name {
  flex-grow: 1;
}

.friend-points {
  font-weight: bold;
  color: var(--color-secondary);
}
</style>