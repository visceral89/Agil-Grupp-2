<template>
   <div id="achievments-wrapper">
      <div v-for="(achievment, index) in userStorage.activeUser.achievements" 
      :key="index"
      class="achievment tooltip">
         <span 
         class="material-symbols-outlined md-36" 
         :style="{color: achievment.color}">
            {{ achievment.img }}
         </span>
         <p class="tooltip-text">
            {{ achievment.title }}
         </p>
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
      },
      created() {
         this.userStorage.unlockAchievments()
      }
   }
</script>

<style scoped>
   #achievments-wrapper {
      display: flex;
      flex-direction: row-reverse;
      justify-content: center;
      max-width: 300px;
   }
   .achievment {
      margin: 10px;
   }
   span {
      font-size: 2rem;
   }
   
   /*style for tooltip*/
   .tooltip {
      position: relative;
      display: inline-block;
   }
   .tooltip .tooltip-text {
      visibility: hidden;
      width: 65px;
      background-color: var(--color-card-background);
      color: var(--color-neutral-dark);
      font-size: .8rem;
      text-align: center;
      padding: 5px 10px;
      border-radius: 2px 20px 20px 20px;
      position: absolute;
      z-index: 1;
   }
   .tooltip:hover .tooltip-text {
      visibility: visible;
   }

   @media (min-width: 890px) {
      #achievments-wrapper {
         max-width: 600px;
      }
      span {
         font-size: 2.5rem;
      }
      .tooltip .tooltip-text {
         width: 120px;
         font-size: 1rem;
      }
  }

</style>