<template>
  <v-container class="py-8 px-6" fluid>
    <router-view>
      <v-sheet class="bg-secondary pa-12" rounded>
        <v-card class="mx-auto px-6 py-8" max-width="344">
          <v-form
            v-model="form"
            @submit.prevent="onSubmit"
          >
            <v-text-field
              v-model="email"
              :readonly="loading"
              :rules="[required]"
              class="mb-2"
              clearable
              label="Email"
            ></v-text-field>

            <v-text-field
              v-model="password"
              :readonly="loading"
              :rules="[required]"
              clearable
              label="Password"
              placeholder="Enter your password"
            ></v-text-field>

            <br>

            <v-btn
              :disabled="!form"
              :loading="loading"
              block
              color="purple"
              size="large"
              type="submit"
              variant="elevated"
            >
              Sign In
            </v-btn>
            <br>
            <v-btn

              :loading="loading"
              block
              color="purple"
              size="large"
              type="submit"
              variant="elevated"
              to="/account/register"
            >
              or Register
            </v-btn>
          </v-form>
        </v-card>
      </v-sheet>
    </router-view>
  </v-container>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "AccountLayout",

  data: () => ({
    form: true,
    email: null,
    password: null,
    loading: false,
    itemFinalize:
      {
        secColor: 'purple',
        color: 'secondary',
        icon: 'mdi-cart',
      },
  }),


  methods: {
    onSubmit() {
      console.log('methods onSubmit: AccountLogin this.mail', this.email)
      console.log('methods onSubmit @ AccountLogin: ', this.email, this.password)
      this.signIn({mail: this.email, passw: this.password})
      if (!this.form) return
      this.loading = true
      setTimeout(() => (this.loading = false), 2000)
      this.setCredentials(this.form).then(
        this.$router.push({path: '/shop'})
      )
    },

    required(v) {
      return !!v || 'Field is required'
    },

    ...mapActions('account', ['setCredentials', 'signIn']),

  },

}

</script>

<style scoped>

</style>
