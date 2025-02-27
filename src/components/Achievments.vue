<template>
   <div id="achievments-wrapper">
      <div v-for="(achievment, index) in userStorage.activeUser.achievements" 
      :key="index"
      class="achievment">
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

   export default {
      data() {
         return {
            userStorage: useUserStorage(), //gets userstorage data from storage.js
         }
  },
   }
</script>

<style scoped>
   #achievments-wrapper {
      display: flex;
      flex-direction: row-reverse;
      justify-content: center;
   }
   .achievment {
      margin: 10px;
   }
   span {
      font-size: 38px;
   }
</style>