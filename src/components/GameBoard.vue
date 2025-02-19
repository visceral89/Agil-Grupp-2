<template>
  <div id="game-board">
    <div class="game-card">
      <p>100p</p>
    </div>
  </div>
</template>

<script>

  export default {
    data() {

    }
  }
</script>

<style scoped>
  #game-board {
    width: 279px;
    height: 386px;
    border-radius: 6px;
    background-color: rgba(246, 246, 246, 0.3);
  }
  .game-card {
    width: 82px;
    height: 44px;
    border-radius: 6px;
    background-color: #E4CFF1;
    box-shadow: -2px 4px 0 0 rgba(0, 0, 0, 0.2) ;
  }
</style>
