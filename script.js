const questions = [
  {
    q: "What is JS?",
    opt: ["A Restaurant", "Programming Language", "A Tech Company", "Device"],
    a: "Programming Language",
  },
  {
    q: "Which of the following is not a HTML tag?",
    opt: ["strong", "img", "audio", "class"],
    a: "class",
  },
  {
    q: "What does CSS stand for?",
    opt: [
      "Cascading Style Sheet",
      "Computer Style Sheet",
      "Creative Style System",
      "CSS",
    ],
    a: "Cascading Style Sheet",
  },
  {
    q: "Which HTML tag is used to define an unordered list?",
    opt: ["ul", "ol", "li", "dl"],
    a: "ul",
  },
  {
    q: "What is the purpose of the HTML <meta> tag?",
    opt: [
      "To define a paragraph",
      "To provide metadata about the document",
      "To create a hyperlink",
      "To insert an image",
    ],
    a: "To provide metadata about the document",
  },
  {
    q: "Which JavaScript keyword is used to declare a variable?",
    opt: ["var", "let", "const", "variable"],
    a: "var",
  },
  {
    q: 'What is the purpose of the CSS property "margin"?',
    opt: [
      "To set the background color of an element",
      "To add space inside an element",
      "To add space outside an element",
      "To change the font size of an element",
    ],
    a: "To add space outside an element",
  },
  {
    q: "Which HTML tag is used for creating a hyperlink?",
    opt: ["link", "a", "href", "url"],
    a: "a",
  },
  {
    q: "What is the correct way to comment out code in JavaScript?",
    opt: [
      "// This is a comment",
      "<!-- This is a comment -->",
      "/* This is a comment /",
      "/* This is a comment */",
    ],
    a: "// This is a comment",
  },
  {
    q: "Which of the following is a JavaScript framework/library?",
    opt: ["React", "HTML5", "CSS3", "Node.js"],
    a: "React",
  },
  {
    q: 'What is the purpose of the CSS property "padding"?',
    opt: [
      "To add space outside an element",
      "To create a border around an element",
      "To add space inside an element",
      "To change the text color of an element",
    ],
    a: "To add space inside an element",
  },
  {
    q:"Which HTML element is used to define the structure of an HTML document?",
    opt: ["html", "head", "body", "structure"],
    a: "html",
  },
];
const qDiv = document.querySelector(".main div");
const startButton = document.getElementById("start");
const nextBtn = document.getElementById("next");
let questionIndex = 0;
let score = 0;
let prevButton = startButton;

startButton.onclick = () => {
  startButton.style.display = "none";
  nextBtn.style.display = "block";
  qDiv.style.display = "flex";
  show();
};

const show = () => {
  if (questionIndex < questions.length) {
    questions.forEach((ele, ind) => {
      ind = questionIndex;

      qDiv.innerHTML = `<h1>${questions[ind].q}</h1>`;

      questions[ind].opt.forEach((e, i) => {
        qDiv.innerHTML += `<button onclick="checkAnswer(${i},${ind})">${e}</button>`;
      });
    });
  } else {
    qDiv.innerHTML = `<h1>Quiz Completed!<br>
      Your Score is: ${score} / ${questions.length}</h1>`;
    qDiv.classList.add("blur");
    nextBtn.style.display = "none";
  }
};

checkAnswer = (i, ind) => {
  prevButton.classList.remove("choice");
  event.target.classList.add("choice");
  if (questions[ind].a == questions[ind].opt[i]) {
    if (score <= ind) {
      score++;
    }
  } else if (questions[ind].a != questions[ind].opt[i] && score > ind) {
    score--;
  }
  prevButton = event.target;
};

function next() {
  questionIndex++;
  setTimeout(show);
}
