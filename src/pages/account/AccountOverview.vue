<template>
  <v-card
    class="mx-auto"
    width="300"
    prepend-icon="mdi-account"
    justify="center"
  >
    <template v-slot:title>
      Your Active Data:
    </template>
  </v-card>
  <user-overview-form></user-overview-form>
</template>

<script>


import {defineComponent} from "vue";
import UserOverviewForm from "@/pages/account/components/UserOverviewForm.vue";

export default defineComponent({
  components: {UserOverviewForm}
})
</script>
