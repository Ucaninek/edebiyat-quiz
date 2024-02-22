import { initQuiz } from "../quiz/quizEngine.js";
import { qArr } from "../quiz/questions.js";
import $ from 'jquery';

$(() => {
    initQuiz({ questions: qArr() });
});