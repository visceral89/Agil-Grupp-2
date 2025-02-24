<template>
  <div class="user-wrapper">
    <div class="user-img-wrapper">
      <img src="../assets/images/avtar-image.jpg" alt="Profilavtar">
    </div>
    <div id="welcome-text">
      <p>Välkommen, {{ users[1].username }}</p>
    </div>
  </div>
</template>

<script>
import users from '../lib/users.json'

export default {
  data() {
    return {
      name: '',
      activePlayer: null,
      users: users
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
  img {
    width: 150px;
    height: 150px;
    border-radius: 150px;
    box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.25);
    margin-top: 19px;
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
