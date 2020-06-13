<template>
    <v-container>
        <v-row>
            <v-card width="900" height="300">
                <v-row justify="start" class="ma-0">
                    <v-card width="350" elevation="0" class="ma-3">
                        <v-row class="ma-0">
                            <v-avatar class="ma-3" size="80">
                                <v-img
                                    src="https://cdn.vuetifyjs.com/images/cards/halcyon.png"
                                ></v-img>
                            </v-avatar>
                            <div>
                                <v-card-title
                                    class="headline pb-0"
                                    style="padding-top: 10px"
                                >
                                    Username
                                </v-card-title>
                                <v-card-title class="headline-1 pt-0">
                                    Software Engineer
                                </v-card-title>
                                <v-card-subtitle>
                                    Ontario, CA
                                </v-card-subtitle>
                            </div>
                        </v-row>
                    </v-card>
                    <v-spacer></v-spacer>
                    <v-card width="250" height="300">
                        <v-row>
                            <v-col style="text-align:center">
                                <h3 class="mb-7">Profile Completion</h3>
                                <v-progress-circular
                                    :rotate="-90"
                                    :size="150"
                                    :width="20"
                                    :value="75"
                                    color="#8be4f0"
                                    class="mb-5"
                                    style="font-size: 30px"
                                >
                                    75
                                </v-progress-circular>
                                <h4 class="ma-3" style="color:grey">
                                    Upload your resume
                                </h4>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-row>
            </v-card>
        </v-row>
    </v-container>
</template>
<script>
export default {};
</script>
