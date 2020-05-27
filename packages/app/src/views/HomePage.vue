<template>
  <v-app>
    <app-bar></app-bar>
    <v-content>
      <v-parallax src="../assets/homebackground.jpg" height="500">
        <v-row align="center" justify="center">
          <v-col class="text-center" cols="12">
            <h1 style="font-size:50px; letter-spacing:2px; ">Strive for Equality</h1>
            <v-btn rounded color="#8be4f0">Join Us</v-btn>
          </v-col>
        </v-row>
      </v-parallax>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
    </v-content>
  </v-app>
</template>

<script>
import AppBar from "../components/AppBar"
export default {
    components:{
        AppBar,
    }
};
</script>
