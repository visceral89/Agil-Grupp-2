<template>
   <!-- https://css-tricks.com/how-to-create-an-animated-countdown-timer-with-html-css-and-javascript/ -->
   <div id="timer-wrapper">
      <div class="base-timer">
         <svg class="base-timer__svg"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg">
            <g class="base-timer__circle">
               <circle class="base-timer__path-elapsed"
               cx="50" cy="50" r="45" />
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
            minutes: null,
            seconds: null,
            timeLimit: 20,
            timePassed: 0,
            timeLeft: null,
            timerInterval: null
         }
      },
      created() {
         startTimer()
      },
      methods: {
         formatTimeLeft(time) {
            this.minutes = Math.floor(time / 60);
            this.seconds = time % 60

            if (this.seconds < 10) {
               this.seconds = `0${this.seconds}`
            }
            this.timeLeft = this.timeLimit
            return `${this.minutes}:${this.seconds}`
         },
         startTimer() {
            this.timerInterval = setInterval(() => {
               this.timePassed = this.timePassed += 1
               this.timeLeft = this.timeLimit - this.timePassed
            }, 1000)
         }
      }
   }
</script>

<style scoped>
   .base-timer {
      position: relative;
      height: 200px;
      width: 200px;
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
      height: 200px;
      width: 200px;
      top: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 30px;
   }
</style>