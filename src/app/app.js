import { initQuiz } from "../utils/quiz/quizEngine.js";
import { qArr } from "../utils/quiz/questions.js";
import $ from 'jquery';

$(() => {
    initQuiz({ questions: qArr });
});