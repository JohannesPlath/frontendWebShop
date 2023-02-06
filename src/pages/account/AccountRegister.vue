<template>
  <v-card
    class="mx-auto"
    width="350"
    prepend-icon="mdi-account"

  >
    <template v-slot:title>
      Try to Register yourselfe:
    </template>


  </v-card>
  <credentials-form>

  </credentials-form>
</template>

<script>


import {defineComponent} from "vue";
import CredentialsForm from "@/pages/account/components/UserRegisterForm.vue";

export default defineComponent({
  components: {CredentialsForm}
})
</script>
