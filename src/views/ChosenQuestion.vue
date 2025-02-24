<template>
  <div id="game-card-wrapper">
    <div class="question-wrapper">
      <h2>{{ selectedQuestion.question }}</h2>
    </div>
    
    <div id="question-card">
      <!-- chosen question from game board -->
      <div v-for="(answer, index) in selectedQuestion.answers" :key="index" @click="onSelectAnswer(answer)" :style="{backgroundColor: selectedAnswer === answer ? 'green' : ''}" class="answer-choice">
        <span id="selected-answer">{{ answer }}</span>
      </div>
    </div>
    <ActivePlayers />

		<div id="next-btn-wrapper">
			<RouterLink to="/game"> <Button>Nästa spelare</Button> </RouterLink>
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
import ActivePlayers from '../components/ActivePlayers.vue';
import Button from '../components/Button.vue'

export default {
  data() {
    return {
      id: this.$route.params.id, //gets id from route param sent from gameboard
      questions: questions, //gets questions array from imported questions.json
      selectedQuestion: null,
      selectedAnswer: null
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
      //convert id to number
      const questionId = parseInt(this.id)

      //find the first correct element of the array questions
      this.selectedQuestion = this.questions.find(question => question.id === questionId)
      console.log(this.selectedQuestion, 'selectedQuestion')
    },
    onSelectAnswer(answer) {
      //gets index from clicked answer
      if (answer === this.selectedQuestion.answer) {
        this.selectedAnswer = answer
        console.log(answer, 'rätt svar')
      }
      else {
        console.log(answer, 'fel svar')
      }
    }
  },
  components: {
    ActivePlayers,
    Button
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
    margin-top: 65px;
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
  #next-btn-wrapper {
		display: flex;
    justify-content: center;
    margin-top: -50px;
	}
	Button {
		background: var(--color-secondary);
		padding: 9px 26px 9px 25px;
		color: #ECECEC;
		font-family: Poppins;
		font-size: 20px;
		font-style: normal;
		font-weight: 500;
		line-height: normal;
	}

  @media (min-width: 890px) {
    #question-card {
    grid-template-columns: 1fr 1fr;
    gap: 30px 53px;
  }
  }
</style>