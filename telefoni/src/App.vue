<template>
  <div id="app">
    <div id="nav" style="font-size: 1.5rem">
        <b-navbar type="dark" variant="dark">
          <b-navbar-nav>
       <router-link to="/" > <p size="20px">Home</p> </router-link>
        <router-link to="/edit"> Edit </router-link>
          </b-navbar-nav>
        </b-navbar>
    </div>
    <router-view/>
  </div>
</template>


<script>
import { mapActions } from 'vuex';
export default{
   name: 'App',

  methods: {
    ...mapActions(['load_messages'])
  },

  mounted: function (){
     this.load_messages();
  }

}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
