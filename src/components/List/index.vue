<template>
  <v-layout justify-center>
    <v-flex xs12 sm6>
      <v-card>
        <v-card-title class="blue-grey lighten-5">
          <h1>合計：{{ book_number }}冊</h1>

          <v-spacer />
          
          <AddBookDialog 
          :items="items"
          :uid="uid"
          @display="display"
          />
        </v-card-title>

        <v-container fluid grid-list-md>
          <v-layout row wrap>
            <v-flex v-for="item in items" :key="item.ISBN" xs6 md4>
              <v-card>
                <v-img :src="item.URL" height="200px"/>
                <v-divider light />
                <v-card-actions class="pa-3 font-weight-black" v-text="item.Title" />
                <v-divider light />
                <v-card-actions>
                  <v-spacer />
                  <v-btn icon @click="deletes">
                    <v-icon>delete</v-icon>
                  </v-btn>

                  <DetailDaialog
                  v-bind:propsbooksdialog="propsbooksdialog"
                  :title="item.Title"
                  :author="item.Author"
                  :publisher="item.Title"
                  :publishedDate="item.Publisher"
                  :description="item.Description"
                  :url="item.URL"
                  />

                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script src="https://www.gstatic.com/firebasejs/5.11.0/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/5.11.0/firebase-firestore.js"></script>
<script>
import firebase from 'firebase'
import DetailDaialog from './DetailDialog'
import AddBookDialog from './AddBookDialog'

  export default {
    components: {
      DetailDaialog,
      AddBookDialog
    },
    data() {
      return {
        items: [],
        uid: '',
        propsbooksdialog: false,
      }
    },
    computed: {
      book_number: function() {
        return this.items.length
      }
    },
    watch: {
      // TODO:動作的には問題ないがreplaseでエラーが出る為、いったん保留
      // ISBN: function(v) {
      //   this.ISBN = v.replace(/[Ａ-Ｚａ-ｚ０-９]/g, function(s) { return String.fromCharCode(s.charCodeAt(0) - 65248) })
      // }
    },
    methods: {
      deletes() {
        var targetID = this.items[0].ID
        var db = firebase.firestore()
        db.collection("books").doc(targetID).delete()
        .then(() => {
          console.log("Document successfully deleted!")
          this.display()
        })
        .catch((error) => {
          console.error("Error removing document: ", error)
        })
      },
      display() {
        var db = firebase.firestore()
        var citiesRef = db.collection('books');
        var query = citiesRef.where('UID', '==', this.uid).get()
        .then(snapshot => {
          if (snapshot.empty) {
            console.log('No matching documents.')
            return
          }
          this.items = []
          snapshot.forEach(doc => {
            // console.log(doc.data())
            this.items.push(
              {
                ID: doc.id,
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
        })
        .catch(err => {
          console.log('Error getting documents', err)
        })
      },
    },
    beforeCreate() {
      firebase.auth().onAuthStateChanged( (user) => {
        if (user) {
          this.uid = user.uid
          this.display()
        } else {
          this.uid = null
        }
      })
    }
  }
</script>