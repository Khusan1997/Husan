<template>
  <!-- <div class="auth-wrapper auth-v1">
    <v-row>
      <v-col>
        <div class="text-center ml-4 pl-4">
          <v-img
            :src="require('@/assets/images/LOGO.png')"
            max-height="800px"
            max-width="800px"
          ></v-img>
        </div>
      </v-col>
    </v-row>
   <v-row>
     <v-col>
        <div class="auth-inner">
      <v-card class="auth-card">
        <v-card-title class="d-flex align-center justify-center py-7">
          <router-link to="/" class="d-flex align-center">
            <v-img
              :src="require('@/assets/images/logos/logo.svg')"
              max-height="30px"
              max-width="30px"
              alt="logo"
              contain
              class="me-3"
            ></v-img>

            <h2 class="text-2xl font-weight-semibold">Materio</h2>
          </router-link>
        </v-card-title>

        <v-card-text>
          <p class="text-2xl font-weight-semibold text--primary mb-2">Welcome to Materio! 👋🏻</p>
          <p class="mb-2">Please sign-in to your account and start the adventure</p>
        </v-card-text>

        <v-card-text>
          <v-form>
            <v-text-field
              v-model="email"
              outlined
              label="Email"
              placeholder="john@example.com"
              hide-details
              class="mb-3"
            ></v-text-field>

            <v-text-field
              v-model="password"
              outlined
              :type="isPasswordVisible ? 'text' : 'password'"
              label="Password"
              placeholder="············"
              :append-icon="isPasswordVisible ? icons.mdiEyeOffOutline : icons.mdiEyeOutline"
              hide-details
              @click:append="isPasswordVisible = !isPasswordVisible"
            ></v-text-field>

            <div class="d-flex align-center justify-space-between flex-wrap">
              <v-checkbox label="Remember Me" hide-details class="me-3 mt-1"> </v-checkbox>

              <a href="javascript:void(0)" class="mt-1"> Forgot Password? </a>
            </div>

            <v-btn @click="login" block color="primary" class="mt-6">
              {{ $t('Login') }}
            </v-btn>
          </v-form>
        </v-card-text>

        <v-card-text class="d-flex align-center justify-center flex-wrap mt-2">
          <span class="me-2"> New on our platform? </span>
          <router-link :to="{ name: 'pages-register' }"> Create an account </router-link>
        </v-card-text>

        <v-card-text class="d-flex align-center mt-2">
          <v-divider></v-divider>
          <span class="mx-5">or</span>
          <v-divider></v-divider>
        </v-card-text>

        <v-card-actions class="d-flex justify-center">
          <v-btn v-for="link in socialLink" :key="link.icon" icon class="ms-1">
            <v-icon :color="$vuetify.theme.dark ? link.colorInDark : link.color">
              {{ link.icon }}
            </v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>

     </v-col>
   </v-row>
    <img
      class="auth-mask-bg"
      height="173"
      :src="require(`@/assets/images/misc/mask-${$vuetify.theme.dark ? 'dark' : 'light'}.png`)"
    />

    <v-img class="auth-tree" width="247" height="185" src="@/assets/images/misc/tree.png"></v-img>

    <v-img class="auth-tree-3" width="377" height="289" src="@/assets/images/misc/tree-3.png"></v-img>
  </div> -->
  <div style="height: 100vh">
    <v-row style="height: 100vh">
      <v-col style="background-color: #9e69fd">
        <v-img style="margin-top: 15vh" width="90%" :src="require('@/assets/images/imageSport.svg')"></v-img>
      </v-col>

      <v-col>
        <v-card style="height: 100vh">
          <v-row>
            <v-col sm="12" md="3"></v-col>
            <v-col sm="12" md="6">
              <div class="text-center" style="text-align: center !important">
               <v-row >
                 <v-col></v-col>
                 <v-col>
                    <v-img style="margin-top:50px" :src="require('@/assets/images/LOGO.png')" max-height="300px" max-width="300px"></v-img>
                 </v-col>
                 <v-col></v-col>
               </v-row>
              </div>
              <div class="auth-inner">
                <v-card style="margin-top: 1vh" class="auth-card">
                  <v-card-title class="d-flex align-center justify-center">
                    <router-link to="/" class="d-flex align-center"> </router-link>
                  </v-card-title>

                  <v-card-text>
                    <p class="text-3xl font-weight-semibold text--primary mb-2 text-center">Xush Kelibsiz!</p>
                  </v-card-text>

                  <v-card-text>
                    <v-form>
                      <v-text-field
                        v-model="email"
                        outlined
                        label="Login"
                        placeholder="john@example.com"
                        hide-details
                        class="mb-3"
                      ></v-text-field>

                      <v-text-field
                        v-model="password"
                        outlined
                        :type="isPasswordVisible ? 'text' : 'password'"
                        label="Parol"
                        placeholder="············"
                        :append-icon="isPasswordVisible ? icons.mdiEyeOffOutline : icons.mdiEyeOutline"
                        hide-details
                        @click:append="isPasswordVisible = !isPasswordVisible"
                      ></v-text-field>

                      <div class="d-flex align-center justify-space-between flex-wrap">
                        <v-checkbox label="Eslab qolish" hide-details class="me-3 mt-1"> </v-checkbox>

                        <a href="javascript:void(0)" class="mt-1">Parolinggizni unutdinggizmi?</a>
                      </div>

                      <v-btn @click="login" block color="primary" class="mt-6">
                        {{ $t('Login') }}
                      </v-btn>
                    </v-form>
                  </v-card-text>
                  <v-card-actions class="d-flex justify-center">
                    <!-- <v-btn v-for="link in socialLink" :key="link.icon" icon class="ms-1">
                      <v-icon :color="$vuetify.theme.dark ? link.colorInDark : link.color">
                        {{ link.icon }}
                      </v-icon>
                    </v-btn> -->
                  </v-card-actions>
                </v-card>
              </div>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mdiFacebook, mdiTwitter, mdiGithub, mdiGoogle, mdiEyeOutline, mdiEyeOffOutline } from '@mdi/js'
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const isPasswordVisible = ref(false)
    const email = ref('')
    const password = ref('')
    const socialLink = [
      {
        icon: mdiFacebook,
        color: '#4267b2',
        colorInDark: '#4267b2',
      },
      {
        icon: mdiTwitter,
        color: '#1da1f2',
        colorInDark: '#1da1f2',
      },
      {
        icon: mdiGithub,
        color: '#272727',
        colorInDark: '#fff',
      },
      {
        icon: mdiGoogle,
        color: '#db4437',
        colorInDark: '#db4437',
      },
    ]

    return {
      isPasswordVisible,
      email,
      password,
      socialLink,

      icons: {
        mdiEyeOutline,
        mdiEyeOffOutline,
      },
      authenticated: false,
      mockAccount: {
        email: 'admin',
        password: '1',
      },
    }
  },
  methods: {
    login() {
      if (this.email != '' && this.password != '') {
        var self = this
        if (self.email == self.mockAccount.email && self.password == self.mockAccount.password) {
          localStorage.setItem('authenticated', self.mockAccount.email)
          self.$router.push({ name: 'dashboard' })
        } else {
          alert('login yoki parol xato')
        }
      } else {
        alert('wwwww')
      }
    },
  },
}
</script>

<style lang="scss">
@import '~@/plugins/vuetify/default-preset/preset/pages/auth.scss';
</style>
