<template>
    <v-app-bar app color="black" style="opacity: 0.9">
        <v-img src="../assets/logo.png" max-height="40" max-width="40"></v-img>
        <app-bar-btn
            style="font-size:25px"
            text="Isomo"
            disableHover
            routeName="HomePage"
        ></app-bar-btn>
        <v-spacer></v-spacer>
        <app-bar-btn
            text="About"
            link="https://isomo-documentation.netlify.app/"
        ></app-bar-btn>
        <v-divider vertical color="grey"></v-divider>
        <app-bar-btn text="Sign Up" routeName="SignUp"></app-bar-btn>
        <app-bar-btn text="Login"></app-bar-btn>
    </v-app-bar>
</template>
<script>
import AppBarBtn from "./AppBarBtn";
export default {
    components: {
        AppBarBtn,
    },
};
</script>
