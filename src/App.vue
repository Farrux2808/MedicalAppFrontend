<template>
    <div class="vue-tempalte">
    <!-- Navigation -->
    <nav class="navbar shadow bg-white rounded justify-content-between flex-nowrap flex-row fixed-top">
      <div class="container">
        <ul class="nav navbar-nav flex-row float-right">
          <li class="nav-item">
            <router-link class="btn btn-outline-primary" to="/doctors">Doctors</router-link>
          </li>
        </ul>
        <ul class="nav navbar-nav flex-row float-right" v-if="!isLogin">
          <li class="nav-item">
            <router-link class="nav-link pr-3" to="/">Sign in</router-link>
          </li>
          <li class="nav-item">
            <router-link class="btn btn-outline-primary" to="/signup">Sign up</router-link>
          </li>
        </ul>
        <ul class="nav navbar-nav flex-row float-right" v-if="isLogin">
          <li class="nav-item" v-on:click="logOut()">
            Log out
          </li>
        </ul>
      </div>
    </nav>

    <!-- Main -->
    <div class="App" v-if="!isLogin">
        <div class="inner-block">
          <router-view />
        </div>
    </div>
    <div v-if="isLogin">
        <div class="inner-block2">
          <router-view />
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    isLogin : JSON.parse(localStorage.getItem('doctor'))
  }),
  methods:{
    getData() {
      return JSON.parse(localStorage.getItem('doctor'));
    },
    logOut() {
      localStorage.clear();
      this.$router.push('/')
    }
  }
  
}
</script>