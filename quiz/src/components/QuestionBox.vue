<template>
    <div class="question-box-container">
        <b-jumbotron>
            <template #lead>
                Some questions here ?
            </template>

            <hr class="my-4">

            <p>
                List of answer
            </p>

            <b-button variant="primary" href="#">Submit</b-button>
            <b-button variant="success" href="#">Next</b-button>
        </b-jumbotron>
    </div>
</template>

<script>
export default {
    name: 'QuestionBox',
}
</script>

<style>

</style>