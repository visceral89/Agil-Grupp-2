<template>
	<div id="game-wrapper">
		<div class="question-wrapper">
			<h2>Välj fråga</h2>
		</div>

		<div id="game-board"></div>
	</div>
</template>

<script>
import questions from "../lib/questions.json";
export default {
	data() {
		return {
			questions: questions,
		};
	},
	methods: {
		createBoard() {
			// Här skapar vi spelbrädet.
		},
	},
	computed() {
    // Här gör vi justeringar på allt som finns.
  },
	created() {
		this.createBoard();
	},
};
</script>

<style scoped>
h2,
.category-card,
.game-card {
	font-family: Poppins;
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
	gap: 10px;
	width: 279px;
	height: 386px;
	border-radius: 6px;
	margin: auto;
	text-align: center;
	background-color: rgba(246, 246, 246, 0.3);
}
.category-card,
.game-card {
	width: 82px;
	height: 44px;
	border-radius: 6px;
	font-size: 14px;
	font-weight: 400;
}
.category-card {
	background-color: #6d4192;
	color: #fff;
	text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
	box-shadow: -2px 4px 0 0 rgba(0, 0, 0, 0.5);
}
.game-card {
	background-color: #e4cff1;
	color: #181818;
	box-shadow: -2px 4px 0 0 rgba(0, 0, 0, 0.2);
}
</style>
