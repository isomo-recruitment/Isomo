<template>
    <v-row>
        <v-card width="200" height="300" class="center card-style" :style="borderColor">
            <v-card-text>
                Job
            </v-card-text>
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
    },
};
</script>
<style scoped>
.card-style {
    border-radius: 25px !important;
    background-color: #F2F2F2
}
</style>
