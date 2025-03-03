<template>
    <button
        @click="setDisabeled"
        class="question-card"
        :disabled="isDisabeled"
        :class="{ disabeled: isDisabeled }"
    >
        {{ question.points }}
    </button>
</template>
<script>
    import { useQuestionStore } from "../stores/questionStore"
    export default {
        props: ["question"],
        data() {
            return { isDisabeled: false, questionStore: useQuestionStore() }
        },
        created() {
            // console.log(this.question)
            this.isDisabeled = this.questionStore.checkDisabeled(
                this.question.id
            )
        },
        methods: {
            setDisabeled() {
                this.questionStore.disableQuestion(this.question.id)
            }
        }
    }
</script>
<style scoped>
    .question-card {
        background-color: #e4cff1;
        color: #181818;
        box-shadow: -2px 4px 0 0 rgba(0, 0, 0, 0.2);
        min-width: 82px;
        min-height: 44px;
        border-radius: var(--border-radius);
        display: flex;
        justify-content: center;
        align-items: center;
        transition: var(--transition);
    }
    .question-card:hover {
        background-color: #c99be5;
        color: var(--color-neutral-light);
    }

    .disabeled {
        background-color: var(--color-disabled);
        color: var(--color-neutral-light);
        box-shadow: none;
        cursor: default;
        &:hover {
            background-color: var(--color-disabled);
        }
    }

    @media (min-width: 500px) {
        .question-card {
            min-width: 100px;
        }
    }
    @media (min-width: 700px) {
        .question-card {
            min-width: 200px;
            padding: 0.2rem 0.6rem;
        }
    }
</style>
