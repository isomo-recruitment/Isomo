<template>
  <v-app>
    <app-bar></app-bar>
    <v-parallax src="../assets/homebackground.jpg" :height="windowHeight">
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 style="font-size:70px; letter-spacing:2px; ">
            Strive for Equality
          </h1>
          <v-btn rounded color="#8be4f0" large>Join Us</v-btn>
        </v-col>
      </v-row>
    </v-parallax>
  </v-app>
</template>

<script>
import AppBar from "../components/AppBar";
export default {
  computed: {
    windowHeight() {
      return window.innerHeight;
    },
  },
  components: {
    AppBar,
  },
};
</script>
