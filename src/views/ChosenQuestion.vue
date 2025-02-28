<template>
  <div id="game-card-wrapper">
    <div class="question-wrapper">
      <h2>{{ selectedQuestion.question }}</h2>
    </div>
    
    <div id="question-card">
      <!-- chosen question from game board -->
      <button v-for="(answer, index) in selectedQuestion.answers" 
      :key="index" @click="onSelectAnswer(answer, index); /* onSetDisabled() */" 
      :class="{
        correct: selectedAnswer === index && isCorrect,
        wrong: selectedAnswer === index && !isCorrect,
        disabled: selectedAnswer !== index && isDisabled
      }"
      class="answer-choice"
      :disabled="isDisabled">
        <span id="selected-answer">{{ answer }}</span>
      </button>
    </div>
    <ActivePlayers v-if="selectedAnswer === null"/>

		<div id="next-btn-wrapper" v-show="selectedAnswer !== null">
			<div id="result-msg">
        <p v-if="isCorrect">Grattis, du valde rätt!</p>
        <p v-else>Tyvärr, du valde fel</p>
      </div>
      <RouterLink to="/game"> <Button>Nästa fråga</Button> </RouterLink>
		</div>
  </div>
  <div id="result-wrapper">
		<RouterLink to="/game/result"> <Button>Resultat</Button> </RouterLink>
	</div>
</template>

<script>
//import the whole json-file
import { useUserStorage } from "../stores/storage";
import questions from '../lib/questions.json'
import ActivePlayers from '../components/ActivePlayers.vue';
import Button from '../components/Button.vue'

export default {
  data() {
    return {
      userStorage: useUserStorage(), //gets userstorage data from storage.js
      id: this.$route.params.id, //gets id from route param sent from gameboard
      questions: questions, //gets questions array from imported questions.json
      selectedQuestion: null,
      selectedAnswer: null,
      isCorrect: false,
      isDisabled: false
    }
  },
  created() {
    this.getQuestion()
  },
  methods: {
    //fetches the corresponding question based on the id recieved from route-params
    getQuestion() {
      //convert id to number
      const questionId = parseInt(this.id)

      //find the first correct element of the array questions
      this.selectedQuestion = this.questions.find(question => question.id === questionId)
      console.log(this.selectedQuestion, 'selectedQuestion')
    },
    onSelectAnswer(answer, index) {
      this.isDisabled = true
      console.log(this.isDisabled, 'disabled')
      //gets index from clicked answer
      if (answer === this.selectedQuestion.answer) {
        this.selectedAnswer = index //sets the index to the chosenAnswer
        this.isCorrect = true

        this.userStorage.addPoints(this.selectedQuestion.points)
      }
      else {
        this.selectedAnswer = index
        this.isCorrect = false
        console.log(answer, 'fel svar')
      }
    },
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
    max-width: 90vw;
    margin: auto;
  }
  h2 {
    margin-top: 65px;
    margin-bottom: 20px;
    color: #FFF;
    text-align: center;
    font-family: Poppins;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  #question-card {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    width: fit-content;
    padding: 12px 0;
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
    font-size: 1.1rem;
    text-align: center;
    white-space: normal;
    border-radius: 9px;
    background-color: var(--color-card-background);
    color: var(--color-neutral-grey);
    box-shadow: -2px 4px 0px 0px rgba(0, 0, 0, 0.30);
    transition: var(--transition);
    &:hover {
      color: var(--color-neutral-light);
      cursor: pointer;
      background-color: var(--color-card-hover);
    }
  }
  .correct, .correct:hover {
    background-color: var(--color-right-answer);
    color: var(--color-neutral-light);
    box-shadow: none;
  }
  .wrong, .wrong:hover {
    background-color: var(--color-wrong-answer);
    color: var(--color-neutral-light);
    box-shadow: none;
  }
  .disabled, .disabled:hover {
    background-color: var(--color-disabled);
    color: var(--color-neutral-grey);
    cursor: default;
  }
  #next-btn-wrapper {
		display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
	}
  #result-msg {
    color: #FFF;
    font-family: Poppins;
    font-size: 1.1rem;
    font-weight: 500;
  }
	Button {
    background: var(--color-secondary);
		color: #ECECEC;
		font-family: Poppins;
		font-size: 1.3rem;
		font-style: normal;
		font-weight: 500;
		line-height: normal;
    &:hover {
			background-color: var(--color-card-hover);
		}
	}
  #result-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (min-width: 890px) {
    h2 {
      font-size: 1.7rem;
    }
    #question-card {
      grid-template-columns: 1fr 1fr;
      gap: 30px 53px;
    }
    .answer-choice {
      font-size: 1.3rem;
    }
    #result-msg {
      font-size: 1.2rem;
    }
  }
</style>