<template>
    <v-row>
        <v-card
            width="200"
            height="300"
            class="center card-style"
            :style="borderColor"
        >
            <v-row>
                <v-col>
                    <h1 class="text-caption font-weight-bold ml-4">
                        May 20th, 2020
                    </h1>
                    <v-row justify="center" class="ma-0">
                        <v-avatar size="80" class="mt-8">
                            <img
                                src="https://w7.pngwing.com/pngs/249/19/png-transparent-google-logo-g-suite-google-guava-google-plus-company-text-logo.png"
                            />
                        </v-avatar>
                    </v-row>
                    <v-row justify="center" class="ma-3">
                        <h1 class="text-body-1">Junior Developer</h1>
                    </v-row>
                    <v-row justify="center" class="ma-2">
                        <h1 class="text-body-2">Seattle, WA</h1>
                    </v-row>
                    <v-row justify="center" class="ma-7">
                        <v-btn rounded small :color="btnColor"> {{ status }}</v-btn>
                    </v-row>
                </v-col>
            </v-row>
        </v-card>
    </v-row>
</template>
<script>
export default {
    props: {
        status: String,
    },
    computed: {
        borderColor() {
            if (this.status === "pending") {
                return "border: 5px solid #FDD60D;";
            } else if (this.status === "accepted") {
                return "border: 5px solid #1DCB19;";
            } else {
                return "border: 5px solid #DB4C3F;";
            }
        },
        btnColor() {
            if (this.status === "pending") {
                return "#FDD60D";
            } else if (this.status === "accepted") {
                return "#1DCB19";
            } else {
                return "#DB4C3F";
            }
        },
    },
};
</script>
<style scoped>
.card-style {
    border-radius: 25px !important;
    background-color: #f2f2f2;
}
</style>
