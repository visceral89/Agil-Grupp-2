<template>
  <div class="user-wrapper">
    <div class="user-img-wrapper">
      <img src="../assets/images/906cd8d5-99ed-47cb-9f2b-ab4e18c8de1d.jpg" alt="Profilavtar">
    </div>
    <div id="welcome-text">
      <p>Välkommen, {{ name }}</p>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      name: 'Spelare'
    }
  }
}
</script>

<style scoped>
  img {
    width: 200px;
    border-radius: 50%;
    box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.25);
  }
</style>
