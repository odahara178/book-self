<template>
<div>

  <v-toolbar app color="blue-grey darken-4" class="white--text">
    <v-toolbar-title class="headline text-uppercase" >
      <span >BOOK</span>
      <span class="font-weight-light">SHELF</span>
    </v-toolbar-title>

    <v-spacer />

    <!-- TODO: Listの時のみ表示させる -->
    <v-flex xs12 sm6 md3>
      <form v-on:submit.prevent="search">
        <v-text-field v-model="keyword" label="検索" solo flat append-icon="search" />
      </form>
    </v-flex>
  </v-toolbar>

    <v-dialog v-model="dialog" width="800">
          <v-card color="white" v-for="book in books" v-bind:key="book.ISBN">
            <v-layout>
              <v-flex xs5>
                <v-img :src="book.URL" height="250px" contain />
              </v-flex>
              <v-flex xs7>
                <v-card-title primary-title>
                  <div>
                    <div class="headline">{{book.Title}}</div>
                    <div>著者： {{book.Author}}</div>
                    <div>出版社： {{book.Publisher}}</div>
                    <div>出版年月：{{book.PublishedDate}}</div>
                  </div>
                </v-card-title>
              </v-flex>
            </v-layout>
              <v-divider light />
            <v-card-actions class="pa-3">
              {{book.Description}}
            </v-card-actions>
              <v-divider />
              <v-spacer />
            <v-btn color="primary" flat @click="dialog = false">
              閉じる
            </v-btn>
          </v-card>
    </v-dialog>

</div>


</template>



<style>
.v-input__slot {
  margin-top :8px;
}
</style>

<script>
import firebase from 'firebase'

export default {
  data() {
      return {
        books: [],
        keyword: '',
        dialog: false
        }
    },
  methods: {
    search() {
      var db = firebase.firestore()
      var booksRef = db.collection("books")
      var query = booksRef.where("Title", "==", this.keyword)

      query.get()
        .then(snapshot => {
          if (snapshot.empty) {
            alert('一致するデータがありません')
            return
          }
          this.books = []
          snapshot.forEach(doc => {
            console.log(doc.data())
            this.books.push(
              {
                ISBN: doc.data().ISBN,
                Title: doc.data().Title,
                Author: doc.data().Author,
                Publisher: doc.data().Publisher,
                PublishedDate: doc.data().PublishedDate,
                Description: doc.data().Description,
                URL: doc.data().URL
              }
            )
          })
          this.dialog = true
        })
        .catch(err => {
          console.log('Error getting documents', err)
        })
    }
  }
}
</script>


