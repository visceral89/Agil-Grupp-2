<template>
  <div class="highscore-wrapper">
    <section class="highscore-top-section">
      <img class="highscore-top-trophy" src="../assets/images/highscore-trophy.png" alt="Highscore trophy">
      <h1 class="highscore-top-title">Highscore</h1>
    </section>
    <section class="highscore-table">
      <div class="highscore-cell">
        <img src="../assets/images/user-avatars/image 19.png" alt="">
        <span>1. Anna</span>
        <span class="highscore-cell-points">102 p</span>
      </div>
      <div class="highscore-cell">
        <img src="../assets/images/user-avatars/image 14.png" alt="">
        <span>2. Anton</span>
        <span class="highscore-cell-points">93 p</span>
      </div>
      <div class="highscore-cell">
        <img src="../assets/images/user-avatars/image 16.png" alt="">
        <span>3. Angelica</span>
        <span class="highscore-cell-points">83 p</span>
      </div>
      <div class="highscore-cell">
        <img src="../assets/images/user-avatars/image 22.png" alt="">
        <span>4. Danny</span>
        <span class="highscore-cell-points">78 p</span>
      </div>
      <div class="highscore-cell">
        <img src="../assets/images/user-avatars/image 23.png" alt="">
        <span>5. Gustav</span>
        <span class="highscore-cell-points">67 p</span>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      highscoreList: []
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