<template>
    <v-container>
      <h1>ログイン</h1>
        <v-form
            ref="form"
            v-model="valid"
            lazy-validation
        >
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="メールアドレス"
              required
            ></v-text-field>

            <v-text-field
              v-model="password"
              type="password"
              :counter="8"
              :rules="passRules"
              label="パスワード"
              required
            ></v-text-field>

            <v-btn
              :disabled="!valid"
              color="success"
              @click="validate"
            >
              ログイン
            </v-btn>

            <v-btn
              color="error"
              @click="reset"
            >
              リセット
            </v-btn>
        </v-form>
        <router-link to="/signup">登録していない方はこちら</router-link>
    </v-container>
</template>

<script>
  import firebase from 'firebase'

  export default {
    data: () => ({
      valid: true,
      email: '',
      emailRules: [
        v => !!v || 'メールアドレスを記入してください',
        v => /.+@.+/.test(v) || '有効なアドレスを記入してください'
      ],
      password: '',
      passRules: [
        v => !!v || 'パスワードを記入してください',
        v => (v && v.length >= 8) || '8文字以上で記入してください'
      ],
    }),
    methods: {
      signIn() {
        firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            if(this.$route.query.redirect) {
              this.$router.push(this.$route.query.redirect)
            } else {
              this.$router.push('/')
            }
          },
          err => {
            alert(err.message)
          }
        )
      },
      validate() {
        if (this.$refs.form.validate()) {
          this.snackbar = true
        }
        this.signIn()
      },
      reset() {
        this.$refs.form.reset()
      }
    }
  }
</script>