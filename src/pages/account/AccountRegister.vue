<template>
  <v-form ref="form" lazy-validation>
    <v-row justify="center">
      <v-col
        cols="12"
        sm="10"
        md="8"
        lg="6"
      >
        <v-card>
          <v-card-text>
            <v-text-field
              ref="firstname"
              v-model="firstname"
              :rules="[() => !!firstname || 'This field is required']"
              :error-messages="errorMessages"
              label="First Name"
              placeholder="Johnny"
              required
            ></v-text-field>
            <v-text-field
              ref="familyName"
              v-model="familyName"
              :rules="[() => !!familyName || 'This field is required']"
              :error-messages="errorMessages"
              label="Family Name"
              placeholder="John Walker"
              required
            ></v-text-field>
            <v-text-field
              ref="address"
              v-model="address"
              :rules="[
              () => !!address || 'This field is required',
              () => !!address && address.length <= 25 || 'Address must be less than 25 characters',
              addressCheck
            ]"
              label="Address Line"
              placeholder="Snowy Rock Place 34"
              counter="25"
              required
            ></v-text-field>
            <v-text-field
              ref="city"
              v-model="city"
              :rules="[() => !!city || 'This field is required', addressCheck]"
              label="City"
              placeholder="Berlin"
              required
            ></v-text-field>

            <v-text-field
              ref="zip"
              v-model="zip"
              :rules="[() => !!zip || 'This field is required']"
              label="ZIP / Postal Code"
              required
              placeholder="79938"
            ></v-text-field>
            <v-autocomplete
              ref="country"
              v-model="country"
              :rules="[() => !!country || 'This field is required']"
              :items="countries"
              label="Country"
              placeholder="Select..."
              required
            ></v-autocomplete>
            <v-text-field
              ref="mail"
              v-model="email"
              :rules="[() => !!email || 'This field is required']"
              label="Mail Adress"
              required
              placeholder="mail@me.uk"
            ></v-text-field>
            <v-text-field
              ref="password"
              v-model="password"
              :rules="[
                () => !!password || 'This field is required',
                () => !!password && password.length >= 8 || 'Min 8 characters'
              ]"
              label="Password"
              required
              placeholder="1234"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :type="show1 ? 'text' : 'password'"
              @click:append="show1 = !show1"
            ></v-text-field>
            <v-text-field
              ref="passwordconfirmed"
              v-model="confirmPassword"
              :rules="[
                () => !!confirmPassword || 'This field is required',
                () => password === confirmPassword || 'Confirmed Password is not eqaul!'
              ]"
              label="Password"
              required
              placeholder="1234"
              :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
              :type="show2 ? 'text' : 'password'"
              @click:append="show2 = !show2"
            ></v-text-field>

            <v-card>
              <v-card-text>
                <div class="d-flex pa-sm-1">
                  <v-checkbox-btn
                    v-model="enabled"
                    class="pe-2"
                  ></v-checkbox-btn>
                  <v-text-field
                    :disabled="!enabled"
                    hide-details
                    label="I´m 18 years old or have an receipt of my Doctor"
                  ></v-text-field>
                </div>
              </v-card-text>
            </v-card>

          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn variant="text"
                   @click="resetForm()"
            >
              Cancel
            </v-btn>
            <v-spacer></v-spacer>
            <v-slide-x-reverse-transition>
              <v-tooltip
                v-if="formHasErrors"
                location="left"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    icon
                    class="my-0"
                    v-bind="attrs"

                    v-on="on"
                  >
                    <v-icon>mdi-refresh</v-icon>
                  </v-btn>
                </template>
                <span>Refresh form</span>
              </v-tooltip>
            </v-slide-x-reverse-transition>
            <v-btn
              :disabled="!enabled"
              color="primary"
              variant="text"
              @click="submit"
            >
              Submit
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  data: () => ({
    countries: ['Argentina', 'Australia', 'Austria', 'Belgium', 'Brazil', 'Bulgaria', 'Croatia', 'Czech Republic', 'Denmark', 'Deutschland', 'Finland', 'France', 'Germany', 'Greece', 'Grenada', 'Hungary', 'Iceland', 'Israel', 'Italy', 'Jamaica', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Malta', 'Mauritius', 'Mexico', 'Monaco', 'Montenegro', 'Netherlands Antilles', 'Norway', 'Paraguay', 'Peru', 'Poland', 'Portugal', 'Romania', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'South Korea', 'Spain', 'Sweden', 'Switzerland', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Venezuela'],
    errorMessages: '',
    firstname: null,
    familyName: null,
    address: null,
    city: null,
    state: null,
    zip: null,
    country: null,
    email: null,
    formHasErrors: false,
    password: null,
    confirmPassword: null,
    show1: false,
    show2: false,
    enabled: false,
  }),

  computed: {
    form() {
      return {
        firstname: this.firstname,
        familyName: this.familyName,
        address: this.address,
        city: this.city,
        state: this.state,
        zip: this.zip,
        country: this.country,
        email: this.email,
        password: this.password,
        confirmPassword: this.confirmPassword,
      }
    },

    ...mapGetters('account', {
      credentials: 'getCredentials'
    }),

  },

  watch: {
    name() {
      this.errorMessages = ''
    },
  },

  methods: {
    ...mapActions('account', ['setCredentials', "register"]),

    addressCheck() {
      this.errorMessages = this.address && !this.name
        ? `Hey! I'm required`
        : ''
      return true
    },

    resetForm() {
      this.errorMessages = []
      this.formHasErrors = false
      this.$refs.form.reset()

    },
    submit() {
      console.log('methods submit: form ', this.form)
      this.formHasErrors = false
      Object.keys(this.form).forEach(f => {
        if (!this.form[f]) this.formHasErrors = true
        //this.$refs[f].validate(true)
      })

      /*this.setCredentials(this.form).then(
        this.$router.push({path: '/shop'})
      )*/
    },
  },

  /* mounted() {
    if (this.credentials.familyName === "NotRegistered") {
      //this.$router.push({path: '/account/login'})
    }
  }*/

}
</script>

<!--export default {-->
<!--  methods: {-->
<!--    ...mapActions('counterModule', ['increment'])-->
<!--  },-->
<!--  computed: {
    ...mapGetters('counterModule', ['getCounter'])-->
<!--  },-->

<!--}-->

