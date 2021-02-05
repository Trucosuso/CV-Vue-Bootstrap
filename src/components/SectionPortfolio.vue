<template>
    <section
        id="section-portfolio"
        class="section-portfolio"
    >
        <h2>{{ sectionTitle }}</h2>
        <b-row>
            <b-col
                v-for="(project, index) in portfolio"
                :key="getTitle(index) + getRepoURL(index)"
                cols="12"
                md="6"
                lg="4"
                class="pt-2 pb-2"
            >
                <b-card
                    v-b-modal="`modal-${project.title + project.repoURL}`"
                    :img-src="getImages(index)[0]"
                    :img-alt="getTitle(index)"
                    :title="getTitle(index)"
                    class="h-100"
                    no-body
                >
                    <SectionPortfolioModal
                        :project="project"
                        :english="english"
                        :spanish="spanish"
                    />
                    <b-card-body class="d-flex justify-content-around align-items-center pb-2">
                        <h4 class="card-title">
                            {{ getTitle(index) }}
                        </h4>
                        <b-icon
                            icon="plus-circle-fill"
                            variant="main"
                            class="h4"
                        />
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>
    </section>
</template>

<script>
import SectionPortfolioModal from "./SectionPortfolioModal.vue";

export default {
    name: "SectionPortfolio",

    components: {
        SectionPortfolioModal,
    },

    props: {
        portfolio: {
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
            return "Portfolio";
        },
    },

    mounted() {},

    methods: {
        getTitle: function (index) {
            return this.portfolio[index].title;
        },
        getDescription: function (index) {
            return this.portfolio[index].description;
        },
        getImages: function (index) {
            return this.portfolio[index].images;
        },
        getTags: function (index) {
            return this.portfolio[index].tags;
        },
        getProductionURL: function (index) {
            return this.portfolio[index].productionURL;
        },
        getRepoURL: function (index) {
            return this.portfolio[index].repoURL;
        },
    },
};
</script>

<style scoped>
.section-portfolio {
}
</style>
