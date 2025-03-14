// Donnees 
let vocabulary = {};
let expressions = [];
let citations = {};

// Fonction pour naviguer vers une catégorie spécifique
function scrollToCategory(category) {
    const element = document.getElementById(category);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Fonction pour afficher les flashcards
function displayFlashcards(words, direction) {
    const content = document.getElementById('content');
    content.innerHTML = `
        <div id="flashcard-container" class="flashcard-container"></div>
        <div class="buttons">
            <button class="next-button" onclick="nextCard()">Mot suivant</button>
            <button class="home-button" onclick="window.location.href='index.html'">Revenir à l'accueil</button>
        </div>
    `;
    const container = document.getElementById('flashcard-container');
    let index = Math.floor(Math.random() * words.length);

    function showCard() {
        if (words.length === 0) {
            container.innerHTML = "<p>Aucun vocabulaire disponible.</p>";
            return;
        }
        const card = document.createElement('div');
        card.className = 'flashcard';
        card.innerHTML = `
            <div class="flashcard-inner">
                <div class="flashcard-front">
                    <p>${direction === 'toTarget' ? words[index].word : words[index].translation}</p>
                </div>
                <div class="flashcard-back">
                    <p>${direction === 'toTarget' ? words[index].translation : words[index].word}</p>
                </div>
            </div>
        `;
        card.addEventListener('click', () => {
            card.classList.toggle('flipped');
        });
        container.innerHTML = '';
        container.appendChild(card);
    }

    window.nextCard = function() {
        index = Math.floor(Math.random() * words.length);
        showCard();
    }

    showCard();
}

// Fonction pour afficher le vocabulaire
function viewVocabulary() {
    const language = 'english';
    const words = vocabulary[language];
    if (!words || words.length === 0) {
        document.getElementById('content').innerHTML = "<p>Aucun vocabulaire disponible pour cette langue.</p>";
        return;
    }
    const content = document.getElementById('content');
    content.innerHTML = `
        <h2>Vocabulaire (${language})</h2>
        <table class="vocabulary-table">
            <thead>
                <tr>
                    <th>Mot</th>
                    <th>Traduction</th>
                    <th>Exemple</th>
                </tr>
            </thead>
            <tbody>
                ${words.map(word => `
                    <tr>
                        <td>${word.word}</td>
                        <td>${word.translation}</td>
                        <td>${word.example}</td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;
}

// Fonction pour afficher les expressions
function displayExpressions() {
    const content = document.getElementById('expressionsList');
    content.innerHTML = expressions.map(expr => `
        <div class="expression-item">
            <p><strong>${expr.expression}</strong>: ${expr.translation}</p>
        </div>
    `).join('');
}

// Fonction pour afficher les citations
function displayCitations() {
    const content = document.getElementById('citationsList');
    content.innerHTML = `
        <h2 id="ti">Le TI</h2>
        ${citations.ti.map(citation => `<div class="citation-item">${citation}</div>`).join('')}
        <h2 id="ttp">Le TTP</h2>
        ${citations.ttp.map(citation => `<div class="citation-item">${citation}</div>`).join('')}
        <h2 id="sct">Les SCT</h2>
        ${citations.sct.map(citation => `<div class="citation-item">${citation}</div>`).join('')}
        <h2 id="s">Les S</h2>
        ${citations.s.map(citation => `<div class="citation-item">${citation}</div>`).join('')}
        <h2 id="s">Autres citations</h2>
        ${citations.a.map(citation => `<div class="citation-item">${citation}</div>`).join('')}
    `;
}

// Ajouts
let currentQuestionIndex = 0;
let score = 0;
let questions = [];

// Fonction pour démarrer le test
function startTest() {
    const numQuestions = parseInt(document.getElementById('numQuestions').value, 10);
    const language = 'english';
    const words = vocabulary[language];

    if (numQuestions > words.length) {
        alert("Le nombre de questions demandé est supérieur au nombre de mots disponibles.");
        return;
    }

    // Sélectionner aléatoirement des mots sans répétition
    questions = [];
    const selectedIndices = new Set();
    while (selectedIndices.size < numQuestions) {
        const randomIndex = Math.floor(Math.random() * words.length);
        selectedIndices.add(randomIndex);
    }
    selectedIndices.forEach(index => questions.push(words[index]));

    // Initialiser le test
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('test-setup').style.display = 'none';
    document.getElementById('test-container').style.display = 'block';
    document.getElementById('results').style.display = 'none';
    showQuestion();
}

// Fonction pour afficher une question
function showQuestion() {
    const questionElement = document.getElementById('question');
    const feedbackElement = document.getElementById('feedback');
    const nextButton = document.getElementById('next-button');

    if (currentQuestionIndex >= questions.length) {
        showResults();
        return;
    }

    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerHTML = currentQuestionIndex % 2 === 0
        ? `Traduisez : ${currentQuestion.word}`
        : `Quel est le mot pour : ${currentQuestion.translation}`;

    feedbackElement.innerHTML = '';
    nextButton.style.display = 'none';
    document.getElementById('answer').value = '';
    document.getElementById('answer').focus();
}

// Fonction pour soumettre une réponse
function submitAnswer() {
    const userAnswer = document.getElementById('answer').value.trim().toLowerCase();
    const currentQuestion = questions[currentQuestionIndex];
    const correctAnswer = currentQuestion[currentQuestionIndex % 2 === 0 ? 'translation' : 'word'].toLowerCase();

    if (userAnswer === correctAnswer) {
        score++;
        document.getElementById('feedback').innerHTML = 'Correct !';
    } else {
        document.getElementById('feedback').innerHTML = `Faux. La réponse correcte était : ${correctAnswer}`;
    }

    document.getElementById('next-button').style.display = 'block';
}

// Fonction pour passer à la question suivante
function nextQuestion() {
    currentQuestionIndex++;
    showQuestion();
}

// Fonction pour afficher les résultats
function showResults() {
    document.getElementById('test-container').style.display = 'none';
    document.getElementById('results').style.display = 'block';
    document.getElementById('score').innerHTML = `Votre score : ${score} / ${questions.length}`;
}

// Fonction pour redémarrer le test
function restartTest() {
    document.getElementById('test-setup').style.display = 'block';
    document.getElementById('results').style.display = 'none';
}

// Chargement des pages
document.addEventListener('DOMContentLoaded', function() {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            vocabulary = data.vocabulary;
            expressions = data.expressions;
            citations = data.citations;

            const path = window.location.pathname.split('/').pop();
            if (path === 'learn.html') {
                const language = 'english';
                const direction = 'toSource'; // Vous pouvez changer cela selon vos besoins
                const words = vocabulary[language];
                if (!words || words.length === 0) {
                    document.getElementById('content').innerHTML = "<p>Aucun vocabulaire disponible pour cette langue.</p>";
                    return;
                }
                displayFlashcards(words, direction);
            } else if (path === 'view.html') {
                viewVocabulary();
            } else if (path === 'expressions.html') {
                displayExpressions();
            } else if (path === 'citations.html') {
                displayCitations();
            }
        })
        .catch(error => console.error('Erreur lors du chargement des données JSON:', error));
});
