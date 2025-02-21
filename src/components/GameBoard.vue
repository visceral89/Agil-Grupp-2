<template>
	<div id="game-wrapper">
		<div class="question-wrapper">
			<h2>Välj fråga</h2>
		</div>

		<div id="game-board">
			<div class="category-column" v-for="(category, index) in categoryList" :key="index">
				<div class="category-card">{{ category }}</div>
				<div
					class="question-card"
					v-for="(question, questionIndex) in questionsList[index]"
					:key="questionIndex">
					{{ question.points }}
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import questions from "../lib/questions.json";
export default {
	data() {
		return {
			questions: questions,
			categoryList: [],
			questionsList: [],
		};
	},
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
#game-wrapper {
	min-height: 100%;
	width: 100%;
}

h2,
.category-card,
.question-card {
	line-height: normal;
}
h2 {
	color: #fff;
	text-align: center;
	font-size: 32px;
	font-style: normal;
	font-weight: 700;
}
#game-board {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: auto;
	align-items: center;
	justify-items: center;
	height: 100%;
	width: 100%;
	border-radius: 6px;
	margin: auto;
	text-align: center;
	background-color: rgba(246, 246, 246, 0.3);
}

.category-column {
	width: 100%;
	display: flex;
	flex-direction: column;
	padding: 0 4rem;

	gap: 1rem;
}

.category-card,
.question-card {
	margin: auto;
	display: flex;
	justify-content: center;
	align-items: center;
	width: fit-content;
	min-height: 44px;
	border-radius: 6px;
	font-size: 14px;
	font-weight: 400;
	width: 100%;
	padding: 1rem 2rem;
}
.category-card {
	background-color: #6d4192;
	color: #fff;
	text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
	box-shadow: -2px 4px 0 0 rgba(0, 0, 0, 0.5);
}
.question-card {
	background-color: #e4cff1;
	color: #181818;
	box-shadow: -2px 4px 0 0 rgba(0, 0, 0, 0.2);
}

@media (min-width: 580px) {
}
</style>
