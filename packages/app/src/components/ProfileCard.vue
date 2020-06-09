<template>
<v-container fluid>
  <v-row>
    <v-card width="1000" height="300">
      <v-row align=center>
        <v-col md="auto">
          <v-icon x-large>mdi-account</v-icon>
        </v-col>
        <v-col>
          <v-card-text>
            <p class="display-1 text--primary">Username</p>
          </v-card-text>
          <v-card-text>
            <p>User info</p>
          </v-card-text>
        </v-col>
      </v-row>
      <v-card-text>
        <p class="text--primary">Area of Expertise</p>
      </v-card-text>
    </v-card>

    <v-card width="300">
      <div align="center">
        <v-progress-circular :rotate="-90" :size="100" :width="15" :value="75" color="#8be4f0">75</v-progress-circular>
        <v-card-text></v-card-text>
      </div>
    </v-card>
  </v-row>
</v-container>
</template>
<script>
export default {};
</script>