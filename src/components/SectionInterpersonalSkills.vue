<template>
    <section
        id="section-interpersonal-skills"
        class="section-interpersonal-skills"
    >
        <h2>{{ sectionTitle }}</h2>
        <BaseTagGroup :tags="interpersonalSkills" />
    </section>
</template>

<script>
import BaseTagGroup from "./BaseTagGroup.vue";
export default {
    name: "SectionInterpersonalSkills",
    components: { BaseTagGroup },
    props: {
        interpersonalSkills: {
            type: Array,
            default: function () {
                return [];
            },
        },
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
        sectionTitle: function () {
            if (this.spanish) {
                return "Habilidades interpersonales";
            }
            return "Interpersonal Skills";
        },
    },
    mounted() {},
    methods: {},
};
</script>

<style scoped>
.section-interpersonal-skills {
}
</style>
