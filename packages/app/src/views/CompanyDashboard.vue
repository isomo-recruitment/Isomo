<template>
  <v-app>
    <v-content style="background-image: linear-gradient(white, #8be4f0);">
          <user-app-bar/>
      <v-row>
        <v-col>
          <company-profile />
          <company-card />
        </v-col>
      </v-row>
    </v-content>
  </v-app>
</template>
<script>
import UserAppBar from "../components/UserAppBar.vue";
import CompanyProfile from "../components/CompanyProfile.vue";
import CompanyCard from "../components/CompanyCard.vue";
export default {
  components: {
    UserAppBar,
    CompanyProfile,
    CompanyCard,
  }
};
</script>
<style scoped>
</style>