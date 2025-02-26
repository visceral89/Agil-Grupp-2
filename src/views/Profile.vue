<template>
  <div class="profile-wrapper">
    <div class="profile-header">
      <div class="profile-avatar-container">
        <img class="profile-avatar" :src="base_url + user.avatar" alt="Profilbild" @error="useDefaultAvatar">
      </div>
      <h2 class="profile-name">{{ user.username }}</h2>
      <p class="points">{{ user.points }} p</p>
    </div>
  </div>
</template>

<script>
import { useUserStorage } from "../stores/storage";

export default {
  data() {
    return {
      base_url: "src/",userStorage:useUserStorage()
    };
  },
  computed: {
    user() {
      return useUserStorage().activeUser; 
    }
  },
  methods: {
    useDefaultAvatar(event) {
      event.target.src = this.base_url + "assets/images/user-avatars/avatar-image.jpg";
    }
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

.profile-name {
  margin-top: 10px;
  font-size: 1.8rem;
  font-weight: bold;
}

.points {
  font-size: 1.5rem;
  margin-top: 15px;
  font-weight: bold;
}
</style>
