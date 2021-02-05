<template>
    <section
        :id="'section-' + type"
        class="section-experience-education"
    >
        <h2>{{ sectionTitle }}</h2>
        <b-row
            v-for="(item, index) in experienceEducation"
            :key="getTitle(index) + getLocation(index)"
            class="item"
        >
            <b-col
                cols="12"
                lg="6"
            >
                <h3>
                    {{ getTitle(index) }}
                    <span v-if="type != 'languages'"> · {{ getRangeDate(index) }} </span>
                </h3>

                <p>{{ getLocation(index) }}</p>
                <ul>
                    <li
                        v-for="(info, indexInfo) in getMoreInfo(index)"
                        :key="indexInfo"
                    >
                        {{ info }}
                    </li>
                </ul>
            </b-col>
        </b-row>
    </section>
</template>

<script>
export default {
    name: "SectionExperienceEducation",

    props: {
        experienceEducation: {
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
        type: {
            type: String,
            default: "experience",
            validator: function (value) {
                return (
                    ["experience", "education", "languages"].indexOf(value) !==
                    -1
                );
            },
        },
    },

    data() {
        return {};
    },

    computed: {
        sectionTitle: function () {
            switch (this.type) {
                case "experience":
                    if (this.spanish) {
                        return "Experiencia profesonal";
                    }
                    return "Experience";
                case "education":
                    if (this.spanish) {
                        return "Educación";
                    }
                    return "Education";
                default:
                    if (this.spanish) {
                        return "Idiomas";
                    }
                    return "Languages";
            }
        },
    },

    mounted() {},

    methods: {
        getTitle: function (index) {
            return this.experienceEducation[index].title;
        },
        getLocation: function (index) {
            return this.experienceEducation[index].location;
        },
        getRangeDate: function (index) {
            return (
                this.experienceEducation[index].startDate +
                " - " +
                this.experienceEducation[index].endDate
            );
        },
        getMoreInfo: function (index) {
            return this.experienceEducation[index].moreInfo;
        },
    },
};
</script>

<style scoped>
.item h3 {
    font-family: var(--secondary-font);
    font-variant: small-caps;
    font-weight: 200;
    font-size: 1.7rem;
}

.item span {
    font-family: inherit;
    font-variant: inherit;
    font-weight: inherit;
    font-size: 1.2rem;
    color: var(--text-alternative-color);
}
</style>
