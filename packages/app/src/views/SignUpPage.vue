<template>
    <v-app>
        <app-bar></app-bar>
        <v-content>
            <v-row align="center">
                <v-col>
                    <div style="text-align: center">
                        <h1>Who are you?</h1>
                        <div>
                            <v-btn>Applicant</v-btn>
                        </div>
                        <div>
                            <v-btn>Recruiter</v-btn>
                        </div>
                        <div>
                            <v-btn>Company</v-btn>
                        </div>
                    </div>
                </v-col>
                <v-col>
                    <div style="text-align: center">
                        <v-avatar size="600">
                            <img src="../assets/signup-background.jpg" />
                        </v-avatar>
                    </div>
                </v-col>
            </v-row>
        </v-content>
    </v-app>
</template>

<script>
import AppBar from "../components/AppBar";
export default {
    components: {
        AppBar,
    },
};
</script>
