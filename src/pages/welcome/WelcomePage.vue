<template>
  <div class="gallery"/>
  <div v-for="photo in photos" :key="photo" class="gallery-panel">
    <img :src="photo" alt="picture of nice weed">
  </div>
</template>

<script>
export default {
  data: () => ({
    photos: [
      'src/assets/pics/2h-media-1SDw4biQ6us-unsplash.jpg',
      'src/assets/pics/2h-media-9oIym89cYIc-unsplash.jpg',
      'src/assets/pics/2h-media-mQVlwFd3OPA-unsplash.jpg',
      'src/assets/pics/matthew-brodeur-qcCPIhhdgTw-unsplash.jpg',
      'src/assets/pics/metal-grinder-weed-canabis-oil-joint-posing.jpg',
      'src/assets/pics/vertical-isolated-shot-marijuana-blunt-white.jpg',
      'src/assets/pics/marijuana-g966935eb2_1920.jpg',
      'src/assets/pics/weed-ge36fcac46_1920.jpg',
      'src/assets/pics/avery-meeker-0skab8kzSxo-unsplash.jpg',
      'src/assets/pics/christopher-lemercier-KKiVzGhHR0k-unsplash.jpg',
      'src/assets/pics/crystalweed-cannabis-sEWqMCemlVA-unsplash.jpg',
      'src/assets/pics/diyahna-lewis---JxxyIUHnU-unsplash.jpg',
      'src/assets/pics/flowers-gd7e30204f_1920.jpg',
      'src/assets/pics/purple-hemp-flowers-medical-cannabis.jpg',
      'src/assets/pics/roman-kasyan-zlUgzTz56jo-unsplash.jpg',
      'src/assets/pics/ryan-lange-J5-MNWFzHZs-unsplash.jpg',
      'src/assets/pics/teanna-morgan-JfEiDHqOyyk-unsplash.jpg',

    ]
  }),
}
</script>

<style scoped>
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  grid-gap: 1rem;
  max-width: 80rem;
  margin: 5rem auto;
  padding: 0 5rem;
}

.gallery-panel img {
  width: 100%;
  height: 22vw;
  object-fit: cover;
  border-radius: 0.75rem;
}
</style>
