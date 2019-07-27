<template>
  <v-dialog v-model="booksdialog" width="800">
    <template v-slot:activator="{ on }">
      <v-btn icon v-on="on">
        <v-icon>bookmark</v-icon>
      </v-btn>
    </template>
        <v-card color="white">
          <v-layout>

            <v-flex xs5>
              <v-img :src="url" height="250px" contain />
            </v-flex>
            <v-flex xs7>
              <v-card-title primary-title>
                <div>
                  <div class="headline">{{ title }}</div>
                  <div>著者： {{ author }}</div>
                  <div>出版社： {{ publisher }}</div>
                  <div>出版年月：{{ publishedDate }}</div>
                </div>
              </v-card-title>
            </v-flex>
          </v-layout>
            <v-divider light />
          <v-card-actions class="pa-3">
            {{ description }}
          </v-card-actions>
            <v-divider />
            <v-spacer />
          <v-btn color="primary" flat @click="booksdialog = false">
            閉じる
          </v-btn>
        </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    propsbooksdialog: {
      type: Boolean
    },
    title: {
      type: String
    },
    author: {
      type: String
    },
    publisher: {
      type: String
    },
    publishedDate: {
      type: String
    },
    description: {
      type: String
    },
    url: {
      type: String
    }
  },
  data() {
    return {
      booksdialog: this.propsbooksdialog,
    }
  }
}
</script>

