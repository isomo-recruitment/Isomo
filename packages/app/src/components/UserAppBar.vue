<template>
    <v-app-bar app color="black" style="opacity: 0.9">
        <v-img src="../assets/logo.png" max-height="40" max-width="40"></v-img>
        <app-bar-btn
            style="font-size:25px"
            text="Isomo"
            disableHover
            routeName="HomePage"
        ></app-bar-btn>
        <v-autocomplete class="mt-8" dark solo-inverted></v-autocomplete>
        <v-btn class="ml-2" small fab color="#8be4f0">
            <v-icon>mdi-email</v-icon>
        </v-btn>
        <v-btn class="ml-2" small fab color="#FDD60D">
            <v-icon>mdi-account</v-icon>
        </v-btn>
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
