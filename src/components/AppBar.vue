<template>
  <v-app-bar
    :elevation="20"
    shaped
    color="deep-purple accent-4"
    :image="photo"
    scroll-target="#scrolling-techniques-2">

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
      <router-link to="/shop">Shop</router-link>
      |
      <router-link to="/hello">shopping basket</router-link>
      |
      <router-link to="/account">Account</router-link>


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
  data: () => ({
    photo:
      'src/assets/pics/marijuana-g966935eb2_1920.jpg',
  })
}
</script>
