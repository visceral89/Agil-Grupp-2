<template>
  <div id="game-card-wrapper">
    <div class="question-wrapper">
      <h2>{{ selectedQuestion.question }}</h2>
    </div>
    
    <div id="question-card">
      <!-- chosen question from game board -->
      <div v-for="(answer, index) in selectedQuestion.answers" :key="index" class="answer-choice">
        <span>{{ answer }}</span>
      </div>
    </div>

    <!-- prepare for when props/import is done -->
<!--     <div v-if="selectedQuestion" id="question-card">
      <div class="question-wrapper">
        <h2>{{ selectedQuestion.question }}</h2>
      </div>
      <div  v-for="answer in selectedQuestion.answers" :key="selectedQuestion.id" class="answer-choice">
        <span>{{ answer }}</span>
      </div>
    </div> -->
  </div>
</template>

<script>
//import the whole json-file
import questions from '../lib/questions.json'

export default {
  data() {
    return {
      id: this.$route.params.id, //gets id from route param sent from gameboard
      questions: questions, //gets questions array from imported questions.json
      selectedQuestion: null
      //if use of props
/*       selectedQuestion: this.question */
    }
  },
/*   props: {
    question: {
      type: Object,
      required: true
    }
  }, */
  created() {
    this.getQuestion()
  },
  methods: {
    //fetches the corresponding question based on the id recieved from route-params
    getQuestion(id) {
      console.log(this.id, 'question id')
      
      //convert id to number
      const questionId = parseInt(this.id)

      //find the first correct element of the array questions
      this.selectedQuestion = this.questions.find(question => question.id === questionId)
      console.log(this.selectedQuestion, 'selectedQuestion')
    }
  }
}
</script>

<style scoped>
  .question-wrapper {
    width: 270px;
    /* height: fit-content; */
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