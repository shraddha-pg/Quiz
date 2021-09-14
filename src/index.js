const questions = [
    {
    id: 0,
    questions:'Guess the animal?',
    img: "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    option1: 'Cat', 
    option2: 'Dog',
    option3: 'Elephant',
    answer: 'Elephant'
},
{
    id: 1,
    questions:'Guess the flower?',
    img: "https://nurserynisarga.in/wp-content/uploads/2019/10/Red-Rose.jpg",
    option1: 'Lotus', 
    option2: 'Rose',
    option3: 'Daisy',
    answer: 'Rose'
},
{
    id: 2,
    questions:'Guess the vehicle?',
    img: "https://newtowncoaches.com.au/wp-content/uploads/2021/03/istockphoto-974313674-612x612-1.jpg",
    option1: 'Bus', 
    option2: 'Car',
    option3: 'Boat',
    answer: 'Bus'
},
{
    id: 3,
    questions:'Guess the Color?',
    img: "https://previews.123rf.com/images/federicofoto/federicofoto1805/federicofoto180500181/101154533-background-with-glitter-of-golden-color.jpg",
    option1: 'Golden', 
    option2: 'Silver',
    option3: 'White',
    answer: 'Golden'
},
{
    id: 4,
    questions:'Guess the Cartoon in the Picture?',
    img: "https://cn.i.cdn.ti-platform.com/content/869/oggy-and-the-cockroaches/showpage/in/oggy-moreshows.d29dd69e.png",
    option1: 'Nobita', 
    option2: 'Bheem',
    option3: 'Oggy',
    answer: 'Oggy'
},
{
    id: 5,
    questions:'What is the Number in Picture?',
    img: "https://upload.wikimedia.org/wikipedia/commons/6/69/Junction_2.svg",
    option1: 'One', 
    option2: 'Two',
    option3: 'Three',
    answer: 'Two'
},
{
    id: 6,
    questions:'Guess the Bird in the Picture?',
    img: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Peacock_Plumage.jpg",
    option: ['Sparrow','Peacock','Crow'],
    option1: 'Sparrow', 
    option2: 'Peacock',
    option3: 'Crow',
    answer: 'Peacock'
},
{
    id: 7,
    questions:'What is the color of Mango?',
    img: "https://www.mango.org/wp-content/uploads/2017/11/houney-variety.jpg",
    option1: 'Blue', 
    option2: 'Black',
    option3: 'Yellow',
    answer: 'Yellow'
  },
   {
      id: 8,
      questions:'How many colors does the ranibow have?',
      img: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Rainbow-diagram-ROYGBIV.svg",
      option1: '11', 
      option2: '10',
      option3: '7',
      answer: '7'
  },
   {
      id: 9,
      questions:'How many Stars are their in the Picture?',
      img: "https://vt-vtwa-assets.varsitytutors.com/vt-vtwa/uploads/problem_question_image/image/27642/14.png",
      option1: 'Fourteen', 
      option2: 'Sixteen',
      option3: 'Ten',
      answer: 'Fourteen'
  },
   {
      id: 10,
      questions:'what is sum of 2+2?',
      img: "https://images-na.ssl-images-amazon.com/images/I/312tYc24sRL.png",
      option1: '3', 
      option2: '4',
      option3: '6',
      answer: '4'
  },
   {
      id: 11,
      questions:'what is name of animal for the day Sunday?',
      img: "https://image.freepik.com/free-vector/days-week-with-animals-signs_1308-8795.jpg",
      option1: 'Hen', 
      option2: 'Dog',
      option3: 'Bird',
      answer: 'Hen'
  },
   {
      id: 12,
      questions:'what is name of the Vegetable in the Picture?',
      img: "https://m.media-amazon.com/images/I/51JbI+BTW7L._SX679_.jpg",
      option: ['Potato','Brinjal','Chili'],
      option1: 'Potato', 
      option2: 'Brinjal',
      option3: 'Tomato',
      answer: 'Brinjal'
  },
  {
      id: 13,
      questions:'What is Name of this Cartoon?',
      img: "https://cdn.pixabay.com/photo/2020/05/11/15/38/tom-5158824_960_720.png",
      option1: 'Tom', 
      option2: 'Bruno',
      option3: 'Jerry',
      answer: 'Tom'
  },
  {
      id: 14,
      questions:'Which color of shirt is Shinchan wearing ?',
      img: "https://st1.bollywoodlife.com/wp-content/uploads/2020/09/FotoJet382.jpg",
      option1: 'Orange', 
      option2: 'Pink',
      option3: 'Red',
      answer: 'Red'
  },
  {
      id: 15,
      questions:'Which is the warmest Season in the whole year',
      img: "https://blog.asiaqualityfocus.com/wp-content/uploads/2014/07/AQF_Production-delays-in-China-during-summer-season-by-the-Quality-Control-Blog-300x200.jpg",
      option1: 'Summer', 
      option2: 'Rainy',
      option3: 'Winter',
      answer: 'Summer'
  },
  {
      id: 16,
      questions:'Which Season comes after Summer Season?',
      img: "https://cdn1.byjus.com/wp-content/uploads/2019/11/essay-on-rainy-day-for-class-3.png",
      option1: 'Spring', 
      option2: 'Winter',
      option3: 'Rainy',
      answer: 'Rainy'
  },
  {
      id: 17,
      questions:'Which insect is sitting on the flower in the picture?',
      img: "https://www.avasflowers.net/blog/wp-content/uploads/2019/09/butterfly-on-a-flower-1024x683.jpg",
      option1: 'Butterfly', 
      option2: 'HoneyBee',
      option3: 'Bug',
      answer: 'Butterfly'
  },
  {
      id: 18,
      questions:'what is parrot eating in picture?',
      img: "https://images.squarespace-cdn.com/content/v1/5b179d99a2772c64cb22caa2/1528788406033-WEQVR205BWNWXAQ66R68/can+ifeedmybirdchilli2017.jpg",
      option1: 'Grass', 
      option2: 'Chilli',
      option3: 'Apple',
      answer: 'Chilli'
  },
  {
      id: 19,
      questions:'On which planet do we live?',
      img: "https://www.worldatlas.com/r/w1300-q80/upload/20/19/6e/shutterstock-1685545819.jpg",
      option1: 'Mars', 
      option2: 'Jupiter',
      option3: 'Earth',
      answer: 'Earth'
  },
  {
      id: 20,
      questions:'How many letters are in the alphabet?',
      img: "https://ejoy-english.com/blog/wp-content/uploads/2018/08/alphabet.jpg",
      option: ['30','14','26'],
      option1: '30', 
      option2: '14',
      option3: '26',
      answer: '26'
  },
];

// Declarations
const opt1 = document.getElementById('opt1');
const opt2 = document.getElementById('opt2');
const opt3 = document.getElementById('opt3');
document.getElementById('next').disabled = true;
const next = document.getElementById('next');
const img = document.getElementById('img');
const quest = document.getElementById('quest');
const questArea = document.querySelector('.quest-area')
const showscore = document.getElementById('showscore');
const correct = document.getElementById('score');
const wrong = document.getElementById('error');
const user = document.getElementById('name');
let nam = '';
let score = 0;
let error = 0;
let currentItem = 0;
let userSelection = ""
let id = null;



// When loads for the 1st time
window.addEventListener("DOMContentLoaded", function(){
    let choice = questions[currentItem];
    img.src = choice.img;
    quest.textContent = choice.questions;
    opt1.textContent = choice.option1;
    opt2.textContent = choice.option2;
    opt3.textContent = choice.option3;
    nam = askName();
    console.log(nam)
})

function askName() {
    let username = sessionStorage.getItem('username');
    onpage = true;
    if (username === null) {
        username = prompt("To make your time on this website better, please enter your name.");
    }

    if (username != null) {
        user.innerHTML = "Name:" + username;
        sessionStorage.setItem('username', username);
    }else{
        user.innerHTML = "Name: anonymous"; 
    }
}

// Event listener for the options
opt1.addEventListener('click',function(){
    userSelection = opt1.textContent
    // correctAnswer(userSelection)
    errors(userSelection)
    document.getElementById('opt1').disabled = true;
})
opt2.addEventListener('click',function(){
    userSelection = opt2.textContent
    // correctAnswer(userSelection)
    errors(userSelection)
    document.getElementById('opt2').disabled = true;
})
opt3.addEventListener('click',function(){
    userSelection = opt3.textContent
    // correctAnswer(userSelection)
    errors(userSelection)
    document.getElementById('opt3').disabled = true;
})


// Function for the next question
let counter = 0;
next.onclick = (function outer() {
    return function inner() {
        let c =  Math.floor(Math.random() * questions.length);
        let choice = questions[c];
        img.src = choice.img;
        quest.textContent = choice.questions;
        opt1.textContent = choice.option1;
        opt2.textContent = choice.option2;
        opt3.textContent = choice.option3;
        document.getElementById('next').disabled = true;
        document.getElementById('opt1').disabled = false;
        document.getElementById('opt2').disabled = false;
        document.getElementById('opt3').disabled = false;
        counter++;
        if(counter === 5){
            showscore.innerHTML = `<h3>Your score is: ${score}🥳</h3>
            <h3>Your Errors are:${error}❌</h3>
            <button class="btn" onclick="location.reload(true)">Play again</button>`;
            showscore.classList.remove('scorearea');
            document.getElementById('opt1').disabled = true;
            document.getElementById('opt2').disabled = true;
            document.getElementById('opt3').disabled = true;
            questArea.style.display = "none";
        }
    };
})();


function errors(a){
    let ans = a;
    if(questions.find(o => o.answer === ans)){
        score++;
        correct.innerText = `Score: ${score}`
        document.getElementById('next').disabled = false;
    }else{
        error++;
        wrong.innerText = `Error: ${error}`
    }
}

