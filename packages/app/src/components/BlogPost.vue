<template>
<v-row justify="center" class="ma-1">
    <v-card width="800"
            height="110">
            <v-row class='ml-1'>
                <v-col >
                    <h2>{{header}}</h2>
                    <p>Summary</p>
                </v-col>
                <v-col lg="3">
                    <p>2020-06-27 14:31</p>
                </v-col>
            </v-row>
    </v-card>
</v-row>
</template>
<script>
export default {
    props: {
        header: String,
    },
    
}
</script>