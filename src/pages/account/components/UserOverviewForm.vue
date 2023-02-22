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
              v-model="firstname" input
              :rules="[() => !!firstname || 'This field is required']"
              :error-messages="errorMessages"
              label="First Name"

              required
            />
            <v-text-field
              ref="familyName"
              v-model="familyName" input
              :rules="[() => !!familyName || 'This field is required']"
              :error-messages="errorMessages"
              label="Family Name"
              placeholder="John Walker"
              required
            />
            <v-text-field
              ref="address"
              v-model="address" input
              :rules="[
                () => !!address || 'This field is required',
                () => !!address && address.length <= 25 || 'Address must be less than 25 characters',
                addressCheck
              ]"
              label="Address Line"
              placeholder="Snowy Rock Place 34"
              counter="25"
              required
            />
            <v-text-field
              ref="city"
              v-model="city" input
              :rules="[() => !!city || 'This field is required', addressCheck]"
              label="City"
              placeholder="Berlin"
              required
            />
            <v-text-field
              ref="state"
              v-model="state"
              :rules="[() => !!state || 'This field is required']"
              label="State/Province/Region"
              required
              placeholder="TX"
            />
            <v-text-field
              ref="zip"
              v-model="zip" input
              :rules="[() => !!zip || 'This field is required']"
              label="ZIP / Postal Code"
              required
              placeholder="79938"
            />
            <v-autocomplete
              ref="country"
              v-model="country" input
              :rules="[() => !!country || 'This field is required']"
              :items="countries"
              label="Country"
              placeholder="Select..."
              required
            />
            <v-text-field
              ref="mail"
              v-model="email" input
              :rules="[() => !!email || 'This field is required']"
              label="Mail Adress"
              required
              placeholder="mail@me.uk"
            />
            <v-text-field
              ref="oldPassword"
              v-model="oldpassword" input
              :rules="[
                () => !!oldpassword || 'This field is required',
              ]"
              label="old Password"
              required
              placeholder="our old password you like to change"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :type="show1 ? 'text' : 'password'"
              @click:append="show1 = !show1"
            />
            <v-text-field
              ref="newPassword"
              v-model="newpassword" input
              :rules="[
                () => !!newpassword || 'This field is required',
                () => !!newpassword && newpassword.length >= 8 || 'Min 8 characters'
              ]"
              label="new Password"
              required
              placeholder="1234"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :type="show1 ? 'text' : 'password'"
              @click:append="show1 = !show1"
            />
            <v-text-field
              ref="confirmedNewPassword"
              v-model="confirmNewPassword" input
              :rules="[
                () => !!confirmNewPassword || 'This field is required',
                () => newpassword === confirmNewPassword || 'Confirmed Password is not eqaul!'
              ]"
              label="new Password"
              required
              placeholder="1234"
              :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
              :type="show2 ? 'text' : 'password'"
              @click:append="show2 = !show2"
            />

            <v-card>
              <v-card-text>
                <div class="d-flex pa-sm-1">
                  <v-checkbox-btn
                    v-model="enabled"
                    class="pe-2"
                  />
                  <v-text-field
                    :disabled="!enabled"
                    hide-details
                    label="I´m 18 years old or have an receipt of my Doctor"
                  />
                </div>
              </v-card-text>
            </v-card>
          </v-card-text>
          <v-divider/>
          <v-card-actions>
            <v-spacer/>

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
</template>

<script>
import {mapActions, mapGetters} from 'vuex';

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
    oldpassword: null,
    newpassword: null,
    confirmNewPassword: null,
    show1: false,
    show2: false,
    enabled: false,
    dialog: false,
  }),
  computed: {
    /* userCredentials() {
       return this.credentials
     },*/
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
        oldpassword: this.oldpassword,
        newpassword: this.newpassword,
        confirmNewPassword: this.confirmNewPassword,
      }
    },

    ...mapGetters('account', {
      credentials: 'getCredentials'
    }),

  },

  watch: {
    /* name() {
       this.errorMessages = ''
     },*/
    credentials: {
      immediate: true,
      deep: false,
      handler(newValue, oldValue) {
        console.log('userCredentials handler: ', this.zip)
        console.log('user', newValue);
        this.firstname = newValue.firstname
        this.familyName = newValue.familyName //todo rest auffüllen
        this.address = newValue.address
        this.city = newValue.city
        this.state = newValue.state
        this.zip = newValue.zip
        this.country = newValue.country
        console.log('userCredentials handler: ', newValue.country)
        this.email = newValue.email

      }
    }
  },

  methods: {
    ...mapActions('account', ['setCredentials', 'register']),

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
    async submit() {
      console.log('methods submit: form ', this.form)
      this.formHasErrors = false
      Object.keys(this.form).forEach(f => {
        if (!this.form[f])
          this.formHasErrors = true
        this.$refs.form.validate(true)
        if (this.newpassword != this.confirmNewPassword) {
          this.formHasErrors = true
        }
      })
      let user
      if (!this.formHasErrors)
        user = await this.register(this.form)
      if (user.userID != null) {
        this.$router.push({path: '/shop'})
      } else {
        this.dialog = true
      }
    },
  },

  /* mounted() {
    if (this.credentials.familyName === "NotRegistered") {
      //this.$router.push({path: '/account/login'})
    }
  }*/

}
</script>
