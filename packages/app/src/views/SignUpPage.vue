<template>
  <v-app>
    <app-bar></app-bar>
    <v-parallax src="../assets/gradient-background.jpg" :height="windowHeight">
      <v-row align="center">
        <v-col cols="6">
          <div style="text-align: center">
            <h1 style="margin: 30px 0px; font-size: 45px">
              Who are you?
            </h1>
            <div style="margin: 30px 0px">
              <v-btn width="250" x-large rounded elevation="10" color="#8be4f0"
                >Applicant</v-btn
              >
            </div>
            <div style="margin: 30px 0px">
              <v-btn width="250" x-large rounded elevation="10" color="#8be4f0"
                >Recruiter</v-btn
              >
            </div>
            <div style="margin: 30px 0px">
              <v-btn width="250" x-large rounded elevation="10" color="#8be4f0"
                >Company</v-btn
              >
            </div>
            <div style="margin: 30px 0px">
              <app-bar-btn text="If you have an account" routeName="Login">
              </app-bar-btn>
            </div>
          </div>
        </v-col>
        <v-col cols="5">
          <div style="text-align: center">
            <v-img src="../assets/robot-background.png" contain />
          </div>
        </v-col>
      </v-row>
    </v-parallax>
  </v-app>
</template>

<script>
import AppBar from "../components/AppBar";
import AppBarBtn from "../components/AppBarBtn";
export default {
  computed: {
    windowHeight() {
      return window.innerHeight;
    },
  },
  components: {
    AppBar,
    AppBarBtn
  },
};
</script>
