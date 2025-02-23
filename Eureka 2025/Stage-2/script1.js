// Import Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getFirestore, doc, setDoc, addDoc, collection, serverTimestamp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js";

const ANSWERS = [
    "Eiffel Tower",
    "Albert Einstein",
    "Oxygen",
    "Mount Everest",
    "Pacific Ocean",
    "Photosynthesis",
    "Gravity",
    "Python",
    "Tokyo",
    "Big Bang Theory"
  ];
  
  const TEAMS = [
    { name: "Team Alpha", score: 10 },
    { name: "Team Beta", score: 8 },
    { name: "Team Gamma", score: 6 },
    { name: "Team Delta", score: 4 },
    { name: "Team Epsilon", score: 2 }
  ];
  
  const QUESTIONS = [
    { question: "What is the name of the famous tower in Paris?", round: 1 },
    { question: "Who developed the theory of relativity?", round: 1 },
    { question: "What is the most abundant gas in Earth's atmosphere?", round: 2 },
    { question: "Which is the highest mountain in the world?", round: 2 },
    { question: "What is the largest ocean on Earth?", round: 3 },
    { question: "What process do plants use to make food?", round: 3 },
    { question: "What force keeps us on the ground?", round: 4 },
    { question: "Which programming language is named after a snake?", round: 4 },
    { question: "Which city is the capital of Japan?", round: 5 },
    { question: "What scientific theory explains the origin of the universe?", round: 5 }
  ];
  


toastr.options = {
    "closeButton": true,
    "debug": false,
    "newestOnTop": true,
    "progressBar": true,
    "positionClass": "toast-top-right",
    "preventDuplicates": false,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "3000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
};

// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyDXXgS7dIUV1R6OpRktfnQ6cG2gwNtp0ek",
    authDomain: "eureka-2025.firebaseapp.com",
    projectId: "eureka-2025",
    storageBucket: "eureka-2025.appspot.com",
    messagingSenderId: "232401268157",
    appId: "1:232401268157:web:aa123bf1b233839be9b6d4",
    measurementId: "G-9M9JK3710G",
};

// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Application Logic
const teams = ["zyphixmaster", "nebuloplasma", "underdog","veltrixunited","bellaciacavabein","jackandtheneverland","eclipseshadow","pharaohelyptus","synovaether","tesseractmtheory","lastone","fifthone","jackandjill","humptydumpty"];
    const answers = {
        1: ["1234567", "DAVID,PIETA,BLACKLADY,ARCHIPEGALO", "TIMECLOCK"],
        2: ["squid game", "jack kirby", "spirited travelers"],
        3: ["zakir hussain", "shabaash mithu", "the moment you doubt whether you can fly, you cease forever to be able to do it"],
        4: ["3719", "once upon a time i tried to understand top secret 3d movie", "arun kumar"],
        5: ["aryabhata", "d6a3a7", "guillotine"],
        6: ["red", "green", "blue"]
    };

const images = {
    1: ["img1.jpg", "", "img1.jpg"],
    2: ["Picture4.jpg", "Vid1.mp4", "Picturet.png"],
    3: ["Picture7.png", "Picture5.png", "Picture6.jpg"],
    4: ["Lock.jpg", "rebus.jpg", "code.png"],
    5: ["Picture9.jpg", "chess.jpg", "Picturepuzz.jpg"],// code
    6: ["", "", ""]
};
let currentQuestionIndex = 0;
let score = 0;
let t=0;

// Verify Team and Write to Firestore
async function verifyTeam() {
    const teamName = document.getElementById("team-name").value;
    if (teams.includes(teamName)) {
        sessionStorage.setItem("teamName", teamName);
        sessionStorage.setItem("currentRound", "1");

        // Log the team entry in Firestore
        await setDoc(doc(db, "teams", teamName), {
            teamName: teamName,
            enteredAt: serverTimestamp()
        });

        window.location.href = "metamorphosis1979.html";
    } else {
        toastr.error("Invalid team name!");
    }
}

// Load Questions
// Load Questions
function loadQuestion(round) {
    const questionContainer = document.getElementById("question-container");
    const teamName = sessionStorage.getItem("teamName");
    const currentRound = parseInt(sessionStorage.getItem("currentRound"));
    toastr.success(`Welcome to Round ${round}`);

    if (!teamName) {
        toastr.error("Unauthorized access!");
        window.location.href = "index.html";
        return;
    }

    if (round > currentRound) {
        toastr.error(`You cannot access round ${round} before completing round ${currentRound}. Contact the volunteers immediately`);
        window.location.href = `index.html`;
        return;
    }
    

    if (currentQuestionIndex >= answers[round].length) {
        toastr.success("All questions in this round are answered!");
        if (round < 5) {
            sessionStorage.setItem("currentRound", (round + 1).toString());
            if(round==0) window.location.href = `metamorphosis1979.html`;
            else if(round==1) window.location.href = `sherlockwarner0null.html`;
            else if(round==2) window.location.href = `byomkeshmitti37091.html`;
            else if(round==3) window.location.href = `championsoftheworld18122022.html`;
            else if(round==4) window.location.href = `meaningwithoutmeaning42.html`;
            
        } else {
            toastr.success("Quiz Completed!");
            window.location.href = "index.html";
        }
        return;
    }

    const demoQuestions = {
        1: ["What is 2+6?", "What color is the sky?", "Pick C."],
        2: ["If the first symbol here represents the Deathly Hallows, what does the second symbol represent? [In the answer, write with one space between each word if multiple words are present]", "[In the answer, write with one space between each word if multiple words are present]", "In the answer, write with one space between each word if multiple words are present."],
        3: ["In the answer, write with one space between each word if multiple words are present.", "In the answer, write with one space between each word if multiple words are present.","Write the complete sentence in answer [ONLY GIVE ONE SPACE IN BETWEEN WORDS AND PUNCTUATIONS IF ANY]. ( For example: Mr. Roy is engaged in playing, writing, and dancing )."],
        4: ["• 8951: Two digits are right, but both are in the wrong place.   • 2169: Two digits are right; one is in the right place, and one is in the wrong place.   • 3694: Two digits are right; one is in the right place, and one is in the wrong place.   • 4721: Two digits are right; one is in the right place, and one is in the wrong place.    • 1237: Three digits are right, but all are in the wrong place. ", "Write the complete sentence [USE ONLY ONE SPACE IN BETWEEN WORDS]", "It was a Sunday when a mishap took place. Feluda was discussing cryptography with Topshe when the phone suddenly rang. The caller reported a murder that had taken place nearby. Coincidentally, the victim was a cryptographer and a white-hat computer hacker. He was fascinated with mirror image writing. Feluda and Topshe rushed to the crime scene to investigate. After carefully searching the area, Topshe found two pieces of paper. On one of them, it was written: 'The sequence of alphabets in english language and little bit intellect will guide you to the murderer.' On the other, there was a coded message which is shown in the image. Feluda examined the papers and then said, 'The culprit is the person whose name is written here.'Topshe quickly sat down with a pen and paper and deciphered the name. What is the name?  [EXAMPLE: BEN CRUISE]"],
        5: ["Decode the image and write the one word answer", "Can you checkmate the king with a single chess-piece in 2 steps? [EXAMPLE: SUPPOSE BISHOP IS IN A6 AND NEXT TWO MOVES ARE B5 AND D7. THEN THE ANSWER IS A6B5D7]", "In the answer, write with one space between each word if multiple words are present." ],
        6: ["What is the color of fire?", "What is the color of grass?", "What is the color of the sky?"]
    };

    // Shuffle the questions and corresponding answers for the current round
    const questionAnswerPairs = demoQuestions[round].map((question, index) => ({
        question,
        answer: answers[round][index],
        image: images[round][index]
    }))

    // Update the demoQuestions and answers arrays to match the shuffled order
    const shuffledQuestions = questionAnswerPairs.map(pair => pair.question);
    const shuffledAnswers = questionAnswerPairs.map(pair => pair.answer);
    const shuffledImages = questionAnswerPairs.map(pair => pair.image);

    demoQuestions[round] = shuffledQuestions;
    answers[round] = shuffledAnswers;
    images[round] = shuffledImages;

    // Generate HTML for the questions
    const questionHTML = questionAnswerPairs.map((pair, i) => {

        let mediaElement = "";
    
        if (pair.image) {
            if (pair.image.endsWith(".mp4")) {
                mediaElement = `<video controls class="question-image">
                                    <source src="${pair.image}" type="video/mp4">
                                    Your browser does not support the video tag.
                                </video>`;
            } else {
                mediaElement = `<img src="${pair.image}" alt="Question Image" class="question-image">`;
            }
        }
        return `
            <div class="question">
                <p>Question ${currentQuestionIndex + i + 1}: ${pair.question}</p>
                ${mediaElement}
                <div class="submit">
                    <input type="text" id="answer${i}" placeholder="Your answer" autocomplete="off">
                    <button class="btn" id="submit${i}" onclick="verifyAnswer(${round}, ${i})">Submit</button>
                </div>
            </div>`;
    }).join("");

    questionContainer.innerHTML = questionHTML;
}

// Verify Answers and Log Progress in Firestore
async function verifyAnswer(round, index) {
    const userAnswer = document.getElementById(`answer${index}`).value.trim().toLowerCase();
    const correctAnswer = answers[round][currentQuestionIndex + index];
    const teamName = sessionStorage.getItem("teamName");

    if ((userAnswer === correctAnswer) || (userAnswer.trim().toLowerCase()==="eureka" && correctAnswer==="squid game")) {
        score++;
        document.getElementById(`submit${index}`).disabled = true;

        // Log question completion in Firestore
        await addDoc(collection(db, "progress", teamName, "answers"), {
            teamName: teamName,
            round: round,
            questionNumber: currentQuestionIndex + index + 1,
            answeredAt: serverTimestamp()
        });

        if (score % 3 === 0) {
            currentQuestionIndex += 3;
            loadQuestion(round);
        }
    }
    else{
        toastr.error("Wrong answer!!! Try again");

    } 
}



// Export Functions to Global Scope
window.verifyTeam = verifyTeam;
window.loadQuestion = loadQuestion;
window.verifyAnswer = verifyAnswer; 


async function verifypuzzle() {
    const correctAnswers = [6,3,9,5,1,4,7,2,8];

    const inputs = document.querySelectorAll('.puzzle-cell input');
    const userAnswers = Array.from(inputs).map(input => parseInt(input.value, 10));

    let isCorrect = true;
    for (let i = 0; i < correctAnswers.length; i++) {
        if (userAnswers[i] !== correctAnswers[i]) {
            isCorrect = false;
            break;
        }
    }

    if (isCorrect) {
        document.getElementById("submitpuzz1").disabled = true;
        t++;
        const teamName = sessionStorage.getItem("teamName");
        if (!teamName) {
            toastr.error("Team name is not set.");
            return;
        }

        try {
            await addDoc(collection(db, "progress", teamName, "answers"), {
                teamName: teamName,
                round: "1",
                questionNumber: 1,
                answeredAt: serverTimestamp()
            });
            console.log("Progress logged successfully.");
            if(t==3){
                sessionStorage.setItem("currentRound", (2).toString());
                window.location.href = "sherlockwarner0null.html";
            } 
        } catch (error) {
            console.error("Error adding document:", error);
            toastr.error("There was an error recording your progress. Please contact support.");
        }
    }
    else{
        toastr.error("Wrong answer!!! Try again");

    } 
}

// Attach the event listener when DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    const submitButton = document.getElementById("submitpuzz1");
    if (submitButton) {
        submitButton.addEventListener("click", verifypuzzle);
    } else {
        console.error("Button with ID 'submitpuzz1' not found.");
    }
});


async function verifypuzzle2() {
    const correctAnswers = ["V","M","N","A","L","S","A","R","A","S","S","U","P","P","R","N","C","R","I","I","U","T","L","V","W","H","U","I","E","O","A","A","R","A","C","H","U","T","E","R","N","A","V","A","L","T","D","M","S","E","Y","A","L","A","I","R","E"];

    const inputs = document.querySelectorAll('.puzzle-cell2 input');
    const userAnswers = Array.from(inputs).map(input =>input.value);

    let isCorrect = true;
    for (let i = 0; i < correctAnswers.length; i++) {
        if (userAnswers[i] !== correctAnswers[i]) {
            isCorrect = false;
            break;
        }
    }

    if (isCorrect) {
        t++;
        document.getElementById("submitpuzz2").disabled = true;
        const teamName = sessionStorage.getItem("teamName");
        if (!teamName) {
            toastr.error("Team name is not set.");
            return;
        }

        try {
            await addDoc(collection(db, "progress", teamName, "answers"), {
                teamName: teamName,
                round: "1",
                questionNumber: 2,
                answeredAt: serverTimestamp()
            });
            console.log("Progress logged successfully.");
            if(t==3){
                sessionStorage.setItem("currentRound", (2).toString());
                window.location.href = "sherlockwarner0null.html";
            } 
        } catch (error) {
            console.error("Error adding document:", error);
            toastr.error("There was an error recording your progress. Please contact support.");
        }
    }
    else{
        toastr.error("Wrong answer!!! Try again");

    } 
}

// Attach the event listener when DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    const submitButton = document.getElementById("submitpuzz2");
    if (submitButton) {
        submitButton.addEventListener("click", verifypuzzle2);
    } else {
        console.error("Button with ID 'submitpuzz2' not found.");
    }
});


async function verifyr1() {
    const correctAnswer = "RED YELLOW";
    const userAnswer=document.getElementById('answer13').value.trim().toUpperCase();

    if (userAnswer==correctAnswer) {
        document.getElementById("submit13").disabled = true;
        t++;
        const teamName = sessionStorage.getItem("teamName");
        if (!teamName) {
            toastr.error("Team name is not set.");
            return;
        }

        try {
            await addDoc(collection(db, "progress", teamName, "answers"), {
                teamName: teamName,
                round: "1",
                questionNumber: 3,
                answeredAt: serverTimestamp()
            });
            console.log("Progress logged successfully.");
            if(t==3){
                sessionStorage.setItem("currentRound", (2).toString());
                window.location.href = "sherlockwarner0null.html";
            } 
        } catch (error) {
            console.error("Error adding document:", error);
            toastr.error("There was an error recording your progress. Please contact support.");
        }
    }
    else{
        toastr.error("Wrong answer!!! Try again");

    } 
}

// Attach the event listener when DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    const submitButton = document.getElementById("submit13");
    if (submitButton) {
        submitButton.addEventListener("click", verifyr1);
    } else {
        console.error("Button with ID 'submitpuzz2' not found.");
    }
});

window.verifypuzzle = verifypuzzle;
window.verifypuzzle2 = verifypuzzle2;
window.verifyr1 = verifyr1;


// Enable fullscreen mode
document.addEventListener('click',()=>{
    document.documentElement.requestFullscreen().catch((e)=>{
        console.log(e);
    })
})
// Detect when fullscreen is exited and force it back
document.addEventListener('fullscreenchange', () => {
    if (!document.fullscreenElement) {
        toastr.error("Fullscreen mode is required for this application.");
        document.documentElement.requestFullscreen().catch((e) => {
            console.error("Failed to re-enter fullscreen:", e);
        });
    }
});

// Log disqualification if "Ctrl + U" is pressed
window.addEventListener('keydown', async (event) => {
    if (event.ctrlKey && event.key.toLowerCase() === 'u') {
        event.preventDefault();
        toastr.error("Viewing source is disabled.");
       
    }

    // Disable F11 for fullscreen toggle
    if (event.key === 'F11') {
        event.preventDefault();
        toastr.error("Fullscreen mode is compulsory.");
    }

    // Disable ESC key to exit fullscreen
    if (event.key === 'Escape') {
        event.preventDefault();
        toastr.error("Fullscreen mode cannot be exited.");
    }
    // Disable shortcuts for DevTools and View Source
    if (
        (event.ctrlKey && event.shiftKey && (event.key === 'I' || event.key === 'J' || event.key === 'C')) || // Inspect/Console
        (event.ctrlKey && (event.key === 'U' || event.key === 'S')) || // View Source & Save Page
        event.key === 'F12' // DevTools
    ) {
        event.preventDefault();
        toastr.error("Developer tools shortcuts are disabled.");
        return false;
    }
});

// Disable right-click context menu
window.addEventListener('contextmenu', (event) => {
    event.preventDefault();
    toastr.error("Right-click is disabled.");
});




