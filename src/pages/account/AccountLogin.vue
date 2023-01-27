<template>
  <v-container class="py-8 px-6" fluid>
    <router-view>
      <v-sheet class="bg-deep-purple pa-12" rounded>
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
              color="success"
              size="large"
              type="submit"
              variant="elevated"
            >
              Sign In
            </v-btn>
          </v-form>
        </v-card>
      </v-sheet>
    </router-view>
  </v-container>
</template>

<script>
export default {
  name: "AccountLayout",


  data: () => ({

    email: null,
    password: null,
    loading: false,
  }),

  computed: {
    form() {
      return {
        mail: this.mail,
        password: this.password,
      }
    },

  },
  methods: {
    onSubmit() {
      if (!this.form) return

      this.loading = true

      setTimeout(() => (this.loading = false), 2000)
    },
    required(v) {
      return !!v || 'Field is required'
    },
  },

}

</script>

<style scoped>

</style>
