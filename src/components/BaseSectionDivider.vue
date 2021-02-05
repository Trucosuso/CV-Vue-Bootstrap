<template lang="html">
    <div class="section-divider">
        <svg>
            <path d="M 0,0 H 120" />
        </svg>
    </div>
</template>

<script lang="js">

export default  {
    name: "SectionDivider",
    props: [],
    data () {
        return {

        }
    },
    computed: {

    },
    mounted () {

    },
    methods: {

    }
}
</script>

<style scoped>
.section-divider {
    margin: 1rem 0;
}

.section-divider > svg {
    stroke: var(--main-color);
    stroke-width: 0.2rem;
    height: 0.2rem;
}
</style>
