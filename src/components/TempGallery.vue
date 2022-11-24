<template>
  <div class="gallery" />
  <div v-for="photo in photos" :key="photo" class="gallery-panel">
    <img :src="photo" alt="picture of nice weed">
  </div>
</template>

<script>
export default {
  data: () => ({
    photos: [
      'src/assets/pictures/01.jpg',
      'src/assets/pictures/02.jpg',
      'src/assets/pictures/03.jpg',
      'src/assets/pictures/04.jpg',
      'src/assets/pictures/05.jpg',
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
