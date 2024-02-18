import $ from 'jquery';
import confetti from 'canvas-confetti';
import { qArr } from '../utils/quiz/questions.js';

var count = 200;
var defaults = {
    origin: { y: .55 }
};

function fire(particleRatio, opts) {
    confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio)
    });
}

$('#btn-results').on('click', () => {
    // Edit given parameters
    fire(0.25, {
        spread: 26,
        startVelocity: 55,
    });
    fire(0.2, {
        spread: 60,
    });
    fire(0.35, {
        spread: 100,
        decay: 0.91,
        scalar: 0.8
    });
    fire(0.1, {
        spread: 120,
        startVelocity: 25,
        decay: 0.92,
        scalar: 1.2
    });
    fire(0.1, {
        spread: 120,
        startVelocity: 45,
    });

    $('#btn-results').hide();
    const resArr = localStorage.getItem('sadece_kendini_kandiriyorsun').split(',');
    var correct = 0;
    var percent = 0;
    resArr.forEach(res => {
        if (res === 'true') correct++;
    });
    percent = (correct / resArr.length) * 100;

    qArr.forEach((e, i) => {
        const qStats = `<div class="text-xl"><p>Soru ${i + 1}</p><p class="saturate-200 ${resArr[i] === 'true' ? 'text-primary' : 'text-secondary'}">${resArr[i] === 'true' ? 'Dogru' : 'Yanlis'}</p></div>`;
        const html = `<div class="p-4 shadow-2xl rounded-xl bg-base-300 flex gap-4 flex-col">${qStats}<div class="flex flex-wrap justify-center gap-4" data-image-order=${i}></div></div>`;
        $('#images').append(`<div class="w-full flex flex-wrap justify-center gap-4 results">${html}</div>`);
        e.images.map((x) => $(`[data-image-order=${i}]`).append(`<img src="${x}" alt="Quiz Img"/></div>`));
    });

    $('#progress-bar').css('--value', percent).text(`${correct} / ${resArr.length}`).show();
});