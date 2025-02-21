<template>
  <div id="players-wrapper">
    <div id="active-player">
      <p class="player-header">Spelare att svara:</p>
      <div id="player-1-wrapper">
        <p class="player">{{ users[1].username }}</p>
      </div>
    </div>
    <div v-if="secondPlayer">
      <p class="player-header">På tur:</p>
      <div id="player-2-wrapper">
        <p class="player">Player 2</p>
      </div>
    </div>
  </div>
</template>

<script>
import users from '../lib/users.json'

export default {
  data() {
    return {
      name: '',
      activePlayer: null,
      secondPlayer: null,
      users: users
    }
  }
}
</script>

<style scoped>
  #players-wrapper {
    width: 300px;
    height: 200px;
    margin-left: auto;
    margin-right: auto;
  }
  #player-1-wrapper {
    padding: 9px 22px 9px 23px;
    border-radius: 9px;
    background: #677DD2;
    box-shadow: -2px 4px 0px 0px #5A50B6;
  }
  #player-2-wrapper {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 3px 18px;
    border-radius: 9px;
    background: #9398AA;
    box-shadow: -2px 4px 0px 0px #6D698F;
  }
  .player-header {
    color: #FFF;
    font-family: Poppins;
    font-size: 17px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  .player {
    color: #ECECEC;
    font-family: Poppins;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
</style>