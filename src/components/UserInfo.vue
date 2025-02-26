<template>
  <div class="user-wrapper">
    <div class="user-img-wrapper">
      <img :src="base_url + userStorage.activeUser.avatar" alt="Profilavtar">
    </div>
    <div id="welcome-text">
      <p>Välkommen, {{ userStorage.activeUser.username }}</p>
    </div>
  </div>
</template>

<script>
import users from '../lib/users.json'
import { useUserStorage } from "../stores/storage";

export default {
  data() {
    return {
      base_url: "src/",
      name: '',
      activePlayer: null,
      users: users,
      userStorage: useUserStorage()
    }
  }
}
</script>

<style scoped>
  .user-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 36px;
  }
  #welcome-text {
    width: 270px;
  }
  p {
    color: #FFF;
    text-align: center;
    font-family: Poppins;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  @media (min-width: 890px) {
    img {
      width: 200px;
      height: 200px;
    }
    #welcome-text {
      width: fit-content;
    }
    p {
      font-size: 40px;
    }

  }
</style>
