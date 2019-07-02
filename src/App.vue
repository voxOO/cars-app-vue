<template>
    <div>
        <nav class="navbar navbar-default">
            <div class="container-fluid">
                <div class="navbar-header">
                    <p class="navbar-brand" href="#">Cars App</p>
                </div>
                <ul class="nav navbar-nav">
                    <router-link to="/cars">Cars</router-link>
                </ul>
            </div>
        </nav>
        <router-view />
    </div>
</template>

<script>
import AppCars from './components/AppCars.vue'

export default {
  name: 'app',
  components: {
    AppCars
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
