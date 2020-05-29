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
        routeName: String,
        link: String,
    },
    methods: {
        switchRoute() {
            if (!this.link) {
                this.$router.push({ name: this.routeName });
            } else {
                window.open(
                    this.link,
                    "_blank" // <- This is what makes it open in a new window.
                );
            }
        },
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
