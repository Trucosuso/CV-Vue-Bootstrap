<template>
    <section class="base-tag-group">
        <p class="m-0">
            <slot />
        </p>
        <span
            v-for="tag in tags"
            :key="tag"
            class="tag d-inline-block"
        >
            {{ tag }}
        </span>
    </section>
</template>

<script>
export default {
    name: "BaseTagGroup",
    props: {
        tags: {
            type: Array,
            default: function () {
                return [];
            },
        }
    },
    data() {
        return {};
    },
    computed: {},
    mounted() {},
    methods: {},
};
</script>

<style scoped>
.base-tag-group > p {
    color: var(--text-muted);
}

.tag {
    padding: 0.1rem 0.5rem;
    margin-right: 0.2rem;
    margin-bottom: 0.2rem;
    border: 1px solid var(--main-color);
    background-color: var(--muted-color);
    color: var(--text-muted);
    text-align: center;
    font-size: 0.9rem;
}
</style>
