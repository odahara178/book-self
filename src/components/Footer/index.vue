<template>
  <v-footer>
    <v-bottom-nav :value="true" fixed color="grey lighten-4">
      <router-link tag="button" to="/">
        <v-btn color="teal" flat>
          <span>Home</span>
          <v-icon>home</v-icon>
        </v-btn>
      </router-link>

      <router-link tag="button" to="/list">
        <v-btn color="teal" flat>
          <span>Book</span>
          <v-icon>book</v-icon>
        </v-btn>
      </router-link>

      <router-link tag="button" to="/login" v-if="user" >
        <v-btn color="teal" flat @click="signOut">
          <span>signout</span>
          <v-icon>build</v-icon>
        </v-btn>
      </router-link>

      <router-link tag="button" to="/login" v-else>
        <v-btn color="teal" flat>
          <span>Login</span>
          <v-icon>build</v-icon>
        </v-btn>
      </router-link>
    </v-bottom-nav>
  </v-footer>
</template>

<script>
import firebase from 'firebase'

export default {
  data () {
    return {
      user: null,
    }
  },
  methods: {
    signOut() {
      firebase.auth().signOut().then(() => {
        this.$router.push('/login')
      })
    }
  },
  beforeCreate() {
    firebase.auth().onAuthStateChanged( (user) => {
      if (user) {
        this.user = user
      } else {
        this.user = null
      }
    })
  }
}
</script>

