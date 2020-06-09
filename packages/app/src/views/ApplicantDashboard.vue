<template>
  <v-app>
    <v-content>
          <user-app-bar/>
      <v-row>
        <v-col>
          <profile-card></profile-card>
        </v-col>
      </v-row>
    </v-content>
  </v-app>
</template>
<script>
import UserAppBar from "../components/UserAppBar";
import ProfileCard from "../components/ProfileCard";
export default {
  components: {
    UserAppBar,
    ProfileCard
  }
};
</script>
<style scoped>
</style>