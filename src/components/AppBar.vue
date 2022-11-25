<template>
  <v-app-bar
    :elevation="20"
    shaped
    color="deep-purple accent-4"
    image="https://img.freepik.com/premium-photo/marijuana-plant-growth-cannabis-medicinal-leaves_705804-471.jpg?w=996"
    scroll-target="#scrolling-techniques-2"

  >
    <template #image>
      <v-img
        gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"
      />
    </template>

    <template #prepend>
      <v-app-bar-nav-icon/>
    </template>

    <v-app-bar-title>High Quality Ganja Shop</v-app-bar-title>
    <div id="nav">
      <router-link to="/">Home</router-link>
      |
      <router-link to="/about">About</router-link>
      |
      <router-link to="/shop">Shop</router-link>
      |
      <router-link to="/hello">shopping basket</router-link>


    </div>
    <v-spacer/>

    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-heart</v-icon>
    </v-btn>

    <v-btn variant="text" icon="mdi-filter"></v-btn>

    <v-btn icon>
      <v-icon>mdi-dots-vertical</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>export default {
  components: {},
}
</script>
