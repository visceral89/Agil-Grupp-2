import { defineStore } from "pinia"
import questions from "../lib/questions.json"

/*
Vad ska vi göra här. Vi behöver något sätt att hålla reda på vilka frågor som är aktiva och vilka som är tagna.

På QuestionCard komponenten så har vi ett disabeled state som vi kan toggla för den visuella biten.
Alla questions har unika ID. På så sätt skulle vi kunna låta id disabeled funktionen läsa av ifall question.id finns i en array??

Det är alternativ 1, vet inte hur snyggt det är ännu.

*/

export const useQuestionStore = defineStore("questionStore", {
    state: () => ({
        answeredQuestions: [],
        questionsList: questions,
        questions: null
    }),
    actions: {
        checkDisabeled(id) {
            /*
         Finns id's i answeredQuestions[] ?
         returnera true eller false.
          */
            return this.answeredQuestions.includes(id)
        },
        disableQuestion(id) {
            /*
         Pusha ett id till answeredQuestions arrayen, detta bör ske on click när man öppnar en fråga. Alternativt
         ifall den körs när man besvarat en fråga.

         this.answeredquestions.push(id)
          */
            this.answeredQuestions.push(id)
            console.log(this.answeredQuestions)
        },
        checkGameOver() {
            /*
         Denna funktion bör köras varje gång en fråga blir besvarad.
         Ifall answeredQuestions.length >= questions.json.length så ska man omdirigeras till Resultat skärmen.
         Kanske med en $router.push eller liknande.
          */
            if (this.answeredQuestions.length >= this.questionsList.length) {
                console.log("Game Finished!")
                return true
            } else {
                return false
            }
        },
        resetQuestions() {
            // Simple function that clears the array. Can be triggered when we want to reset the game?
            this.answeredQuestions = []
            console.log("resetQuestions körs")
        }
    },
    
})
