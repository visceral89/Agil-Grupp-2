<template>
  <div id="game-card-wrapper">
    <div class="question-wrapper">
      <h2>{{ selectedQuestion.question }}</h2>
    </div>

    <div id="question-card">
      <!-- chosen question from game board -->
      <button v-for="(answer, index) in selectedQuestion.answers"
      :key="index" @click="onSelectAnswer(answer, index)"
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
    <TimerCountdown />
    <ActivePlayers v-if="selectedAnswer === null" />

		<div id="next-btn-wrapper" v-show="selectedAnswer !== null">
			<div id="result-msg">
        <p v-if="isCorrect">Grattis, du valde rätt!</p>
        <p v-else>Tyvärr, du valde fel</p>
      </div>
      <div id="next-btn" v-show="!isGameEnded">
        <RouterLink to="/game"> <Button>Nästa fråga</Button> </RouterLink>
      </div>
		</div>
    <div id="result-wrapper" v-show="isGameEnded">
      <RouterLink to="/game/result"> <Button>Resultat</Button> </RouterLink>
      <div class="firework"></div>
    </div>
  </div>
</template>

<script>
//import the whole json-file
import { useUserStorage } from "../stores/storage";
import { useQuestionStore } from "../stores/questionStore"
import questions from '../lib/questions.json'
import ActivePlayers from '../components/ActivePlayers.vue';
import Button from '../components/Button.vue'
import TimerCountdown from "../components/TimerCountdown.vue";

export default {
  data() {
    return {
      userStorage: useUserStorage(), //gets userstorage data from storage.js
      questionStore: useQuestionStore(),
      id: this.$route.params.id, //gets id from route param sent from gameboard
      questions: questions, //gets questions array from imported questions.json
      selectedQuestion: null,
      selectedAnswer: null,
      isCorrect: false,
      isDisabled: false,
      isGameEnded: false
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
    },
    onSelectAnswer(answer, index) {
      this.isDisabled = true

      //gets index from clicked answer
      if (answer === this.selectedQuestion.answer) {
        this.selectedAnswer = index //sets the index to the chosenAnswer
        this.isCorrect = true

        this.userStorage.addPoints(this.selectedQuestion.points)
        this.questionStore.checkGameOver()
      }
      else {
        this.selectedAnswer = index
        this.isCorrect = false

        this.userStorage.flipActiveUser()
      }

      if (this.questionStore.checkGameOver()) {
        this.isGameEnded = true
      }
    },
  },
  components: {
    ActivePlayers,
    Button,
    TimerCountdown
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
    font-size: .9rem;
    font-weight: 500;
    margin: 0;
  }
	Button {
    background: var(--color-secondary);
		color: #ECECEC;
		font-family: Poppins;
		font-size: 1.2rem;
		font-style: normal;
		font-weight: 500;
		line-height: normal;
    margin: 0;
    &:hover {
			background-color: var(--color-card-hover);
		}
	}
  #next-btn {
    margin-bottom: 30px;
  }
  #result-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .firework, .firework::before, .firework::after {
    --top: 60vh;
    content: "";
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 0.5vmin;
    aspect-ratio: 1;
    background:
      radial-gradient(var(--color-accent) 0.2vmin, #0000 0) 50% 0%,
      radial-gradient(var(--color-secondary) 0.3vmin, #0000 0) 0% 50%,
      radial-gradient(var(--color-category-background), 0.5vmin, #0000 0) 50% 99%,
      radial-gradient(var(--color-card-secondary), 0.2vmin, #0000 0) 99% 50%,
      radial-gradient(var(--color-accent), 0.3vmin, #0000 0) 80% 90%,
      radial-gradient(var(--color-secondary), 0.5vmin, #0000 0) 95% 90%,
      radial-gradient(var(--color-category-background), 0.5vmin, #0000 0) 10% 60%,
      radial-gradient(var(--color-card-secondary), 0.2vmin, #0000 0) 31% 80%,
      radial-gradient(var(--color-accent), 0.3vmin, #0000 0) 80% 10%,
      radial-gradient(var(--color-secondary), 0.2vmin, #0000 0) 90% 23%,
      radial-gradient(var(--color-category-background), 0.3vmin, #0000 0) 45% 20%,
      radial-gradient(var(--color-card-secondary), 0.5vmin, #0000 0) 13% 24%;
    background-size: 0.5vmin 0.5vmin;
    background-repeat: no-repeat;
    animation: firework 2s infinite;
  }
  .firework::before {
    transform: translate(-50%, -50%) rotate(25deg) !important;
  }
  .firework::after {
    transform: translate(-50%, -50%) rotate(-37deg) !important;
  }
  @keyframes firework {
    0% {
      transform: translate(-50%, 60vh);
      width: 0.5vmin;
      opacity: 1;
    }
    50% {
      width: 0.5vmin;
      opacity: 1;
    }
    100% {
      width: 45vmin;
      opacity: 0;
    }
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
