<template>
    <v-container>
        <h1>サインアップ</h1>
        <v-form
            ref="form"
            v-model="valid"
            lazy-validation
        >
        <!-- TODO: 新規登録時に名前も登録出来るようにする -->
            <!-- <v-text-field
              v-model="name"
              :counter="10"
              :rules="nameRules"
              label="名前"
              required
            ></v-text-field> -->

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
              新規登録
            </v-btn>

            <v-btn
              color="error"
              @click="reset"
            >
              リセット
            </v-btn>
        </v-form>
    </v-container>
</template>

<script>
  import firebase from 'firebase'

  export default {
    data: () => ({
      valid: true,
      // TODO: 新規登録時に名前も登録出来るようにする
      // name: '',
      // nameRules: [
      //   v => !!v || '名前を記入してください',
      //   v => (v && v.length <= 10) || '10文字以内で記入してください'
      // ],
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
      signUp() {
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
        .then(user => {
          console.log(user.email)
          alert('Create account:', user.email)
        })
        .catch(error => {
          alert(error.message)
        })
      },
      validate () {
        if (this.$refs.form.validate()) {
          this.snackbar = true
        }
        this.signUp()
      },
      reset () {
        this.$refs.form.reset()
      }
    }
  }
</script>