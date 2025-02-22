<template>
  <div id="game-card-wrapper">
    <div class="question-wrapper">
      <h2>{{ selectedQuestion.question }}</h2>
    </div>
    
    <div id="question-card">
      <!-- chosen question from game board -->
      <div v-for="(answer, index) in selectedQuestion.answers" :key="index" @click="onSelectAnswer" class="answer-choice">
        <span id="selected-answer">{{ answer }}</span>
      </div>
    </div>
    <ActivePlayers />


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
import ActivePlayers from '../components/ActivePlayers.vue';

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
    },
    onSelectAnswer(event) {
      if (event.target.value === this.questions.answer) {
        console.log(this.questions.answer, 'answer picked')
      }
    }
  },
  components: {
    ActivePlayers
  }
}
</script>

<style scoped>
  .question-wrapper {
    width: fit-content;
    max-width: 80vw;
    margin: auto;
  }
  h2 {
    margin-top: 72px;
    margin-bottom: 20px;
    color: #FFF;
    text-align: center;
    font-family: Poppins;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  #question-card {
    display: grid;
    grid-template-columns: 1fr;
    gap: 30px;
    width: fit-content;
    padding: 18px 0;
    margin-top: 28px;
    margin-left: auto;
    margin-right: auto;
  }
  .answer-choice {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 100px;
    min-height: 50px;
    text-align: center;
    white-space: normal;
    border-radius: 9px;
    background-color: var(--color-card-background);
    box-shadow: -2px 4px 0px 0px rgba(0, 0, 0, 0.30);
    &:hover {
      cursor: pointer;
      background-color: var(--color-card-hover);
    }
  }
  span {
    padding: 10px;
    color: #484848;
    font-family: Poppins;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    &:hover {
      color: var(--color-neutral-light);
    }
  }

  @media (min-width: 890px) {
    #question-card {
    grid-template-columns: 1fr 1fr;
    gap: 30px 53px;
  }
  }
</style>