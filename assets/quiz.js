
const quiz = new Vue({
    el: "#quiz",
    data: {
        questions: questions,
        currentQuestion: 0,
        currentCategory: 0,
        userResponses: Array(questions[0].length).fill(null)
    },
    methods: {
        fillAnswers: function(){
            userResponses = Array(questions[this.currentCategory].length).fill(null)
        },

        next: function(){
            if (this.currentQuestion < questions[this.currentCategory].question.length-1 ){
                this.currentQuestion++;
            }
        },

        previous: function(){

            if (this.currentQuestion > 0 ){
                this.currentQuestion--;
            }
        }
    }
})

