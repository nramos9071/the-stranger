const stay = document.querySelector('#stay')
const go = document.querySelector('#go')
const stayAns = document.querySelector('#stay1')
const go1 = document.querySelector('#go1')
const totalAns1 = document.querySelector('.ans1')
const totalAns2 = document.querySelector('#ans2')
const balls = document.querySelector('#balls')
const ans3 = document.querySelector('#ans3')
const balls1 = document.querySelector('#balls1')
const balls2 = document.querySelector('#balls2')
const balls3 = document.querySelector('#balls3')
const ballsAns1 = document.querySelector('#ballsAns1')
const ballsAns2 = document.querySelector('#ballsAns2')
const ballsAns3 = document.querySelector('#ballsAns3')
let timeLeft = 4
const end1 = document.querySelector('#end1')
const scrolls = document.querySelector('#scrolls')
const scrollsIntro = document.querySelector('#scrollIntro')
const theman = document.querySelector('#theman')
const manIntro  = document.querySelector('#manIntro')

function setTime() {
    const counter = setInterval(function (){
        timeLeft--;

        if (timeLeft===0) {
            clearInterval(counter);
            sendMessage();
        }
    },1000);

}

function sendMessage() {

    console.log('working')
    ballsAns1.setAttribute('style',
        'display:none');
    ballsAns2.setAttribute('style',
        'display:none');
    ballsAns3.setAttribute('style',
        'display:none');
    end1.setAttribute('style',
        'display:block'
    )

}



stay.addEventListener('click', function () {
    
    if (stay.checked === true) {

        totalAns1.setAttribute('style',
        'display:none');
        stayAns.setAttribute('style',
            'display:block');
    }
})

go.addEventListener('click', function () {
    
    if (go.checked === true) {

        totalAns1.setAttribute('style',
        'display:none');
        go1.setAttribute('style',
            'display:block');
        ans2.setAttribute('style',
            'display:flex');
        }
})

balls.addEventListener('click', function () {
    
    if (balls.checked === true) {

        totalAns2.setAttribute('style',
        'display:none');
        ans3.setAttribute('style',
            'display:flex');
        }
})


balls1.addEventListener('click', function () {
    
    if (balls1.checked === true) {

        ans3.setAttribute('style',
        'display:none');
        ballsAns1.setAttribute('style',
            'display:flex');
        setTime();
        }
})

balls2.addEventListener('click', function () {
    
    if (balls2.checked === true) {

        ans3.setAttribute('style',
        'display:none');
        ballsAns2.setAttribute('style',
            'display:flex');
        setTime();
        }
})

balls3.addEventListener('click', function () {
    
    if (balls3.checked === true) {

        ans3.setAttribute('style',
        'display:none');
        ballsAns3.setAttribute('style',
            'display:flex');
        setTime();
        }
})

scrolls.addEventListener('click', function () {
    
    if (scrolls.checked === true) {

        ans2.setAttribute('style',
        'display:none');
        scrollsIntro.setAttribute('style',
            'display:flex');
        
        }
})

theman.addEventListener('click', function () {
    
    if (theman.checked === true) {

        ans2.setAttribute('style',
        'display:none');
        manIntro.setAttribute('style',
            'display:flex');
        
        }
})






