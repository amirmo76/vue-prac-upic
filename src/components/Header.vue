<template>
  <div class="ui secondary pointing menu">
    <router-link to="/" class="active item" >
      Upic | A Place For Your Pictures
    </router-link>
    <div class="right menu">   
      <div class="horizontal" v-if="isLoggedIn">
        <router-link to="/" class="ui item">
          Gallery
        </router-link>  
        <router-link to="/upload" class="ui item">
          Upload
        </router-link> 
        <a class="ui item" @click="logout">
          Logout
        </a>  
      </div>
      <a class="ui item" @click="login" v-else>
        Login
      </a>  
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Header',
  methods: {
    ...mapActions(['login', 'logout'])
  },
  computed: {
    ...mapGetters(['isLoggedIn'])
  }
}
</script>

<style scoped>
  .horizontal {
    display: flex;
  }
</style>
