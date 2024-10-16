// Questions du quiz
const questions = [
    {
        question: "Qu'est-ce qu'un pare-feu (firewall) ?",
        options: [
            "A. Un logiciel antivirus",
            "B. Un dispositif de sécurité réseau",
            "C. Un type de mot de passe",
            "D. Un protocole de cryptage"
        ],
        correctAnswer: 1
    },
    {
        question: "Qu'est-ce qu'une attaque par hameçonnage (phishing) ?",
        options: [
            "A. Une tentative de surcharger un serveur",
            "B. Une tentative de deviner un mot de passe",
            "C. Une tentative de tromper l'utilisateur pour obtenir des informations sensibles",
            "D. Une tentative d'intercepter des données sur un réseau Wi-Fi"
        ],
        correctAnswer: 2
    },
    {
        question: "Quelle est la meilleure pratique pour créer un mot de passe sécurisé ?",
        options: [
            "A. Utiliser votre date de naissance",
            "B. Utiliser le même mot de passe pour tous vos comptes",
            "C. Utiliser une combinaison de lettres, chiffres et caractères spéciaux",
            "D. Utiliser le nom de votre animal de compagnie"
        ],
        correctAnswer: 2
    },
    {
        question: "Qu'est-ce qu'un VPN ?",
        options: [
            "A. Un virus très puissant",
            "B. Un réseau privé virtuel",
            "C. Un nouveau langage de programmation",
            "D. Un type de carte réseau"
        ],
        correctAnswer: 1
    },
    {
        question: "Qu'est-ce que le chiffrement de bout en bout ?",
        options: [
            "A. Une méthode pour accélérer la connexion Internet",
            "B. Une technique pour réduire la taille des fichiers",
            "C. Un système où seuls l'expéditeur et le destinataire peuvent lire les messages",
            "D. Un type de câble réseau"
        ],
        correctAnswer: 2
    },
    {
        question: "Qu'est-ce qu'une attaque par déni de service (DDoS) ?",
        options: [
            "A. Une tentative de voler des données",
            "B. Une tentative de rendre un service inaccessible en le surchargeant",
            "C. Une tentative de prendre le contrôle d'un ordinateur",
            "D. Une tentative de deviner un mot de passe"
        ],
        correctAnswer: 1
    },
    {
        question: "Qu'est-ce que l'authentification à deux facteurs (2FA) ?",
        options: [
            "A. Un système qui nécessite deux mots de passe",
            "B. Un système qui utilise deux méthodes différentes pour vérifier l'identité",
            "C. Un système qui vérifie l'identité toutes les deux heures",
            "D. Un système qui nécessite l'approbation de deux personnes"
        ],
        correctAnswer: 1
    },
    {
        question: "Qu'est-ce qu'un logiciel malveillant (malware) ?",
        options: [
            "A. Un logiciel qui protège contre les virus",
            "B. Un logiciel conçu pour endommager ou infiltrer un système informatique",
            "C. Un logiciel qui optimise les performances de l'ordinateur",
            "D. Un logiciel qui gère les mises à jour système"
        ],
        correctAnswer: 1
    },
    {
        question: "Qu'est-ce que le hachage de mot de passe ?",
        options: [
            "A. Une technique pour rendre les mots de passe plus courts",
            "B. Une méthode pour stocker les mots de passe de manière sécurisée",
            "C. Une attaque pour deviner les mots de passe",
            "D. Une façon de partager des mots de passe en toute sécurité"
        ],
        correctAnswer: 1
    },
    {
        question: "Qu'est-ce qu'une politique de mot de passe ?",
        options: [
            "A. Une loi gouvernementale sur la création de mots de passe",
            "B. Un ensemble de règles pour créer et gérer les mots de passe dans une organisation",
            "C. Un logiciel qui génère des mots de passe aléatoires",
            "D. Un type de cryptage pour les mots de passe"
        ],
        correctAnswer: 1
    },
    {
        question: "Qu'est-ce que le principe du moindre privilège ?",
        options: [
            "A. Donner à chaque utilisateur tous les droits d'accès possibles",
            "B. Limiter les droits d'accès au minimum nécessaire pour effectuer une tâche",
            "C. Interdire tout accès aux systèmes sensibles",
            "D. Accorder des privilèges uniquement aux administrateurs"
        ],
        correctAnswer: 1
    },
    {
        question: "Qu'est-ce qu'une mise à jour de sécurité ?",
        options: [
            "A. Une nouvelle fonctionnalité ajoutée à un logiciel",
            "B. Un correctif qui résout des vulnérabilités de sécurité",
            "C. Une augmentation de la vitesse du processeur",
            "D. Un changement dans l'interface utilisateur"
        ],
        correctAnswer: 1
    },
    {
        question: "Qu'est-ce que le 'social engineering' en cybersécurité ?",
        options: [
            "A. L'utilisation des réseaux sociaux pour promouvoir la sécurité",
            "B. La création de profils de médias sociaux sécurisés",
            "C. L'exploitation des faiblesses humaines pour obtenir des informations",
            "D. L'analyse des comportements sociaux en ligne"
        ],
        correctAnswer: 2
    },
    {
        question: "Qu'est-ce qu'une sauvegarde (backup) ?",
        options: [
            "A. Une copie de données stockée séparément pour prévenir la perte de données",
            "B. Un type de virus informatique",
            "C. Une méthode pour accélérer l'ordinateur",
            "D. Un processus de nettoyage du disque dur"
        ],
        correctAnswer: 0
    },
    {
        question: "Qu'est-ce qu'un certificat SSL/TLS ?",
        options: [
            "A. Un diplôme en sécurité informatique",
            "B. Un document qui authentifie l'identité d'un site web",
            "C. Une licence pour utiliser des logiciels de cryptage",
            "D. Un type de pare-feu"
        ],
        correctAnswer: 1
    },
    {
        question: "Qu'est-ce que le 'patching' en cybersécurité ?",
        options: [
            "A. La réparation de câbles réseau endommagés",
            "B. L'application de mises à jour pour corriger des vulnérabilités",
            "C. La création de nouveaux mots de passe",
            "D. Le blocage de l'accès à certains sites web"
        ],
        correctAnswer: 1
    },
    {
        question: "Qu'est-ce qu'une politique de sécurité de l'information ?",
        options: [
            "A. Une loi sur la protection des données",
            "B. Un ensemble de règles définissant comment protéger les actifs informationnels",
            "C. Un logiciel de sécurité",
            "D. Un type de chiffrement"
        ],
        correctAnswer: 1
    },
    {
        question: "Qu'est-ce que le 'endpoint security' ?",
        options: [
            "A. La sécurité des serveurs centraux",
            "B. La protection des appareils connectés au réseau (ordinateurs, smartphones, etc.)",
            "C. La sécurité des câbles réseau",
            "D. Un protocole de communication sécurisé"
        ],
        correctAnswer: 1
    },
    {
        question: "Qu'est-ce qu'une analyse de vulnérabilité ?",
        options: [
            "A. Un examen médical pour les professionnels de l'informatique",
            "B. Un processus pour identifier les faiblesses dans les systèmes informatiques",
            "C. Une méthode pour tester la vitesse d'un réseau",
            "D. Une technique pour améliorer les performances des logiciels"
        ],
        correctAnswer: 1
    },
    {
        question: "Qu'est-ce que le RGPD ?",
        options: [
            "A. Un nouveau type de câble réseau",
            "B. Un virus informatique très dangereux",
            "C. Le Règlement Général sur la Protection des Données",
            "D. Un protocole de sécurité pour les e-mails"
        ],
        correctAnswer: 2
    }
];

let currentQuestion = 0;
let score = 0;
let timer;
let timeLeft = 30;

document.addEventListener('DOMContentLoaded', () => {
    const userForm = document.getElementById('userForm');
    userForm.addEventListener('submit', startQuiz);
});

function startQuiz(e) {
    e.preventDefault();
    const userName = document.getElementById('userName').value;
    const userFormation = document.getElementById('userFormation').value;
    
    // Sauvegarder les informations de l'utilisateur
    localStorage.setItem('userName', userName);
    localStorage.setItem('userFormation', userFormation);
    
    // Mélanger les questions
    shuffleArray(questions);
    
    // Remplacer le contenu de la page par le quiz
    document.querySelector('.container').innerHTML = `
        <div class="question-container">
            <h2 id="question"></h2>
            <div id="options"></div>
            <p class="timer mt-3">Temps restant : <span id="time">30</span> secondes</p>
        </div>
    `;
    
    loadQuestion();
}

function loadQuestion() {
    const questionEl = document.getElementById('question');
    const optionsEl = document.getElementById('options');
    const currentQ = questions[currentQuestion];
    
    questionEl.textContent = currentQ.question;
    optionsEl.innerHTML = '';
    
    currentQ.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('btn', 'btn-outline-primary', 'me-2', 'mb-2');
        button.addEventListener('click', () => checkAnswer(index));
        optionsEl.appendChild(button);
    });
    
    timeLeft = 30;
    startTimer();
}

function startTimer() {
    const timerEl = document.getElementById('time');
    timer = setInterval(() => {
        timeLeft--;
        timerEl.textContent = timeLeft;
        if (timeLeft === 0) {
            clearInterval(timer);
            checkAnswer(-1);
        }
    }, 1000);
}

function checkAnswer(userAnswer) {
    clearInterval(timer);
    const currentQ = questions[currentQuestion];
    const optionsEl = document.getElementById('options');
    const buttons = optionsEl.getElementsByTagName('button');
    
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
        if (i === currentQ.correctAnswer) {
            buttons[i].classList.add('correct');
        } else if (i === userAnswer) {
            buttons[i].classList.add('incorrect');
        }
    }
    
    if (userAnswer === currentQ.correctAnswer) {
        score++;
    }
    
    currentQuestion++;
    if (currentQuestion < questions.length) {
        setTimeout(loadQuestion, 2000);
    } else {
        setTimeout(endQuiz, 2000);
    }
}

function endQuiz() {
    const userName = localStorage.getItem('userName');
    const userFormation = localStorage.getItem('userFormation');
    
    // Sauvegarder le score
    const userScore = {
        name: userName,
        formation: userFormation,
        score: score
    };
    
    let scores = JSON.parse(localStorage.getItem('scores')) || [];
    scores.push(userScore);
    localStorage.setItem('scores', JSON.stringify(scores));
    
    // Rediriger vers la page de résultats
    window.location.href = 'resultats.html';
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}