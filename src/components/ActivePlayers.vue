<template>
  <div class="players-wrapper">
    <div id="active-player">
      <p>{{ users[1].username }}</p>
    </div>
    <div v-if="secondPlayer">
      <p>Player 2</p>
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

</style>