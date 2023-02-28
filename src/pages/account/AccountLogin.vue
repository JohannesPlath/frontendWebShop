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
      <v-dialog
        v-model="dialog"
        width="auto"
      >
        <v-card>
          <v-card-text>
            Something went wrong, please check your input!
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" block @click="dialog = false">Close Dialog</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </router-view>
  </v-container>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "AccountLayout",
  computed: {
    ...mapGetters('account', {credentials: 'getCredentials'}),
  },
  data: () => ({
    form: true,
    email: null,
    password: null,
    loading: false,
    userID: null,
    itemFinalize:
      {
        secColor: 'purple',
        color: 'secondary',
        icon: 'mdi-cart',
      },
    dialog: false,
  }),

  watch: {
    name() {
      this.errorMessages = ''
    },
    credentials: {
      immediate: true,
      deep: false,
      handler(newValue, oldValue) {
        this.userID = newValue.userID;
      }
    }
  },
  methods: {
    async onSubmit() {
      if (!this.form) return
      this.loading = true
      let user = await this.logIn({email: this.email, passw: this.password})
      setTimeout(() => (this.loading = false), 2000)
      if (user != null) {
        this.$router.push({path: '/shop'})
      } else {
        this.dialog = true
      }
    },

    required(v) {
      return !!v || 'Field is required'
    },
    ...mapActions('account', ['setCredentials', 'logIn']),

  },

}

</script>

<style scoped>

</style>
