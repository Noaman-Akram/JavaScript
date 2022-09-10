const btns = document.getElementsByClassName('btn')
const disp = document.getElementById('pop')
const a = document.getElementById('audio-A')
const b = document.getElementById('audio-B')
const c = document.getElementById('audio-C')
const d = document.getElementById('audio-D')
const e = document.getElementById('audio-E')
const f = document.getElementById('audio-F')
const g = document.getElementById('audio-G')


const pops = ['Amazing!','Keep Going!','I love it!','What an art!', 'On a scale from 1 to 10, you are an 11.', 'This performance is one of the best so far.','Outstanding!', 'Superior!', 'Gameed!', '3alamy! (Multionational)','Edyy!','Yabnl la3eba!','I am a big fan of you!','Dont stop']



function strum(ele) {
    let newAudio = ele.cloneNode()
    newAudio.play();
    setTimeout(function () {
        newAudio.pause();
        newAudio.currentTime = 0;
    }, 2500);
    disp.innerHTML = pops[Math.floor(Math.random() * 14)]
}




btns[0].addEventListener('click', function () {
    strum(a);
})


btns[1].addEventListener('click', function () {
    strum(b);
})


btns[2].addEventListener('click', function () {
    strum(c);
})


btns[3].addEventListener('click', function () {
    strum(d);
})


btns[4].addEventListener('click', function () {
    strum(e);
})


btns[5].addEventListener('click', function () {
    strum(f);
})


btns[6].addEventListener('click', function () {
    strum(g);
})

