<template>
  <v-parallax
    dark
    height="900"
    src="https://source.unsplash.com/YLSwjSy7stw/1200x1200"
  >
    <v-layout
      align-center
      column
      justify-center
    >
      <h1 class="display-3 font-weight-black mb-3">BooKShelF</h1>
      <h4 class="subheading font-weight-black">Let's create your own bookshelf!</h4>
    </v-layout>
  </v-parallax>
</template>

<script>
  export default {
    name: 'Home',
    data: function() {
      return {
        width: window.innerWidth,
        height: window.innerHeight
      }
    },
    methods: {
      handleResize: function() {
        this.width = window.innerWidth
        this.height = window.innerHeight
      }
    },
    monuted: function() {
      window.addEventListener('resize', this.handleResize)
    },
    beforeDestroy: function() {
      window.removeEventListener('resize', this.handleResize)
    }
  }
</script>