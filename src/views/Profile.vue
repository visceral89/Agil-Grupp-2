<template>
  <div class="profile-wrapper">
    <div class="profile-header">
      <div class="profile-avatar-container">
        <img class="profile-avatar" :src="base_url + user.avatar" alt="Profilbild" @error="useDefaultAvatar">
        <img v-if="user.username === 'Gustav'" class="profile-crown" src="/crown-logo.webp" alt="Crown">
      </div>
      <h2 class="profile-name">{{ user.username }}</h2>
      <div class="badge-container">
        <img class="badge" src="/src/assets/images/badge1.png" alt="Badge 1">
        <img class="badge" src="/src/assets/images/badge2 (1).png" alt="Badge 2">
        <img class="badge" src="/src/assets/images/badge3 (1).png" alt="Badge 3">
      </div>
      <p class="points">{{ user.points }} p</p>
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import users from "../lib/users.json";
import { computed, ref } from "vue";

export default {
  setup() {
    const route = useRoute();
    const base_url = ref("src/");
    const userId = computed(() => Number(route.params.id));
    const highscoreList = computed(() => [...users].sort((a, b) => b.points - a.points));
    const topPlayer = computed(() => highscoreList.value[0]);
    
    const user = computed(() => users.find(u => u.id === userId.value) || topPlayer.value);

    const useDefaultAvatar = (event) => {
      event.target.src = base_url.value + "assets/images/user-avatars/avatar-image.jpg";
    };

    return { user, base_url, useDefaultAvatar };
  }
};
</script>

<style scoped>
.profile-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 3em;
  margin-bottom: 3em;
}

.profile-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.profile-avatar-container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.profile-avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
  object-fit: cover;
}

.profile-crown {
  position: absolute;
  top: -52px;
  width: 64px;
  height: 64px;
}

.profile-name {
  margin-top: 10px;
  font-size: 1.8rem;
  font-weight: bold;
}

.badge-container {
  display: flex;
  gap: 20px;
  margin-top: 15px;
  justify-content: center;
}

.badge {
  width: 40px;
  height: 40px;
  object-fit: contain;
}

.points {
  font-size: 1.5rem;
  margin-top: 15px;
  font-weight: bold;
}
</style>
