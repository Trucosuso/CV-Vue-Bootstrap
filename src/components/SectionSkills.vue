<template>
    <section
        id="section-skills"
        class="section-skills"
    >
        <h2>{{ sectionTitle }}</h2>
        <div
            v-for="(group, index) in skills"
            :key="getGroupName(index)"
        >
            <h4 class="mt-3 mb-1">
                {{ getGroupName(index) }}
            </h4>
            <div
                v-for="skill in getGroupItems(index)"
                :key="skill.name"
            >
                <p class="mb-0">
                    {{ skill.name }}
                </p>
                <b-progress
                    :value="skill.percentage"
                    max="100"
                    height="0.4rem"
                    class="mb-2"
                    :variant="getVariant(index)"
                />
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "SectionSkills",
    props: {
        skills: {
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
                return "Habilidades profesionales";
            }
            return "Working skills";
        },
    },
    mounted() {},
    methods: {
        getGroupName: function (index) {
            return this.skills[index].groupName;
        },
        getGroupItems: function (index) {
            return this.skills[index].groupItems;
        },
        getVariant: function (index) {
            if (index % 2 == 0) {
                return "alternative";
            }
            return "main";
        },
    },
};
</script>

<style scoped>
.section-skills h4 {
    font-family: var(--secondary-font);
    font-variant: small-caps;
    font-weight: 200;
    font-size: 1.7rem;
}

.section-skills h5 {
    margin-bottom: 0.2rem;
    font-size: 1rem;
}
</style>
