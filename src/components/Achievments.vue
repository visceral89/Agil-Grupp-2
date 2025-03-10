<template>
   <div id="achievments-wrapper">
      <div v-for="(achievment, index) in userStorage.loggedInUser.achievements" 
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
   }
</script>

<style scoped>
#achievments-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px; 
  max-width: 400px;
  padding: 15px;
}

.achievment {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px; 
  background: rgba(255, 255, 255, 0.15); 
  border-radius: 12px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2); 
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.achievment span {
  font-size: 2rem; 
  transition: transform 0.3s ease, text-shadow 0.3s ease;
}

.achievment:hover span {
  transform: scale(1.05);
  text-shadow: 0px 0px 8px rgba(255, 255, 255, 0.5);
}

.tooltip {
  position: relative;
}

.tooltip .tooltip-text {
  visibility: hidden;
  min-width: 80px;
  background-color: var(--color-card-background);
  color: var(--color-neutral-dark);
  font-size: 0.8rem;
  text-align: center;
  padding: 6px 12px;
  border-radius: 6px;
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
  transition: opacity 0.3s ease, transform 0.3s ease;
  opacity: 0;
  z-index: 10;
}

.tooltip:hover .tooltip-text {
  visibility: visible;
  opacity: 1;
  transform: translateX(-50%) translateY(-5px);
}

@media (min-width: 890px) {
  #achievments-wrapper {
    max-width: 600px;
  }
  .achievment span {
    font-size: 2.5rem; 
  }
}


</style>