<template>
    <v-container>
        <v-row justify="center">
            <v-card width="900" height="420">
                <v-row class="ma-0 pl-5 pt-1">
                    <v-col>
                        <v-tabs>
                            <v-tab>Applications</v-tab>
                            <v-tab>Blogs</v-tab>
                        </v-tabs>
                    </v-col>
                    <v-col cols="2" class="mr-2 mt-2">
                        <v-menu open-on-hover bottom offset-y>
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn color="primary" dark v-bind="attrs" v-on="on">
                                    Dropdown
                                </v-btn>
                            </template>

                            <v-list>
                                <v-list-item>
                                    <v-list-item-title>
                                        Filter
                                    </v-list-item-title>
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
            </v-card>
        </v-row>
    </v-container>
</template>
<script>
import DetailCard from "./DetailCard";
export default {
    components: {
        DetailCard,
    },
};
</script>
