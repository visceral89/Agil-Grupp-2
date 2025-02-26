<template>
   <div id="achievments-wrapper">
      <div v-for="(achievment, index) in achievments" 
      :key="index"
      v-if="userStorage.activeUser.points >= 0">
         <span 
         class="material-symbols-outlined md-36" 
         :style="{color: achievment.color}">
            {{ achievment.img }}
         </span>
         <p>
            {{ achievment.title }}
         </p>
      </div>
   </div>
</template>

<script>
   import { useUserStorage } from "../stores/storage";
   import achievments from "../lib/achievments.json"

   export default {
      data() {
         return {
            userStorage: useUserStorage(), //gets userstorage data from storage.js
            achievments: achievments
         }
  },
   }
</script>

<style scoped>
   #achievments-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
   }
</style>