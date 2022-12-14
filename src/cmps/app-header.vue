<template>
    <header class="flex main-container">
      <div>
        <router-link to="/" class="logo">
          <div class="top-logo main-logo flex" >
            <img src="../assets/images/logo.svg" alt="logo" class ="logo-image">
          </div>
        </router-link>
      </div>
      <nav class="flex nav-bar-links2">
        <section class="nav-links2 flex">
          <router-link class="nav-btn" to="/">Features</router-link>
          <router-link class="nav-btn" to="/">Team</router-link>
          <router-link class="nav-btn" to="/">Sign In</router-link>
        </section>
      </nav>
    </header>

</template>
<script>

export default {
  data() {
    return {


    };
  },
  created() {

  },
  destroyed() {
  },

  components: {
  },
  methods: {
  },

  computed: {

  },
}
</script>
