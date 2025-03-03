<template>
   <div id="result-container">
      <div id="result-wrapper">
          <!--if 2-players-->
          <div id="2-player-wrapper" v-if="userStorage.player2 !== null">
            <div class="user-img-wrapper">
               <img :src="base_url + userStorage.activeUser.avatar" alt="Profilavtar" />
            </div>
            <div class="result-list-wrapper">
               <h2>Grattis, {{ userStorage.activeUser.username }} vann!</h2>
               <div class="result-list">
                  <p>Resultat</p>
                  <div class="result-card">
                     <p>{{ userStorage.activeUser.username }}</p>
                     <p>{{ userStorage.activeUser.points }}</p>
                  </div>
                  <div class="result-card">
                     <p>{{ userStorage.player2.username }}</p>
                     <p>{{ userStorage.player2.points }}</p>
                  </div>
               </div>
            </div>
         </div>
         <!--if 2-players-->     
         
         <!--if 1-players-->
         <div id="1-player-wrapper" v-else>
            <div class="user-img-wrapper">
               <img :src="base_url + userStorage.activeUser.avatar" alt="Profilavtar" />
            </div>
            <div class="result-list-wrapper">
               <h2>Snyggt spelat! Du har samlat {{ userStorage.activeUser.points }} poäng.</h2>
               <div class="result-list">
                  <p>Highscoreplats/Resultat</p>
                  <div class="result-card">
                     <p>{{ userStorage.activeUser.username }}</p>
                     <p>{{ userStorage.activeUser.points }}</p>
                  </div>
               </div>
            </div>
         </div>
         <!--if 1-players-->
      </div>
   </div>
</template>

<script>
   import { useUserStorage } from "../stores/storage";
   
   export default {
      data() {
         return {
            userStorage: useUserStorage(), //gets userstorage data from storage.js
            base_url: "src/",
         }
      },
      created() {
         this.userStorage.checkWinner()
      }
   }
</script>

<style scoped>
   #result-wrapper {
      width: 100vw;
      display: flex;
      justify-content: center;
   }
   .user-img-wrapper {
      display: flex;
      justify-content: center;
   }
   img {
      width: 140px;
      height: auto;
      border-radius: 50%;
   }
   .result-list-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      width: 75vw;
      height: fit-content;
      border-radius: 6px;
      background-color: var(--color-card-background);
      padding: var(--padding-card);
      margin-top: 20px;
   }
   h2 {
      color: var(--color-neutral-dark);
      text-align: center;
      font-size: 1.7rem;
      font-weight: 500;
   }
   .result-list {
      padding-bottom: 1rem;
      margin: auto;
   }
   .result-list > p {
      color: var(--color-neutral-dark);
      font-size: 1.1rem;
      font-weight: 500;
   }
   .result-card {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 255px;
      height: 45px;
      border-radius: 6px;
      background-color: var(--color-card-secondary);
      box-shadow: var(--box-shadow);
      padding: 0 8px;
      margin-bottom: 15px;
   }
   .result-card > p {
      color: var(--color-neutral-dark);
      font-size: 14px;
      font-weight: 400;
   }

   @media (min-width: 890px) {
      img {
         width: 160px;
      }
      .result-list > p {
         font-size: 1.3rem;
      }
      .result-card {
         width: 300px;
         height: 45px;
         border-radius: 6px;
         background-color: var(--color-card-secondary);
         box-shadow: var(--box-shadow);
         padding: 0 8px;
      }
      .result-card > p {
         font-size: 1rem;
      }
  }
</style>