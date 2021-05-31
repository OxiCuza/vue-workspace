<template>
    <div class="question-box-container">
        <b-jumbotron>
            <template #lead>
                {{currentQuestion.question}}
            </template>

            <hr class="my-4">

            <b-list-group>
                <b-list-group-item 
                    v-for="(answer, index) in shuffledAnswers" 
                    :key="index" 
                    @click="selectAnswer(index)"
                    :class="answerClass(index)"
                >
                    {{answer}}
                </b-list-group-item>
            </b-list-group>

            <b-button variant="primary" 
                @click="submitAnswer()"
                :disabled="indexAnswer == null || answered"
            >
                Submit
            </b-button>
            <b-button variant="success" @click="next()">Next</b-button>
        </b-jumbotron>
    </div>
</template>

<script>
import _ from 'lodash'

export default {
    name: 'QuestionBox',
    props: {
        currentQuestion: Object,
        next: Function,
        increment: Function
    },
    data() {
        return {
            indexAnswer: null,
            shuffledAnswers: [],
            correctIndex: null,
            answered: false
        }
    },
    methods: {
        selectAnswer(index) {
            this.indexAnswer = index
        },
        shuffleAnswers() {
            let answers = [...this.currentQuestion.incorrect_answers, this.currentQuestion.correct_answer]
            this.shuffledAnswers = _.shuffle(answers)
            this.correctIndex = this.shuffledAnswers.indexOf(this.currentQuestion.correct_answer)
        },
        submitAnswer() {
            let isCorrect = false

            if(this.indexAnswer === this.correctIndex) {
                isCorrect = true
            }

            this.answered = true
            this.increment(isCorrect)
        },
        answerClass(index) {
            let answerClass = ''

            if (!this.answered && this.indexAnswer === index) {
                answerClass = 'selected'
            } else if (this.answered && this.correctIndex == index) {
                answerClass = 'correct'
            } else if (this.answered && this.indexAnswer == index && this.correctIndex != this.indexAnswer) {
                answerClass = 'incorrect'
            }

            return answerClass
        }
    },
    computed: {
        answers() {
            let answer = [...this.currentQuestion.incorrect_answers]
            answer.push(this.currentQuestion.correct_answer)

            return answer
        }
    }, 
    watch: {
        currentQuestion: {
            immediate: true,
            handler() {
                this.indexAnswer = null
                this.answered = false
                this.shuffleAnswers()
            }
        }
    }
}
</script>

<style scoped>
.list-group {
    margin-bottom: 20px;
}

.list-group-item:hover {
    background: #EEE;
    cursor: pointer;
}

.btn {
    margin: 0 5px
}

.selected {
    background-color: lightblue;
}

.correct {
    background-color: limegreen;
}

.incorrect {
    background-color: red;
}
</style>