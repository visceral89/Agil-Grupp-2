<template>
   <!-- https://css-tricks.com/how-to-create-an-animated-countdown-timer-with-html-css-and-javascript/ -->
   <div id="timer-container">
      <div class="base-timer">
         <svg
            class="base-timer-svg"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg">
            <g class="base-timer-circle">
               <circle class="base-timer-path-elapsed" cx="50" cy="50" r="45" />
               <path
                  id="base-timer-path-remaining" 
                  :stroke-dasharray="circleDasharray"
                  :class="['base-timer-path-remaining', remainingPathColor]"
                  d="
                  M 50, 50 
                  m -45, 0 
                  a 45,45 0 1,0 90,0 
                  a 45,45 0 1,0 -90,0"
               />
            </g>
         </svg>
         <span id="base-timer-label" class="base-timer-label">
            {{ formatTimeLeft(timeLeft) }}
         </span>
      </div>
   </div>
</template>

<script>
   import { useUserStorage } from "../stores/storage";
   
   export default {
      data() {
         return {
            userStorage: useUserStorage(), //gets userstorage data from storage.js
            timeLimit: 20,
            timePassed: 0,
            timeLeft: 20,
            timerInterval: null,
            remainingPathColor: "green",
            fullDashArray: 283,
            circleDasharray: null,
         }
      },
      created() {
         this.userStorage.isTimeOut = false
         this.userStorage.stopTimer = false
         this.startTimer()
      },
      methods: {
         formatTimeLeft(time) {
            const minutes = Math.floor(time / 60); //gets minutes and seconds for timer
            let seconds = time % 60

            if (seconds < 10) { //if seconds is less than 10, it displays a 0 before the number
               seconds = `0${seconds}`
            }
    
            return `${minutes}:${seconds}`
         },
         startTimer() {
            this.timerInterval = setInterval(() => {
              if (this.userStorage.stopTimer) {
                  clearInterval(this.timerInterval)
                  return
               }
               
               if (this.timeLeft > 0) {
                  this.timePassed++
                  this.timeLeft = this.timeLimit - this.timePassed
               
                  this.setColor() //update color based on time left
                  this.setCircleDasharray();

                  if (this.timeLeft === 0) {
                     this.userStorage.checkTimeLeft()
                  }
               }
               else {
                  clearInterval(this.timerInterval) //stops timer at 0 
               }
            }, 1000)
         },
         setColor() {
            if (this.timeLeft > 10) {
               this.remainingPathColor = "green"
            }
            else if (this.timeLeft > 5) {
               this.remainingPathColor = "orange"
            }
            else {
               this.remainingPathColor = "red"
            }
         },
         calculateTimeFraction() {
            const rawTimeFraction = this.timeLeft / this.timeLimit
            return rawTimeFraction - (1 / this.timeLimit) * (1 - rawTimeFraction)
         },
         setCircleDasharray() {
           this.circleDasharray = 
            `${(this.calculateTimeFraction() * this.fullDashArray)
            .toFixed(0)} 283`
         }
      }
   }
</script>

<style scoped>
   #timer-container {
      max-width: fit-content;
   }
   .base-timer {
      position: absolute;
      left: 1rem;
      height: 70px;
      width: 70px;
   }
   .base-timer-circle {
      fill: none;
      stroke: none;
   }
   .base-timer-path-elapsed {
      stroke-width: 7px;
      stroke: grey;
   }
   .base-timer-label {
      position: absolute;
      height: 70px;
      width: 70px;
      top: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
   }
   .base-timer-path-remaining {
      stroke-width: 7px;
      stroke-linecap: round;
      transform: rotate(90deg);
      transform-origin: center;
      transition: 1s linear all;
      stroke: currentColor;
   }
   .green {
      stroke: var(--color-right-answer);
   }
   .orange {
      stroke: orange;
   }
   .red {
      stroke: var(--color-wrong-answer);
   }
   .base-timer-svg {
      transform: scaleX(-1);
   }

   @media (min-width: 890px) {
      .base-timer {
         height: 150px;
         width: 150px;
      }
      .base-timer-label {
         height: 150px;
         width: 150px;
         font-size: 22px;
      }
  }
</style>