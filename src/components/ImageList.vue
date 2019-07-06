<template>
  <div>
    <div class="image-container" v-if="isLoggedIn">
      <img v-for="img in allImages" :key="img.id" :src="img.link" />
    </div>
    <div class="image-container" v-else>
      plz Login 
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: 'ImageList',
  methods: {
    ...mapActions(['fetchImages'])
  },
  computed: {
    ...mapGetters(['allImages', 'isLoggedIn'])
  },
  created() {
    this.fetchImages();
  }
}
</script>

<style scoped>
  .image-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }

  img {
    max-width: 100%;
    padding: 5px;
  }

</style>
