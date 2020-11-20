<template>
  <v-container class="page-login" fill-height>
    <v-row>
      <v-col>
        <v-card class="pa-3 page-login__card" tile>
          <v-card-title>
            <img
              src="/static/m.png"
              alt="Vue Material Admin"
              height="48"
              contain
            />
            <h1 class="primary--text display-1 page-login_title">
              Material Admin Template
            </h1>
          </v-card-title>
          <v-tabs
            v-model="tab"
            background-color="deep-purple accent-4"
            centered
            dark
            icons-and-text
          >
            <v-tabs-slider></v-tabs-slider>
            <v-tab href="#tab-1">
              Password
              <v-icon>mdi-lock</v-icon>
            </v-tab>
            <v-tab href="#tab-2">
              Mobile Valid Code
              <v-icon>mdi-phone</v-icon>
            </v-tab>
            <v-tabs-items v-model="tab">
              <!-- 密码登录 -->
              <v-tab-item value="tab-1">
                <v-card-text>
                  <v-form
                    ref="form"
                    class="my-10"
                    lazy-validation
                    v-model="formValid"
                  >
                    <v-text-field
                      append-icon="mdi-email"
                      autocomplete="off"
                      name="login"
                      :label="$vuetify.lang.t('$vuetify.mobile')"
                      :placeholder="$vuetify.lang.t('$vuetify.mobile')"
                      type="text"
                      required
                      outlined
                      :rules="formRule.mobile"
                      v-model="formModel.mobile"
                    />
                    <v-text-field
                      append-icon="mdi-lock"
                      autocomplete="off"
                      name="password"
                      :label="$vuetify.lang.t('$vuetify.password')"
                      :placeholder="$vuetify.lang.t('$vuetify.password')"
                      type="password"
                      :rules="formRule.password"
                      required
                      outlined
                      v-model="formModel.password"
                      v-on:keyup.enter="login"
                    />
                  </v-form>
                </v-card-text>
              </v-tab-item>
              <!-- 手机验证码 -->
              <v-tab-item value="tab-2">
                <v-card-text>
                  <v-form
                    ref="form"
                    class="my-10"
                    lazy-validation
                    v-model="mobileFormValid"
                  >
                    <v-text-field
                      append-icon="mdi-email"
                      autocomplete="off"
                      name="login"
                      :label="$vuetify.lang.t('$vuetify.mobile')"
                      :placeholder="$vuetify.lang.t('$vuetify.mobile')"
                      type="text"
                      required
                      outlined
                      :rules="formRule.mobile"
                      v-model="mobileCodeForm.mobile"
                    />
                    <v-text-field
                      append-icon="mdi-lock"
                      autocomplete="off"
                      name="code"
                      :label="$vuetify.lang.t('$vuetify.code')"
                      :placeholder="$vuetify.lang.t('$vuetify.code')"
                      type="text"
                      :rules="formRule.code"
                      required
                      outlined
                      v-model="mobileCodeForm.code"
                      v-on:keyup.enter="login"
                    >
                      <template v-slot:append>
                        <v-btn
                          large
                          tile
                          color="primary"
                          class="send-code-btn"
                          @click="sendMobileCode()"
                          :disabled="sendCodeDisable"
                          >{{ sendCodeText }}</v-btn
                        >
                      </template>
                    </v-text-field>
                  </v-form>
                </v-card-text>
              </v-tab-item>
            </v-tabs-items>
          </v-tabs>

          <v-card-actions>
            <v-tooltip v-for="item in socialIcons" :key="item.text" bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="primary"
                  icon
                  v-bind="attrs"
                  v-on="on"
                  @click="handleSocialLogin"
                >
                  <v-icon v-text="item.icon" />
                </v-btn>
              </template>
              <span>{{ item.text }}</span>
            </v-tooltip>
            <v-spacer />
            <v-btn large text @click="login">
              {{ $vuetify.lang.t('$vuetify.register') }}
            </v-btn>
            <v-btn large tile color="primary" @click="login" :loading="loading">
              {{ $vuetify.lang.t('$vuetify.login') }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// import { validationMixin } from 'vuelidate'
// import { required, maxLength, email } from 'vuelidate/lib/validators'
export default {
  //   mixins: [validationMixin],
  name: 'PageLogin',
  data() {
    return {
      loading: false,
      formValid: false,
      mobileFormValid: false,
      tab: 'tab-2',
      formModel: {
        mobile: null,
        password: null,
        code: null
      },
      mobileCodeForm: {
        mobile: null,
        code: null
      },
      formRule: {
        mobile: [
          (v) =>
            !!v ||
            this.$vuetify.lang.t('$vuetify.rule.required', [
              this.$vuetify.lang.t('$vuetify.mobile')
            ])
        ],
        password: [
          (v) =>
            !!v ||
            this.$vuetify.lang.t('$vuetify.rule.required', [
              this.$vuetify.lang.t('$vuetify.password')
            ])
        ],
        code: [
          (v) =>
            !!v ||
            this.$vuetify.lang.t('$vuetify.rule.required', [
              this.$vuetify.lang.t('$vuetify.code')
            ])
        ]
      },
      socialIcons: [
        {
          text: 'Google',
          icon: 'mdi-google'
        },
        {
          text: 'Facebook',
          icon: 'mdi-facebook'
        },
        {
          text: 'Twitter',
          icon: 'mdi-twitter'
        }
      ],
      countNum: 60,
      sendCodeText: '发送验证码',
      sendCodeDisable: false
    }
  },
  computed: {
    prefix() {
      return ''
    }
  },
  methods: {
    login() {
      if (this.$refs.form.validate()) {
        this.loading = true
        this.$store
          .dispatch('login', this.formModel)
          .then(() => {
            this.loading = false
            this.$router.push('/dashboard')
          })
          .catch(() => {
            this.loading = false
          })
      }
    },
    sendMobileCode() {
      this.sendCodeDisable = true
      let timer = setInterval(() => {
        this.countNum--
        this.sendCodeText = `${this.countNum}后重新发送`
        if (this.countNum == 0) {
          this.countNum = 60
          this.sendCodeText = '发送验证码'
          this.sendCodeDisable = false
          clearInterval(timer)
        }
      }, 1000)
    },
    handleSocialLogin() {}
  }
}
</script>

<style lang="scss" scoped>
.page-login__card {
  max-width: 600px;
  margin: 0 auto;
}

.send-code-btn {
  position: absolute;
  height: 51px !important;
  right: 2px;
  top: 2px;
  border-radius: 0 3px 3px 0 !important;
}
</style>
