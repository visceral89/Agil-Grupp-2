<template>
   <div id="result-container">
      <div id="result-wrapper">
         <!--if 1-players-->
         <div id="1-player-wrapper">
            <div class="user-img-wrapper">
               <img :src="'src/' + userStorage.activeUser.avatar" alt="Profilavtar">
            </div>
            <div class="result-list-wrapper">
               <h2>Snyggt spelat! Du samlade xxx poäng.</h2>
               <p>Highscoreplats</p>
               <div id="result-card">
                  <p>Spelare 1</p>
                  <p>100p</p>
               </div>
            </div>
         </div>
         <!--if 1-players-->

         <!--if 2-players-->
         <div id="2-player-wrapper">
            <div class="user-img-wrapper">
               <img :src="'src/' + userStorage.activeUser.avatar" alt="Profilavtar">
            </div>
            <div class="result-list-wrapper">
               <h2>Grattis, spelare vann!</h2>
               <p>Resultat</p>
               <div id="result-card">
                  <p>{{ userStorage.activeUser.username }}</p>
                  <p>{{ userStorage.activeUser.points }}</p>
                  <p>Spelare 2</p>
                  <p>100p</p>
               </div>
            </div>
         </div>
         <!--if 2-players-->

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