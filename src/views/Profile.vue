<template>
  <div class="profile-wrapper">
    <div class="profile-header">
      <img :src="profileImage" alt="Profilbild" class="profile-image" />
      <h2>{{ username }}</h2>
      <div class="badges">
        <img v-for="(badge, index) in badges" :key="index" :src="badge" class="badge" />
      </div>
      <p class="points">{{ totalPoints }} p</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "Spelare1",
      profileImage: "https://via.placeholder.com/100", // användarens bild
      totalPoints: 4578,
      badges: [
        "https://via.placeholder.com/30", // Badge 1
        "https://via.placeholder.com/30", // Badge 2
        "https://via.placeholder.com/30"  // Badge 3
      ]
    };
  }
};
</script>

<style scoped>
.profile-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.profile-image {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
.badges {
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-top: 10px;
}
.badge {
  width: 30px;
  height: 30px;
}
.points {
  font-size: 1.5rem;
  margin-top: 10px;
}
</style>
