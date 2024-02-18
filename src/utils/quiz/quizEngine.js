import $ from 'jquery';
import { shuffle, is_same } from '../helper.js';
import { initOrder } from './selectOrder';
import Swal from 'sweetalert2';

const defaultOptions = {
    nextButton: '#btn-next',
    prevButton: '#btn-prev',
    questionText: {
        value: '#text-question-curr',
        max: '#text-question-total'
    },
    progressBar: '#progress-bar',
    manager: '[data-order-manager]',
    orderItem: '[data-order]'
}

export class Question {
    constructor(title, images, orderData) {
        this.title = title;
        this.orderData = orderData;
        this.images = images;
    }
}



export function initQuiz(options_ = {}) {
    const { nextButton, prevButton, questionText, progressBar, manager, orderItem, questions } = Object.assign({}, defaultOptions, options_); //https://stackoverflow.com/questions/9602449/
    $(progressBar).attr('value', 0);
    $(progressBar).attr('max', questions.length);
    $(questionText.value).text(1);
    $(questionText.max).text(questions.length);
    var questionData = [];
    for (let i = 0; i < questions.length; i++) {
        const sh = shuffle(questions[i].images);
        questionData.push(new Question(questions[i].title, sh, questions[i].orderData));
    }

    $(nextButton).on('click', () => {
        const qIndx = $(manager).data('currQuestion');
        if ((qIndx + 1) >= questions.length) {
            if ($(nextButton).hasClass('btn-success')) {
                Swal.fire({
                    title: 'Bitirmek istiyor musun?',
                    showDenyButton: true,
                    confirmButtonText: 'Evet',
                    denyButtonText: 'Hayir',
                    buttonsStyling: false,
                    customClass: {
                        confirmButton: 'btn btn-success m-1',
                        denyButton: 'btn btn-ghost m-1',
                    }
                }).then((result) => {
                    if (result.isConfirmed) {
                        var resultArr = [];
                        questions.forEach((q, i) => {
                            if (!questionData[i].orderData) {
                                resultArr.push(false);
                            }
                            else resultArr.push(validate(questionData[i], q));
                        });
                        localStorage.setItem('sadece_kendini_kandiriyorsun', resultArr);
                        window.location.href = './results/';
                    }
                })

            }
            return;
        }
        $(manager).data('currQuestion', qIndx + 1);
        $(questionText.value).text(qIndx + 2);
        $(progressBar).attr('value', qIndx + 1);
        loadQuestion(questionData[qIndx + 1], manager, orderItem, (orderData) => {
            questionData[qIndx + 1].orderData = orderData;
        });
        //alert(validate(questionData[qIndx], questions[qIndx]));
        checkFinishState(manager, questions, nextButton);
    });

    $(prevButton).on('click', () => {
        const qIndx = $(manager).data('currQuestion');
        if (qIndx <= 0) return;
        $(manager).data('currQuestion', qIndx - 1);
        $(questionText.value).text(qIndx);
        $(progressBar).attr('value', qIndx - 1);
        loadQuestion(questionData[qIndx - 1], manager, orderItem, (orderData) => {
            questionData[qIndx - 1].orderData = orderData;
        });
        checkFinishState(manager, questions, nextButton);
    });

    $(manager).data('currQuestion', 0);
    loadQuestion(questionData[0], manager, orderItem, (orderData) => {
        questionData[0].orderData = orderData;
    });
}

function checkFinishState(manager, questions, nextButton) {
    if ($(manager).data('currQuestion') + 1 >= questions.length) {
        $(nextButton).removeClass('btn-primary').addClass('btn-success').text('Bitir');
    } else {
        $(nextButton).removeClass('btn-success').addClass('btn-primary').text('Sonraki');
    }
}

function loadQuestion(question, manager, orderItem, orderChangedCallback) {
    $(manager).empty();
    $('#text-q').text(question.title);
    question.images.forEach((img, i) => {
        injectImage(img, manager, i);
    });
    if (question.orderData) $(manager).data('orders', question.orderData);
    initOrder(manager, orderItem, !question.orderData, (orderData) => {
        orderChangedCallback(orderData);
    });
}

function injectImage(src, manager, id) {
    const html = `<div class="image-container" data-order data-id=${id}><div class="image-order"></div><img src="${src}" alt="Quiz Img"/></div>`;
    $(manager).append(html);
}

function getSrcs(questionImageCount, orderData) {
    var srcs = [];
    if (orderData.length < questionImageCount) return null;
    orderData.forEach(e => {
        srcs.push($(e).children('img').attr('src'));
    });
    return srcs;
}

function validate(shuffledQuestion, unshuffledQuestion) {
    const userInput = getSrcs(shuffledQuestion.images.length, shuffledQuestion.orderData);
    const answers = unshuffledQuestion.images;
    //console.log('ui', userInput);
    //console.log('a', answers);
    if (userInput == undefined) return false;
    if (answers == undefined) return false;
    return is_same(userInput, answers);
}