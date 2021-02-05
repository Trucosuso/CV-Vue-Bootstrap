<template>
    <div id="app">
        <transition name="fade">
            <NavigationBar
                v-if="cvData"
                :cv-data="cvData"
                :section-names="sectionNames"
                :english="en"
                :spanish="es"
                @changeLanguage="changeLanguage"
            />
        </transition>
        <transition name="fade">
            <b-container
                v-if="cvData"
                id="container"
            >
                <SectionPersonalData
                    :personal-data="personalData"
                    class="mt-2 mt-lg-3"
                />
                <BaseSectionDivider />
                <SectionExperienceEducation
                    v-if="experience.length != 0"
                    :experience-education="experience"
                    :english="en"
                    :spanish="es"
                    type="experience"
                />
                <BaseSectionDivider v-if="experience.length != 0" />
                <SectionExperienceEducation
                    v-if="education.length != 0"
                    :experience-education="education"
                    :english="en"
                    :spanish="es"
                    type="education"
                />
                <BaseSectionDivider v-if="education.length != 0" />
                <SectionSkills
                    :skills="skills"
                    :english="en"
                    :spanish="es"
                />
                <BaseSectionDivider />
                <SectionExperienceEducation
                    v-if="languages.length != 0"
                    :experience-education="languages"
                    :english="en"
                    :spanish="es"
                    type="languages"
                />
                <BaseSectionDivider v-if="languages.length != 0" />
                <SectionPortfolio
                    v-if="portfolio.length != 0"
                    :portfolio="portfolio"
                    :english="en"
                    :spanish="es"
                />
                <BaseSectionDivider v-if="portfolio.length != 0" />
                <SectionInterpersonalSkills
                    v-if="interpersonalSkills.length != 0"
                    :interpersonal-skills="interpersonalSkills"
                    :english="en"
                    :spanish="es"
                />
                <BaseSectionDivider v-if="interpersonalSkills.length != 0" />
                <SectionContact
                    :english="en"
                    :spanish="es"
                />
            </b-container>
        </transition>

        <transition name="fade">
            <TheFooter
                v-if="cvData"
                :english="en"
                :spanish="es"
            />
        </transition>

        <b-container v-if="!cvData">
            <b-row
                align-v="center"
                class="text-center preload"
            >
                <b-col>
                    <b-spinner
                        label="Spinning"
                        variant="main"
                    />
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
import NavigationBar from "./components/NavigationBar.vue";
import SectionPersonalData from "./components/SectionPersonalData.vue";
import BaseSectionDivider from "./components/BaseSectionDivider.vue";
import SectionExperienceEducation from "./components/SectionExperienceEducation.vue";
import SectionPortfolio from "./components/SectionPortfolio.vue";
import SectionSkills from "./components/SectionSkills.vue";
import SectionInterpersonalSkills from "./components/SectionInterpersonalSkills.vue";
import SectionContact from "./components/SectionContact.vue";
import TheFooter from "./components/TheFooter.vue";

export default {
    name: "App",

    components: {
        NavigationBar,
        SectionPersonalData,
        BaseSectionDivider,
        SectionExperienceEducation,
        SectionPortfolio,
        SectionSkills,
        SectionInterpersonalSkills,
        SectionContact,
        TheFooter,
    },

    data() {
        return {
            cvData: null,
            es: false,
            en: true,
        };
    },

    computed: {
        personalData: function () {
            if (this.cvData === null) {
                return undefined;
            }
            if (this.es) {
                return this.cvData.es.personalData;
            } else {
                return this.cvData.en.personalData;
            }
        },
        experience: function () {
            if (this.cvData === null) {
                return undefined;
            }
            if (this.es) {
                return this.cvData.es.experience;
            } else {
                return this.cvData.en.experience;
            }
        },
        education: function () {
            if (this.cvData === null) {
                return undefined;
            }
            if (this.es) {
                return this.cvData.es.education;
            } else {
                return this.cvData.en.education;
            }
        },
        portfolio: function () {
            if (this.cvData === null) {
                return undefined;
            }
            if (this.es) {
                return this.cvData.es.portfolio;
            } else {
                return this.cvData.en.portfolio;
            }
        },
        skills: function () {
            if (this.cvData === null) {
                return undefined;
            }
            if (this.es) {
                return this.cvData.es.skills;
            } else {
                return this.cvData.en.skills;
            }
        },
        languages: function () {
            if (this.cvData === null) {
                return undefined;
            }
            if (this.es) {
                return this.cvData.es.languages;
            } else {
                return this.cvData.en.languages;
            }
        },
        interpersonalSkills: function () {
            if (this.cvData === null) {
                return undefined;
            }
            if (this.es) {
                return this.cvData.es.interpersonalSkills;
            } else {
                return this.cvData.en.interpersonalSkills;
            }
        },
        sectionNames: function () {
            if (this.cvData === null) {
                return undefined;
            }
            if (this.es) {
                return this.cvData.es.sectionNames;
            } else {
                return this.cvData.en.sectionNames;
            }
        },
    },

    mounted() {
        this.fetchCVData();
    },

    methods: {
        fetchCVData() {
            fetch("cv.json")
                .then((response) => response.json())
                .then((data) => {
                    this.cvData = data;
                })
                .catch((error) => console.log(error));
        },
        changeLanguage() {
            this.es = !this.es;
            this.en = !this.en;
        }
    },
};
</script>

<style>
/* Import fonts form Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700&display=swap');

:root {
    --main-font: "Open Sans";
    --secondary-font: "Titillium Web";
    --alternate-font: sans-serif;
    --font-size: 16px;
    --line-height: 1.6;
    --main-color: rgb(187, 222, 251);
    --alternative-color:rgb(62, 113, 155);
    --main-modal-color: rgba(187, 222, 251, 0.75);
    --muted-color: rgb(237, 255, 255);
    --bg-color: #fff;
    --text-light-color: rgba(110, 110, 110, 0.5);
    --text-color: #6e6e6e;
    --text-title-color: #212121;
    --text-muted: #54585c;
    --text-alternative-color: rgb(62, 113, 155);

}

html {
    font-family: var(--main-font), var(--alternate-font);
    font-size: var(--font-size);
    line-height: var(--line-height);
    color: var(--text-color);
    background-color: var(--bg-color);
}

body {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    color: inherit;
    background-color: inherit;
    overflow-x: hidden;
    overflow-y: scroll;
}

section > h2 {
    font-weight: 700;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    color: var(--text-title-color);
}

#container {
    position: relative;
}

.text-main {
    color: var(--main-color);
}

.bg-main {
    color: var(--text-second-color);
    background-color: var(--main-color);
    border-color: var(--main-color);
}

.btn-main {
    color: var(--text-title-color);
    background-color: var(--main-color);
    border-color: var(--main-color);
}

.border-main {
    border: 1px solid var(--main-color);
}

.text-alternative {
    color: var(--alternative-color);
}

.bg-alternative {
    color: var(--text-second-color);
    background-color: var(--alternative-color);
    border-color: var(--alternative-color);
}

.btn-alternative {
    color: var(--alternative-color);
    background-color: var(--alternative-color);
    border-color: var(--alternative-color);
}

.preload {
    height: 100vh;
}

.preload span {
    height: 3rem;
    width: 3rem;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 3s ease;
}
.fade-enter, .fade-leave-to {
    opacity: 0;
}

.modal-header {
    padding: 0.5rem 1rem;
}

@media (min-width: 992px) {
    #container{
        margin: 0;
        width: 70vw;
        margin-left: 20vw;
    }
}
</style>
