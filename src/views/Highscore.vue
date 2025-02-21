<template>
  <div class="highscore-wrapper">
    <section class="highscore-top-section">
      <img class="highscore-top-trophy" src="../assets/images/highscore-trophy.png" alt="Highscore trophy">
      <h1 class="highscore-top-title">Highscore</h1>
    </section>
    <section class="highscore-table">
      <div v-for="(player, index) in highscoreList" class="highscore-cell">
        <div class="highscore-avatar-container">
          <img :src="base_url + player.avatar" class="highscore-avatar" alt="avatar">
        </div>
        <span>{{ index + 1 }}. {{ player.username }}</span>
        <span class="highscore-cell-points">{{ player.points }} p</span>
      </div>
    </section>
  </div>
</template>

<script>
import users from "../lib/users.json"

export default {
  data() {
    return {
      base_url: "src/",
      highscoreList: users.sort((a, b) => {
        return b.points - a.points
      })
    }
  }
}
</script>

<style>
.highscore-wrapper {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 4em;
  padding-top: 2em;
}
.highscore-top-section {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .highscore-top-trophy {
    width: 50%;
  }
}
.highscore-table {
  display: flex;
  flex-direction: column;
  gap: .8em;
}
.highscore-cell {
  align-items: center;
  background: var(--color-card-background);
  border-radius: 1.25em;
  color: var(--color-neutral-dark);
  display: flex;
  gap: 3em;
  padding: .2em 1.5em;
  .highscore-cell-points {
    font-weight: bold;
    margin-left: auto;
  }
  .highscore-avatar {
    display: block;
  }
  &:first-of-type div::after {
    background: url("../../public/crown-logo.webp") no-repeat;
    content: "";
    display: inline-block;
    height: 64px;
    position: absolute;
    translate: 9px -128px;
    width: 64px;
  }
}
@media (min-width: 890px) {
  .highscore-top-section {
    flex-direction: row;
    gap: 2em;
    margin-bottom: 2em;
    .highscore-top-title {
      font-size: 3em;
    }
  }
  .highscore-cell {
    gap: 6em;
  }
}
</style>