<template>
    <p
        :class="
            !hovered || disableHover
                ? ['btn-idle', 'noselect', 'defalt-style']
                : ['btn-hover', 'noselect', 'defalt-style']
        "
        @mouseover="hovered = true"
        @mouseleave="hovered = false"
        @click="switchRoute"
    >
        {{ text }}
    </p>
</template>

<script>
export default {
    props: {
        text: String,
        disableHover: Boolean,
        routeName: String
    },
    methods: {
        switchRoute(){
            this.$router.push({name: this.routeName})
        }
    },
    data() {
        return {
            hovered: false,
        };
    },
};
</script>

<style scoped>
.btn-idle {
    color: white;
}
.btn-hover {
    color: #8be4f0;
}
.noselect {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
.defalt-style {
    margin: 0px 15px;
    font-weight: bold;
    cursor: pointer;
}
</style>
