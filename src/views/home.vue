<template>
  <section class="home-container flex">
      <app-header/>
      <imgUploader/>
      
      <advantage/>
      <sub-advantage/>
      
      <section class="body-container">
     
      </section>


    </section>

    <app-footer />
</template>

<script>
import appHeader from "../cmps/app-header.vue"
import appFooter from "../cmps/app-footer.vue";
import imgUploader from "../cmps/img-uploader.vue";
import advantage from "../cmps/advantage.vue";
import subAdvantage from "../cmps/sub-advantage.vue";

export default {
  name: 'home',
  data() {
     },
  computed: {
  },
  created() {
  },
  methods: {
   },
  components: {
    // trustedby,
    appHeader,
    appFooter,
    // imgUploader2,
    imgUploader,
    advantage,
    subAdvantage,

  },
}
</script>
