<template>
    <section
        id="section-contact"
        class="section-contact"
    >
        <h2>{{ sectionTitle }}</h2>
        <b-form class="">
            <b-form-row>
                <b-form-group
                    :label="nameLabel"
                    label-for="name"
                    class="col-12 col-md-6"
                >
                    <b-form-input
                        id="name"
                        :placeholder="nameLabel"
                        required
                    />
                </b-form-group>

                <b-form-group
                    :label="emailLabel"
                    label-for="email"
                    class="col-12 col-md-6"
                >
                    <b-form-input
                        id="email"
                        type="email"
                        :placeholder="emailLabel"
                        required
                    />
                </b-form-group>
            </b-form-row>

            <b-form-row class="p-1">
                <b-form-textarea
                    id="textarea"
                    :placeholder="textAreaPlaceholder"
                    rows="3"
                    max-rows="6"
                    class="col mb-3"
                />
            </b-form-row>

            <b-form-row>
                <b-col class="d-flex justify-content-center">
                    <b-button
                        type="submit"
                        variant="main"
                    >
                        {{ submitText }}
                    </b-button>
                </b-col>
            </b-form-row>
        </b-form>
    </section>
</template>

<script>
export default {
    name: "SectionContact",
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
        sectionTitle: function () {
            if (this.spanish) {
                return "Formulario de contacto";
            }
            return "Contact Form";
        },
        nameLabel: function () {
            if (this.spanish) {
                return "Nombre";
            }
            return "Name";
        },
        emailLabel: function () {
            if (this.spanish) {
                return "Email";
            }
            return "Email address";
        },
        textAreaPlaceholder: function () {
            if (this.spanish) {
                return "Introduce tu mensaje...";
            }
            return "Type your message...";
        },
        submitText: function () {
            if (this.spanish) {
                return "Enviar";
            }
            return "Submit";
        },
    },
    mounted() {},
    methods: {},
};
</script>

<style scoped>
.section-contact input::placeholder,textarea::placeholder {
    color: var(--text-light-color);
}
</style>
