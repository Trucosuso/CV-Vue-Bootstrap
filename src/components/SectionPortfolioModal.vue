<template>
    <b-modal
        :id="`modal-${project.title + project.repoURL}`"
        :title="project.title"
        centered
        body-class="p-0"
        size="lg"
    >
        <b-carousel
            :interval="4000"
            fade
            controls
            indicators
        >
            <!-- Slides with image only -->
            <b-carousel-slide
                v-for="image in project.images"
                :key="image"
                :img-src="image"
            />
        </b-carousel>

        <div class="p-3">
            <p>{{ project.description }}</p>
            <BaseTagGroup :tags="project.tags">
                {{ technologiesText }}
            </BaseTagGroup>
        </div>

        <div
            slot="modal-footer"
            class="w-100 d-flex flex-row justify-content-between"
        >
            <b-button
                variant="main"
                target="_blank"
                :href="project.repoURL"
            >
                <b-icon-github v-if="isGithub" />
                {{ repoButtonText }}
            </b-button>
            <b-button
                variant="main"
                target="_blank"
                type="light"
                :href="project.productionURL"
            >
                {{ liveVersionButtonText }}
            </b-button>
        </div>
    </b-modal>
</template>

<script>
import BaseTagGroup from "./BaseTagGroup.vue";
export default {
    name: "SectionPortfolioModal",
    components: { BaseTagGroup },
    props: {
        project: {
            type: Object,
            default: function () {
                return {
                    title: "",
                    description: "",
                    images: [],
                    tags: [],
                    productionURL: "",
                    repoURL: "",
                };
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
        technologiesText: function () {
            if (this.spanish) {
                return "Tecnologías usadas: ";
            }
            return "Technologies used: ";
        },
        repoButtonText: function () {
            if (this.spanish) {
                return "Repositorio";
            }
            return "Repository";
        },
        liveVersionButtonText: function () {
            if (this.spanish) {
                return "Vensión en línea";
            }
            return "Live version";
        },
        isGithub: function () {
            if (this.project.repoURL.indexOf("github") !== -1) {
                return true;
            }
            return false;
        },
    },
    mounted() {},
    methods: {},
};
</script>

<style scoped>
.section-portfolio-modal {
}
</style>
