<template>
  <div id="game-card-wrapper">
    <div class="question-wrapper">
      <h2>Fråga</h2>
    </div>
    
    <div id="question-card">
      <!-- Vald fråga från game-board -->
      <div class="answer-choice">
        <span>1</span>
      </div>
      <div class="answer-choice">
        <span>2</span>
      </div>
      <div class="answer-choice">
        <span>3</span>
      </div>
      <div class="answer-choice">
        <span>4</span>
      </div>
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
    justify-content: center;
    gap: 30px 53px;
    width: 303px;
    padding: 18px 23px;
    margin: auto;
  }
  .answer-choice {
    padding: 13px 36px;
    border-radius: 9px;
    background-color: var(--color-card-background);
    box-shadow: -2px 4px 0px 0px rgba(0, 0, 0, 0.30);
    &:hover {
      cursor: pointer;
      background-color: var(--color-category-background);
      color: var(--color-primary-light);
    }
  }
  span {
    color: #484848;
    font-family: Poppins;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
</style>