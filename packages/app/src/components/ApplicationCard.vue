<template>
  <v-container>
    <v-row justify="center">
      <v-card width="900" height="420">
        <v-tabs>
          <v-tab>Applications</v-tab>
          <v-tab>Blogs</v-tab>
          <v-tab>Projects</v-tab>
          <v-tab-item>
            <v-row justify="end">
              <v-col cols="2" class="mr-2 mt-2">
                <v-menu open-on-hover bottom offset-y>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn color="primary" dark v-bind="attrs" v-on="on">Dropdown</v-btn>
                  </template>

                  <v-list>
                    <v-list-item>
                      <v-list-item-title>Filter</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </v-col>
            </v-row>

            <v-container>
              <v-row justify="center" align="center" dense>
                <v-col>
                  <detail-card status="rejected"></detail-card>
                </v-col>
                <v-col>
                  <detail-card status="pending"></detail-card>
                </v-col>
                <v-col>
                  <detail-card status="accepted"></detail-card>
                </v-col>
                <v-col>
                  <detail-card status="pending"></detail-card>
                </v-col>
              </v-row>
            </v-container>
          </v-tab-item>
          <v-tab-item>
            <perfect-scrollbar>
              <blog-post header="First Blog Post"></blog-post>
              <blog-post header="Second Blog Post"></blog-post>
              <blog-post header="Third Blog Post"></blog-post>
              <blog-post header="Fourth Blog Post"></blog-post>
              <blog-post header="Fifth Blog Post"></blog-post>
            </perfect-scrollbar>
          </v-tab-item>
          <v-tab-item>
            <perfect-scrollbar>
              <blog-post header="First project"></blog-post>
              <blog-post header="Second project"></blog-post>
              <blog-post header="Third project"></blog-post>
              <blog-post header="Fourth project"></blog-post>
              <blog-post header="Fifth project"></blog-post>
            </perfect-scrollbar>
          </v-tab-item>
        </v-tabs>
      </v-card>
    </v-row>
  </v-container>
</template>
<script>
import DetailCard from "./DetailCard";
import BlogPost from "./BlogPost";
export default {
  components: {
    DetailCard,
    BlogPost
  }
};
</script>
<style>
.ps {
  height: 330px;
}
</style>