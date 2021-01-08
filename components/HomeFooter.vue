<template>
  <footer class="footer bg-black small text-center text-white-50 m-0 p-4">
    <b-container class="mx-auto text-center">
      <b-row class="justify-content-center align-items-center">
        <!-- social icons -->
        <b-col v-for="(social, i) in socials" :key="i">
          <b-avatar size="2rem" :icon="i" variant="dark" :href="social.url" />
        </b-col>
      </b-row>
      <b-row class="p-0 mx-0 my-3">
        <b-col class="text-center">
          Copyright © (Me)shach Jackson 2021. All Rights Reserved.
        </b-col>
      </b-row>
    </b-container>
  </footer>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      socials: (state) => state.socials,
    }),
  },
};
</script>
