let vocabulary = JSON.parse(localStorage.getItem('vocabulary')) || {
    english: [],
    spanish: [],
    danish: []
};

function navigateTo(page) {
    const language = document.getElementById('languageSelect').value;
    const direction = document.getElementById('directionSelect').value;
    localStorage.setItem('selectedLanguage', language);
    localStorage.setItem('selectedDirection', direction);
    window.location.href = page;
}

document.addEventListener('DOMContentLoaded', function() {
    const path = window.location.pathname.split('/').pop();
    if (path === 'learn.html') {
        const language = localStorage.getItem('selectedLanguage');
        const direction = localStorage.getItem('selectedDirection');
        const words = JSON.parse(localStorage.getItem('vocabulary'))[language];
        if (!words || words.length === 0) {
            document.getElementById('content').innerHTML = "<p>Aucun vocabulaire disponible pour cette langue.</p>";
            return;
        }
        displayFlashcards(words, direction);
    } else if (path === 'test.html') {
        startTest();
    } else if (path === 'view.html') {
        viewVocabulary();
    } else if (path === 'add.html') {
        document.getElementById('addForm').addEventListener('submit', function(event) {
            event.preventDefault();
            const language = localStorage.getItem('selectedLanguage');
            const word = document.getElementById('word').value;
            const translation = document.getElementById('translation').value;
            const example = document.getElementById('example').value;
            if (word && translation && example) {
                const vocabulary = JSON.parse(localStorage.getItem('vocabulary')) || {};
                vocabulary[language] = vocabulary[language] || [];
                vocabulary[language].push({ word, translation, example });
                localStorage.setItem('vocabulary', JSON.stringify(vocabulary));
                alert("Vocabulaire ajouté avec succès!");
                document.getElementById('addForm').reset();
            } else {
                alert("Veuillez remplir tous les champs.");
            }
        });
    }
});

function displayFlashcards(words, direction) {
    const content = document.getElementById('content');
    content.innerHTML = `
        <div id="flashcard-container" class="flashcard-container"></div>
        <div class="buttons">
            <button class="next-button" onclick="nextCard()">Mot suivant</button>
            <button class="home-button" onclick="navigateTo('index.html')">Revenir à l'accueil</button>
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
                    <div class="example-usage">
                        Exemple d'utilisation
                        <div class="example-text">${words[index].example}</div>
                    </div>
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

function startTest() {
    const language = localStorage.getItem('selectedLanguage');
    const direction = localStorage.getItem('selectedDirection');
    const words = JSON.parse(localStorage.getItem('vocabulary'))[language];
    if (!words || words.length === 0) {
        document.getElementById('content').innerHTML = "<p>Aucun vocabulaire disponible pour cette langue.</p>";
        return;
    }
    const numQuestions = parseInt(prompt("Combien de questions souhaitez-vous?"));
    if (isNaN(numQuestions) || numQuestions <= 0 || numQuestions > words.length) {
        alert("Nombre de questions invalide.");
        return;
    }
    const testWords = getRandomWords(words, numQuestions);
    runTest(testWords, direction);
}

function getRandomWords(words, num) {
    let shuffled = words.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
}

function runTest(words, direction) {
    const content = document.getElementById('content');
    content.innerHTML = '<div id="test"></div>';
    const testDiv = document.getElementById('test');
    let index = 0;
    let correct = 0;

    function showQuestion() {
        if (index >= words.length) {
            testDiv.innerHTML = `<p>Test terminé! Vous avez réussi ${correct} sur ${words.length} questions.</p>`;
            return;
        }
        testDiv.innerHTML = `
            <p>Traduisez: ${direction === 'toTarget' ? words[index].word : words[index].translation}</p>
            <input type="text" id="answer">
            <button onclick="checkAnswer()">Vérifier</button>
        `;
    }

    window.checkAnswer = function() {
        const answer = document.getElementById('answer').value.trim().toLowerCase();
        if (answer === (direction === 'toTarget' ? words[index].translation : words[index].word).toLowerCase()) {
            correct++;
        }
        index++;
        showQuestion();
    }

    showQuestion();
}

function viewVocabulary() {
    const language = localStorage.getItem('selectedLanguage');
    const words = JSON.parse(localStorage.getItem('vocabulary'))[language];
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
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                ${words.map((word, index) => `
                    <tr>
                        <td>${word.word}</td>
                        <td>${word.translation}</td>
                        <td>${word.example}</td>
                        <td>
                            <button onclick="editVocabulary('${language}', ${index})">Modifier</button>
                            <button onclick="deleteVocabulary('${language}', ${index})">Supprimer</button>
                        </td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;
}

function editVocabulary(language, index) {
    const word = prompt("Modifiez le mot:", vocabulary[language][index].word);
    const translation = prompt("Modifiez la traduction:", vocabulary[language][index].translation);
    const example = prompt("Modifiez l'exemple:", vocabulary[language][index].example);
    if (word && translation && example) {
        vocabulary[language][index] = { word, translation, example };
        localStorage.setItem('vocabulary', JSON.stringify(vocabulary));
        window.location.reload();
    }
}

function deleteVocabulary(language, index) {
    if (confirm("Êtes-vous sûr de vouloir supprimer ce mot ?")) {
        vocabulary[language].splice(index, 1);
        localStorage.setItem('vocabulary', JSON.stringify(vocabulary));
        window.location.reload();
    }
}
