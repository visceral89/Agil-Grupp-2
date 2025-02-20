<template>
  <div id="game-card-wrapper">
    <div class="question-wrapper">
      <h2>Fråga</h2>
    </div>
    
    <div id="question-card">
      <!-- Vald fråga från game-board -->
      <div class="answer-choice">1</div>
      <div class="answer-choice">2</div>
      <div class="answer-choice">3</div>
      <div class="answer-choice">4</div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      id: this.$route.params.id //gets id from route param sent from gameboard
    }
  },
  created() {
    this.fetchQuestion()
  },
  methods: {
    //fetches the corresponding question based on the id recieved from route-params
    fetchQuestion(id) {
      console.log(this.id, 'question id')
    }
  }
}
</script>

<style scoped>
  .question-wrapper {
    width: 270px;
    height: fit-content;
    margin: auto;
  }
  h2 {
    margin-top: 72px;
    color: #FFF;
    text-align: center;
    font-family: Poppins;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  #question-card {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 30px 53px;
    width: 303px;
    padding: 18px 23px;
    margin: auto;
  }
  .answer-choice {
    display: flex;
    padding: 13px 36px 12px 24px;
    align-items: center;
    border-radius: 9px;
    background-color: var(--color-card-background);
    box-shadow: -2px 4px 0px 0px rgba(0, 0, 0, 0.30);
  }
</style>