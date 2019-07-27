<template>
  <div>
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on }">
        <v-btn round color="blue lighten-3" dark v-on="on">
          本を追加する
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>
          ISBNを参照し本を追加します
        </v-card-title>
        <v-card-text>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
              v-model.trim="ISBN"
              type="number"
              :counter="13"
              :rules="ISBNRules"
              :label="label"
              required
              />
            <v-btn :disabled="!valid" color="success" @click="validate">
              追加する
            </v-btn>
          </v-form>
        </v-card-text>
        <v-divider />
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" flat @click="dialog = false">
            閉じる
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  props: {
    items: {
      type: Array
    },
    uid: {
      type: String
    }
  },
  data() {
    return {
      label: '半角数字で入力してください',
      ISBNRules: [
        v => !!v || 'ISBNを入力してください',
        v => ( v && v.length >= 10) || 'ISBNは10/13桁の数字を入力してください',
        v => ( v && v.length <= 13) || 'ISBNは10/13桁の数字を入力してください',
      ],
      ISBN: '',
      judge: true,
      valid: true,
      dialog: false,
    }
  },
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        console.log(this.ISBN)
        this.snackbar = true
        this.addBook()
      }
    },
    addBook() {
      this.judge = true
      this.checkBook(this.ISBN)
      this.getResult(this.ISBN)
      this.$emit('display')
    },
    
    checkBook(getISBN) {
      this.items.forEach((setISBN) => {
        if(getISBN == setISBN.ISBN) {
          this.judge = false
        }
      })
    },
    getResult(ISBN) {
      console.log(ISBN)
      axios.get("https://www.googleapis.com/books/v1/volumes?q=isbn:" + ISBN)
      .then(response => {
        if(response.data.items == null) {
          console.log('データがありません')
          this.ISBN = ''
          this.label ='お探しの本は見つかりません'
        }else if(this.judge == false){
          this.ISBN = ''
          this.label = '入力済みのISBNです'
        }else{
          var items = response.data.items
          var addTitle = items[0].volumeInfo.title
          if(addTitle == null){
            addTitle = 'データがありません'
          }
          var addURL = items[0].volumeInfo.imageLinks.thumbnail
          if(addURL == null){
            addURL = 'データがありません'
          }
          var addAuthors = items[0].volumeInfo.authors[0]
          if(addAuthors == null){
            addAuthors = 'データがありません'
          }
          var addPublisher = items[0].volumeInfo.publisher
          if(addPublisher == null){
            addPublisher = 'データがありません'
          }
          var addPublishedDate = items[0].volumeInfo.publishedDate
          if(addPublishedDate == null){
            addPublishedDate = 'データがありません'
          }
          var addDescription = response.data.items[0].volumeInfo.description
          if(addDescription == null){
            addDescription = 'データがありません'
          }

          const firebase = require("firebase")
          require("firebase/firestore")
          if (!firebase.apps.length) {
            firebase.initializeApp({
              apiKey: "AIzaSyDOY8bWD39SdM2imFnSenjZX8YE2xEG28U",
              authDomain: "bookshelf-4ae61.firebaseapp.com",
              projectId: "bookshelf-4ae61"
            })
          }

          var db = firebase.firestore()
          db.collection("books").add({
            UID: this.uid,
            ISBN: this.ISBN,
            Title: addTitle,
            Author: addAuthors,
            Publisher: addPublisher,
            PublishedDate: addPublishedDate,
            Description: addDescription,
            URL: addURL,
          })
          .then((docRef) => {
            console.log("document written with ID: ", docRef.id)
          })
          .catch((error) => {
            console.error('Error adding document: ', error)
          })
          this.dialog = false
          this.ISBN = ''
          this.$refs.form.reset()
        }
      })
    }
  }
}
</script>
