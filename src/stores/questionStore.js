import { defineStore } from "pinia";

/*
Vad ska vi göra här. Vi behöver något sätt att hålla reda på vilka frågor som är aktiva och vilka som är tagna.

På QuestionCard komponenten så har vi ett disabeled state som vi kan toggla för den visuella biten.
Alla questions har unika ID. På så sätt skulle vi kunna låta id disabeled funktionen läsa av ifall question.id finns i en array??

Det är alternativ 1, vet inte hur snyggt det är ännu.

*/

export const useQuestionStore = defineStore("questionStore", {
	state: () => ({
		questions: null,
	}),
});
