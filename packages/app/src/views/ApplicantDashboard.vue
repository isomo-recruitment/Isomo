<template>
  <v-app>
    <v-content style="background-image: linear-gradient(white, #8be4f0);">
          <user-app-bar/>
      <v-row>
        <v-col>
          <profile-card></profile-card>
          <application-card></application-card>
        </v-col>
      </v-row>
    </v-content>
  </v-app>
</template>
<script>
import UserAppBar from "../components/UserAppBar";
import ProfileCard from "../components/ProfileCard";
import ApplicationCard from "../components/ApplicationCard.vue";
export default {
  components: {
    UserAppBar,
    ProfileCard,
    ApplicationCard,
  }
};
</script>
<style scoped>
</style>