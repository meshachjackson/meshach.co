<template>
  <b-container fluid="lg" class="my-auto">
    <b-jumbotron class="text-center">
      <h1>Coming soon.</h1>
    </b-jumbotron>
    <nuxt-content :document="homePageContent" />
  </b-container>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const homePageContent = await $content("home").fetch();
    return { homePageContent };
  },
};
</script>
