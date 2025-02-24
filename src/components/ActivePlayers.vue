<template>
  <div id="players-wrapper">
    <div id="active-player">
      <p class="player-header">Spelare att svara:</p>
      <div id="player-1-wrapper">
        <p class="player">{{ users[1].username }}</p>
      </div>
    </div>
    <div v-if="secondPlayer" id="next-player">
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
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  #active-player, #next-player {
    align-items: center;
    display: flex;
    flex-direction: column;
  }
  #active-player {
    margin-bottom: 2em;
  }
  #player-1-wrapper {
    background: var(--color-secondary);
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
    padding: 1em 2em;
    width: fit-content;
  }
  #player-2-wrapper {
    padding: 3px 18px;
    background: var(--color-disabled);
    border-radius: var(--border-radius);
    box-shadow: -2px 4px 0px 0px #6D698F;
    padding: .5em 1em;
  }
  .player-header {
    color: #FFF;
    font-family: Poppins;
    font-size: 17px;
    font-weight: 500;
  }
  .player {
    color: #ECECEC;
    font-family: Poppins;
    font-size: 20px;
    font-weight: 500;
    margin: 0;
  }
</style>