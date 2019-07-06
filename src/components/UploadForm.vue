<template>
  <div class="dropper">
    <input type="file" multiple accept="image/*" @change="uploadImages($event.target.files)">
    <span>Drag Files Here!</span>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'UploadForm',
  methods: {
    ...mapActions(['uploadImages'])
  }
}
</script>

<style scoped>
  .dropper {
    height: 30vh;
    border: 2px dashed grey;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    border-radius: 10px;
  }

  .dropper:hover {
    cursor: pointer;
    background-color: #eee;
  }

  input {
   width: 100%;
   height: 30vh;
   position: absolute;
   top: 0;
   left: 0; 
   opacity: 0;
  }
</style>
