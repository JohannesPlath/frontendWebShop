<template>
  <credentials-form>
  </credentials-form>
</template>

<script>


import {defineComponent} from "vue";
import CredentialsForm from "@/pages/account/components/CredentialsForm.vue";
import {mapGetters} from "vuex";

export default defineComponent({
  components: {CredentialsForm},
  /*...mapGetters('account', {credentials: 'getCredentials'}),*/
})
</script>
