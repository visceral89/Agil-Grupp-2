<template>
  <div id="game-card-wrapper">
    <div class="question-wrapper">
      <h2>Fråga</h2>
    </div>
    
    <div id="game-card">
      <!-- Vald fråga från game-board -->
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      
    }
  }
}
</script>

<style scoped>
  #game-card-wrapper {
    position: absolute;
    top: 10%;
    left: 5%;
    right: 5%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90vw;
    height: 400px;
    background-color: blueviolet;
  }
  h2 {
    color: #FFF;
    text-align: center;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    font-family: Poppins;
    line-height: normal;
  }
  #game-card {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
</style>