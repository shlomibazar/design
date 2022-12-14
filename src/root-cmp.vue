<template>
  <section>
    <!-- <app-header /> -->
    <router-view />
    <!-- <app-footer /> -->
  </section>
</template>

<script>
// import appHeader from "./cmps/app-header.vue";
// import appFooter from "./cmps/app-footer.vue";

export default {
  created() {
    console.log("Vue App created");

  },
  components: {
    // appHeader,
    // appFooter,
  },
};
</script>
