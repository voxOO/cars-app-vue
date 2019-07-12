<template>
    <div>
        <nav class="navbar navbar-default">
            <div class="container-fluid">
                <div class="navbar-header">
                    <p class="navbar-brand" href="#">Cars App</p>
                </div>
                <ul class="nav">
                    <li class="nav-item"><router-link  class='btn btn-primary nav-link' to="/cars">Cars</router-link></li>
                    <li class="nav-item"><router-link  class='btn btn-primary nav-link' to="/add">Add Car</router-link></li>
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

li {
  margin-right: 3px;
}

</style>
