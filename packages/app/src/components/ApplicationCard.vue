<template>
  <v-card width="1000" height="450">
    <v-row>
      <v-card-text>
        <v-btn>Applications</v-btn>
        <v-btn>Blog</v-btn>
        <v-btn>Filter</v-btn>
      </v-card-text>
    </v-row>
    <v-container>
    <v-row justify="center" align="center">
      <v-col>
      <detail-card></detail-card>
      </v-col>
    </v-row>
    </v-container>
  </v-card>
</template>
<script>
import DetailCard from "./DetailCard";
export default {
  components: {
    DetailCard
  }
};
</script>