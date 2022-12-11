<template>
  <v-app-bar
    :elevation="20"
    shaped
    color="deep-purple accent-4"
    :image="photo"
    scroll-target="#scrolling-techniques-2"
    style="flex: fit-content">

    <template #image>
      <v-img
        gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"
      />
    </template>

<!--    <template #prepend>
      <v-app-bar-nav-icon/>
    </template>-->
    <v-spacer/><v-spacer/>
    <v-app-bar-title >High Quality Ganja Products </v-app-bar-title>
    <!--    <div id="nav">

          <router-link to="/">Home</router-link>
          |
          <router-link to="/shop">Shop</router-link>
          |
          <router-link to="/hello">shopping basket</router-link>
          |
          <router-link to="/account">Account</router-link>



    </div> -->
    <v-spacer/>

    <v-btn icon to="/shop">
      <v-icon>mdi-magnify</v-icon>
    </v-btn>

<!--    <v-btn icon>
      <v-icon>mdi-heart</v-icon>
    </v-btn>-->

    <v-btn class="text-none" to="/cart" stacked>
      <v-badge :content="quantityGetter" color="blue">
        <v-icon>mdi-cart</v-icon>
      </v-badge>
    </v-btn>

    <v-btn variant="text" icon="mdi-account" to="/account"></v-btn>

<!--    <v-btn icon>
      <v-icon>mdi-dots-vertical</v-icon>
    </v-btn>-->
  </v-app-bar>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  components: {},
  data: () => ({
    photo:
      'src/assets/pics/marijuana-g966935eb2_1920.jpg',
  }),
  computed: {
    ...mapGetters('cart', ['quantityGetter']),
  },
}
</script>
