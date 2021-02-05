<template>
    <section
        id="section-personal-data"
        class="section-personal-data"
    >
        <!-- Name and image -->
        <b-row align-v="center">
            <b-col
                cols="6"
                class="text-right"
            >
                <h1 class="name text-right">
                    {{ name }} <span class="surname">{{ surname }}</span>
                </h1>
            </b-col>
            <b-col
                cols="6"
                class="pr-4 d-flex justify-content-center"
            >
                <b-img
                    :src="imgURL"
                    fluid
                    :alt="name + ' ' + surname"
                    rounded="circle"
                    class="border-main profile-picture"
                />
            </b-col>
        </b-row>

        <!-- Contact info -->
        <b-row>
            <b-col
                cols="12"
                class="contactInfo"
            >
                <p class="mb-0">
                    {{ address }}
                </p>
                <p>
                    {{ phoneNumber }} · <a :href="'mailto:' + email"> {{ email }} </a>
                </p>
            </b-col>
        </b-row>

        <!-- Description -->
        <b-row>
            <b-col cols="12">
                <p>{{ description }}</p>
            </b-col>
        </b-row>

        <!-- Social networks -->
        <b-row class="justify-content-around">
            <b-col
                v-for="socialNetwork in socialNetworks"
                :key="socialNetwork.name"
                cols="auto"
            >
                <a
                    :href="socialNetwork.link"
                    target="_blank"
                    class="socialIcon"
                >
                    <b-icon
                        :icon="socialNetwork.name"
                        variant="alternative"
                    />
                    {{ socialNetwork.name | capitalize }}
                </a>
            </b-col>
        </b-row>
    </section>
</template>

<script>
export default {
    name: "SectionPersonalData",

    filters: {
        capitalize: function (value) {
            if (!value) return "";
            value = value.toString();
            return value.charAt(0).toUpperCase() + value.slice(1);
        },
    },

    props: {
        personalData: {
            type: Object,
            default: function () {
                return {
                    name: "",
                    surname: "",
                    picture: "",
                    phone: "",
                    email: "",
                    birthdate: "",
                    description: "",
                    socialNetworks: [],
                };
            },
        },
    },

    data() {
        return {};
    },

    computed: {
        address: function () {
            return this.personalData.address;
        },
        name: function () {
            return this.personalData.name;
        },
        surname: function () {
            return this.personalData.surname;
        },
        imgURL: function () {
            return this.personalData.picture;
        },
        phoneNumber: function () {
            return this.personalData.phone;
        },
        email: function () {
            return this.personalData.email;
        },
        description: function () {
            return this.personalData.description;
        },
        socialNetworks: function () {
            return this.personalData.socialNetworks;
        },
    },

    mounted() {},

    methods: {},
};
</script>

<style scoped>
.name {
    font-family: var(--secondary-font), var(--alternate-font);
    font-weight: 700;
    font-size: 2.3rem;
    line-height: 2rem;
    font-variant: small-caps;
    margin: 0;
}

.surname {
    color: var(--alternative-color);
}

.profile-picture {
    max-height: 11rem;
}

.contactInfo {
    color: var(--text-muted);
    font-variant: small-caps;
}

.contactInfo a {
    text-decoration: none;
    font-family: var(--secondary-font), var(--alternate-font);
    font-weight: 700;
    color: var(--alternative-color);
}

.socialIcon {
    text-decoration: none;
    color: var(--text-color);
    font-family: var(--secondary-font), var(--alternate-font);
    font-weight: 600;
    font-size: 1.2rem;
}
</style>
