<template>
   <div id="achievments-wrapper">
      <div v-for="achievment in achievments">
         {{ achievment }}
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

         }
  },
   }
</script>

<style scoped>

</style>