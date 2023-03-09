<template>
  <v-app-bar
    :elevation="20"
    shaped
    color="deep-purple accent-4"
    :image="photo"
    scroll-target="#scrolling-techniques-2"
    style="flex: fit-content"
  >

    <template #image>
      <v-img
        gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"
      />
    </template>
    <v-spacer/>
    <v-app-bar-title>High Quality Ganja Products</v-app-bar-title>

    <v-btn class="text-none" to="/cart" stacked>
      <v-badge :content="quantity" color="blue">
        <v-icon>mdi-cart</v-icon>
      </v-badge>
    </v-btn>

    <v-btn variant="text" icon="mdi-account" to="/account/login"></v-btn>
    <v-btn color="orange" size="small" icon="mdi-logout" @click="logout"></v-btn>

  </v-app-bar>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import account from "@/pages/account/store/account.store";

export default {
  components: {},
  data: () => ({
    photo:
      'src/assets/pics/marijuana-g966935eb2_1920.jpg',
  }),
  computed: {
    ...mapGetters('cart', ['quantity']),

  },
  methods: {
    ...mapActions('account', ['logout']),
  },

}
</script>
