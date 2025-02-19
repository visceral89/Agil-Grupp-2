<template>
  <div class="user-wrapper">
    <div class="user-img-wrapper">
      <img src="../assets/images/avtar-image.jpg" alt="Profilavtar">
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
    width: 130px;
    border-radius: 50%;
    margin: auto;
    box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.25);
  }
</style>
