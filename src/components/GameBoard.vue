<template>
	<div id="game-wrapper">
		<div class="question-wrapper">
			<h2>Välj fråga</h2>
		</div>

		<div id="game-board">
			<div class="category-column" v-for="(category, index) in categoryList" :key="index">
				<div class="category-card">{{ category }}</div>
				<router-link
					v-for="(question, questionIndex) in questionsList[index]"
					:key="questionIndex"
					:to="`/game/${question.id}`"
					style="display: contents">
					<QuestionCard :question="question" />
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
import questions from "../lib/questions.json";
import QuestionCard from "./QuestionCard.vue";
export default {
	data() {
		return {
			questions: questions,
			categoryList: [],
			questionsList: [],
		};
	},
	components: { QuestionCard },
	methods: {
		createBoard() {
			//Hantera Kategorier
			// Skapa ett set av en array, alla unika.
			// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set

			this.categoryList = [...new Set(this.questions.map((question) => question.category))];

			for (let i = 0; i < this.categoryList.length; i++) {
				this.questionsList.push(
					this.questions.filter((question) => question.category === this.categoryList[i])
				);
			}
			console.log(this.questionsList);
		},
	},

	created() {
		this.createBoard();
	},
};
</script>

<style scoped>
h2 {
	color: #fff;
	text-align: center;
	font-size: 32px;
	font-style: normal;
	font-weight: 700;
}
#game-board {
	display: grid;
	grid-template-columns: repeat(3, auto);
	grid-template-rows: auto;
	align-items: center;
	justify-items: center;
	border-radius: 6px;
	margin: auto;
	text-align: center;
	background-color: rgba(246, 246, 246, 0.3);
	margin: 0.5rem;
	padding: 0.6rem 0.2rem;
}

.category-column {
	display: flex;
	flex-direction: column;
	gap: 10px;
}

.category-card {
	background-color: var(--color-category-background);
	text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
	box-shadow: var(--box-shadow);
	border-radius: var(--border-radius);
	min-width: 82px;
	min-height: 44px;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0.2rem 0.6rem;
}

@media (min-width: 500px) {
	#game-board {
		grid-column-gap: 10px;
	}
	.category-card {
		min-width: 100px;
	}
	.category-column {
		width: 100%;
	}
}
</style>
