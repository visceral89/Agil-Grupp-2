<template>
  <div id="game-board">
    <!-- Categories -->
    <div v-for="(category, index) in categories" :key="index" class="category-card"> 
      <p>{{ category }}</p>
    </div>

    <!-- Game-cards -->
    <div v-for="(questionCard, index) in questionCards" :key="index" class="game-card">
      <p>{{ questionCard.points }}</p>
    </div>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        categories: ['Historia', 'Geografi', 'Musik'],
        questionCards: []
      }
    },
    methods: {
      generateGameCards() {
        let points = [100, 200, 300, 400, 500, 600] //points for every row of each category

        for (let i = 0; i < points.length; i++) { //loop to iterate through the point-rows
          for (let j = 0; j < this.categories.length; j++) { //loop to iterate through the column categories
            this.questionCards.push({ points: points[i] })
          }
        }
      }
    },
    created() {
      this.generateGameCards();
    }
  }
</script>

<style scoped>
  #game-board {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    gap: 10px;
    width: 279px;
    height: 386px;
    border-radius: 6px;
    margin: auto;
    text-align: center;
    background-color: rgba(246, 246, 246, 0.3);
  }
  .category-card, .game-card {
    width: 82px;
    height: 44px;
    border-radius: 6px;
    font-family: Poppins;
    font-size: 14px;
    font-weight: 400;
    line-height: normal;
  }
  .category-card {
    background-color: #6D4192;
    color: #FFF;
    text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    box-shadow: -2px 4px 0 0 rgba(0, 0, 0, 0.5) ;
  }
  .game-card {
    background-color: #E4CFF1;
    color: #181818;
    box-shadow: -2px 4px 0 0 rgba(0, 0, 0, 0.2) ;
  }
</style>
