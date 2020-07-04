<template>
  <v-container>
    <v-row justify="center">
      <v-card width="900" height="420">
        <v-tabs>
          <v-tab>Applications</v-tab>
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
                  <company-detail-card />
                </v-col>
                <v-col>
                  <company-detail-card />
                </v-col>
                <v-col>
                  <company-detail-card />
                </v-col>
                <v-col>
                  <company-detail-card />
                </v-col>
              </v-row>
            </v-container>
          </v-tab-item>
        </v-tabs>
      </v-card>
    </v-row>
  </v-container>
</template>
<script>
import CompanyDetailCard from "./CompanyDetailCard";
export default {
  components: {
    CompanyDetailCard,
  }
};
</script>
<style>
.ps {
  height: 330px;
}
</style>