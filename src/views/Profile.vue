<template>
  <div class="profile-wrapper">
    <div class="profile-header">
      <div class="avatar-container">
        <img v-if="isTopScorer" class="crown" src="../assets/images/highscore-crown.webp" alt="Krona"/>
        <img class="profile-avatar" :src="base_url + user.avatar" alt="Profilbild" @error="useDefaultAvatar">
      </div>
      <h2 class="profile-name">{{ user.username }}</h2>
      <Achievments />
      <p class="points">{{ user.points }} p</p>

      <h3 class="friends-title">Vänner</h3>

      <div class="friends-list-container">
        <ul class="friends-list">
          <li v-for="friend in filteredFriends" :key="friend.id" class="friend-item">
            <img :src="base_url + friend.avatar" alt="Avatar" class="friend-avatar"/>
            <span class="friend-name">{{ friend.username }}</span>
            <span class="friend-points">{{ friend.points }} p</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import users from "../lib/users.json";
import { useUserStorage } from "../stores/storage";
import Achievments from '../components/Achievments.vue';

export default {
  data() {
    return {
      base_url: "src/",
      userStorage: useUserStorage()
    };
  },
  computed: {
    user() {
      return this.userStorage.loggedInUser;
    },
    filteredFriends() {
      return users.filter(friend => friend.id !== this.user.id);
    },
    maxPoints() {
      return Math.max(...users.map(user => user.points));
    },
    isTopScorer() {
      return this.user.points === this.maxPoints;
    }
  },
  methods: {
    useDefaultAvatar(event) {
      event.target.src = "src/assets/images/user-avatars/avatar-image.jpg";
    }
  },
  components: {
    Achievments
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

.avatar-container {
  position: relative;
  display: inline-block;
}

.crown {
  position: absolute;
  top: -55px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: auto;
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
  max-width: 600px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  margin-top: 0px;
}

.friends-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  padding: 0;
  list-style: none;
}

.friend-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.friend-avatar {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  margin-bottom: 3px;
}

.friend-name {
  font-size: 0.9rem;
  font-weight: bold;
}

.friend-points {
  font-size: 0.8rem;
  color: var(--color-secondary);
}
</style>

