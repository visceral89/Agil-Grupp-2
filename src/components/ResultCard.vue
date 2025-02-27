<template>
   <div id="result-container">
      <div id="result-wrapper">
         <div class="player-wrapper">{{ userStorage.activeUser.username }}</div>
         <div class="player-wrapper">Player 2</div>
      </div>
   </div>
</template>

<script>
   import { useUserStorage } from "../stores/storage";
   
   export default {
      data() {
         return {
            userStorage: useUserStorage(), //gets userstorage data from storage.js
         }
      }
   }
</script>

<style scoped>

</style>