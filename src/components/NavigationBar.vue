<template>
    <b-navbar
        class="navigation-bar"
        toggleable="lg"
        type="light"
        variant="main"
    >
        <b-navbar-brand class="navbar-brand m-0">
            {{ fullName }}
        </b-navbar-brand>

        <b-button
            variant="main"
            type="light"
            class="changeLanguageButton"
            @click="changeLanguage"
        >
            {{ otherLanguage }}
        </b-button>

        <b-navbar-toggle target="nav-collapse">
            <template #default="{ expanded }">
                <b-icon
                    v-if="expanded"
                    icon="chevron-bar-up"
                />
                <b-icon
                    v-else
                    icon="chevron-bar-down"
                />
            </template>
        </b-navbar-toggle>
        <b-collapse
            id="nav-collapse"
            is-nav
        >
            <b-navbar-nav v-b-scrollspy>
                <b-nav-item href="#section-personal-data">
                    {{ sectionNames.personalData }}
                </b-nav-item>
                <b-nav-item
                    v-if="experience.length != 0"
                    href="#section-experience"
                >
                    {{ sectionNames.experience }}
                </b-nav-item>
                <b-nav-item
                    v-if="education.length != 0"
                    href="#section-education"
                >
                    {{ sectionNames.education }}
                </b-nav-item>
                <b-nav-item href="#section-skills">
                    {{ sectionNames.skills }}
                </b-nav-item>
                <b-nav-item
                    v-if="languages.length != 0"
                    href="#section-languages"
                >
                    {{ sectionNames.languages }}
                </b-nav-item>
                <b-nav-item href="#section-portfolio">
                    {{ sectionNames.portfolio }}
                </b-nav-item>
                <b-nav-item href="#section-interpersonal-skills">
                    {{ sectionNames.interpersonalSkills }}
                </b-nav-item>
                <b-nav-item href="#section-contact">
                    {{ sectionNames.contactForm }}
                </b-nav-item>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<script>
export default {
    name: "NavigationBar",
    props: {
        cvData: {
            type: Object,
            default: function () {
                return null;
            },
        },
        sectionNames: {
            type: Object,
            default: function () {
                return {};
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
        fullName: function () {
            return (
                this.cvData.en.personalData.name +
                " " +
                this.cvData.en.personalData.surname
            );
        },
        otherLanguage: function () {
            if (this.spanish) {
                return "Change language";
            }
            return "Cambiar idioma";
        },
        experience: function () {
            if (this.cvData === null) {
                return undefined;
            }
            if (this.spanish) {
                return this.cvData.es.experience;
            } else {
                return this.cvData.en.experience;
            }
        },
        education: function () {
            if (this.cvData === null) {
                return undefined;
            }
            if (this.spanish) {
                return this.cvData.es.education;
            } else {
                return this.cvData.en.education;
            }
        },
        languages: function () {
            if (this.cvData === null) {
                return undefined;
            }
            if (this.spanish) {
                return this.cvData.es.languages;
            } else {
                return this.cvData.en.languages;
            }
        },
    },
    mounted() {},
    methods: {
        changeLanguage: function () {
            this.$emit("changeLanguage");
        },
    },
};
</script>

<style scoped>
.navbar-brand {
    font-size: 0.9rem;
    font-weight: bold;
}

.changeLanguageButton {
    font-size: 0.7rem;
    border: 1px solid rgba(0, 0, 0, 0.1);
}

@media (min-width: 992px) {
    .navigation-bar {
        text-align: center;
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 15vw;
        height: 100vh;
    }

    .navigation-bar .navbar-collapse {
        display: flex;
        align-items: flex-start;
        flex-grow: 0;
        width: 100%;
    }

    .navigation-bar .navbar-nav {
        flex-direction: column;
        width: 100%;
        height: auto;
    }
}
</style>
