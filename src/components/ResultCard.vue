<template>
   <div id="result-container">
      <!--Show this modal if there are no more questions and the game is finished-->
      <div id="result-wrapper" v-if="result">
         <div class="player-wrapper">
            <p>{{ userStorage.activeUser.username }}</p>
            <p>{{ userStorage.activeUser.points }}</p>
         </div>
         <div class="player-wrapper">
            <p>Player 2</p>
            <p>0p</p>
         </div>
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