<template>
    <footer class="the-footer bg-main pt-4 pb-4 mt-5">
        <p class="m-0 text-center">
            {{ footerText }}
        </p>
    </footer>
</template>

<script>
export default {
    name: "TheFooter",
    props: {
        english: {
            type: Boolean,
            default: true,
        },
        spanish: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {};
    },
    computed: {
        footerText: function () {
            if (this.spanish) {
                return "Plantilla hecha por Jesús L. Pinzolas. 2021";
            }
            return "Template made by Jesús L. Pinzolas. 2021";
        },
    },
    mounted() {},
    methods: {},
};
</script>

<style scoped>
.the-footer {
    background-color: var(--text-title-color);
    color: var(--main-color);
    font-size: 0.9rem;
}
</style>
