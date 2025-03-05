<template>
   <!-- https://css-tricks.com/how-to-create-an-animated-countdown-timer-with-html-css-and-javascript/ -->
   <div id="timer-wrapper">
      <div class="base-timer">
         <svg class="base-timer__svg"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg">
            <g class="base-timer__circle">
               <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
               <path id="base-timer-path-remaining" stroke-dasharray="283"
               class=`base-timer__path-remaining ${remainingPathColor}`
               d="M 50, 50 m -45, 0 a 45,45 0 1,0 90,0 a 45,45 0 1,0 -90,0"
               ></path>
            </g>
         </svg>
         <span id="base-timer-label" class="base-timer__label">
            {{ formatTimeLeft(timeLeft) }}
         </span>
      </div>
   </div>
</template>

<script>
   export default {
      data() {
         return {
            timeLimit: 20,
            timePassed: 0,
            timeLeft: 20,
            timerInterval: null,
            remainingPathColor: null,
            colorCodes: {
               info: {
                  color: "green"
               }
            }
         }
      },
      created() {
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
               if (this.timeLeft > 0) {
                  this.timePassed++
                  this.timeLeft = this.timeLimit - this.timePassed
               }
               else {
                  clearInterval(this.timerInterval) //stops timer at 0 
               }

            }, 1000)
         }
      }
   }
</script>

<style scoped>
   .base-timer {
      position: relative;
      height: 150px;
      width: 150px;
   }
   .base-timer__circle {
      fill: none;
      stroke: none;
   }
   .base-timer__path-elapsed {
      stroke-width: 7px;
      stroke: grey;
   }
   .base-timer__label {
      position: absolute;
      height: 150px;
      width: 150px;
      top: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 22px;
   }
</style>