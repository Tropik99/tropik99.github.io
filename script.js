// Questions du quiz
const questions = [
    {
        question: "Qu'est-ce qu'un pare-feu (firewall) ?",
        options: [
            "Un logiciel antivirus",
            "Un dispositif de sécurité réseau",
            "Un type de mot de passe",
            "Un protocole de cryptage"
        ],
        correctAnswer: 1
    },
    {
        question: "Qu'est-ce qu'une attaque par hameçonnage (phishing) ?",
        options: [
            "Une tentative de surcharger un serveur",
            "Une tentative de deviner un mot de passe",
            "Une tentative de tromper l'utilisateur pour obtenir des informations sensibles",
            "Une tentative d'intercepter des données sur un réseau Wi-Fi"
        ],
        correctAnswer: 2
    },
    {
        question: "Quelle est la meilleure pratique pour créer un mot de passe sécurisé ?",
        options: [
            "Utiliser votre date de naissance",
            "Utiliser le même mot de passe pour tous vos comptes",
            "Utiliser une combinaison de lettres, chiffres et caractères spéciaux",
            "Utiliser le nom de votre animal de compagnie"
        ],
        correctAnswer: 2
    },
    {
        question: "Qu'est-ce qu'un VPN ?",
        options: [
            "Un virus très puissant",
            "Un réseau privé virtuel",
            "Un nouveau langage de programmation",
            "Un type de carte réseau"
        ],
        correctAnswer: 1
    },
    {
        question: "Qu'est-ce que le chiffrement de bout en bout ?",
        options: [
            "Une méthode pour accélérer la connexion Internet",
            "Une technique pour réduire la taille des fichiers",
            "Un système où seuls l'expéditeur et le destinataire peuvent lire les messages",
            "Un type de câble réseau"
        ],
        correctAnswer: 2
    },
    {
        question: "Qu'est-ce qu'une attaque par déni de service (DDoS) ?",
        options: [
            "Une tentative de voler des données",
            "Une tentative de rendre un service inaccessible en le surchargeant",
            "Une tentative de prendre le contrôle d'un ordinateur",
            "Une tentative de deviner un mot de passe"
        ],
        correctAnswer: 1
    },
    {
        question: "Qu'est-ce que l'authentification à deux facteurs (2FA) ?",
        options: [
            "Un système qui nécessite deux mots de passe",
            "Un système qui utilise deux méthodes différentes pour vérifier l'identité",
            "Un système qui vérifie l'identité toutes les deux heures",
            "Un système qui nécessite l'approbation de deux personnes"
        ],
        correctAnswer: 1
    },
    {
        question: "Qu'est-ce qu'un logiciel malveillant (malware) ?",
        options: [
            "Un logiciel qui protège contre les virus",
            "Un logiciel conçu pour endommager ou infiltrer un système informatique",
            "Un logiciel qui optimise les performances de l'ordinateur",
            "Un logiciel qui gère les mises à jour système"
        ],
        correctAnswer: 1
    },
    {
        question: "Qu'est-ce que le hachage de mot de passe ?",
        options: [
            "Une technique pour rendre les mots de passe plus courts",
            "Une méthode pour stocker les mots de passe de manière sécurisée",
            "Une attaque pour deviner les mots de passe",
            "Une façon de partager des mots de passe en toute sécurité"
        ],
        correctAnswer: 1
    },
    {
        question: "Qu'est-ce qu'une politique de mot de passe ?",
        options: [
            "Une loi gouvernementale sur la création de mots de passe",
            "Un ensemble de règles pour créer et gérer les mots de passe dans une organisation",
            "Un logiciel qui génère des mots de passe aléatoires",
            "Un type de cryptage pour les mots de passe"
        ],
        correctAnswer: 1
    },
    {
        question: "Qu'est-ce que le principe du moindre privilège ?",
        options: [
            "Donner à chaque utilisateur tous les droits d'accès possibles",
            "Limiter les droits d'accès au minimum nécessaire pour effectuer une tâche",
            "Interdire tout accès aux systèmes sensibles",
            "Accorder des privilèges uniquement aux administrateurs"
        ],
        correctAnswer: 1
    },
    {
        question: "Qu'est-ce qu'une mise à jour de sécurité ?",
        options: [
            "Une nouvelle fonctionnalité ajoutée à un logiciel",
            "Un correctif qui résout des vulnérabilités de sécurité",
            "Une augmentation de la vitesse du processeur",
            "Un changement dans l'interface utilisateur"
        ],
        correctAnswer: 1
    },
    {
        question: "Qu'est-ce que le 'social engineering' en cybersécurité ?",
        options: [
            "L'utilisation des réseaux sociaux pour promouvoir la sécurité",
            "La création de profils de médias sociaux sécurisés",
            "L'exploitation des faiblesses humaines pour obtenir des informations",
            "L'analyse des comportements sociaux en ligne"
        ],
        correctAnswer: 2
    },
    {
        question: "Qu'est-ce qu'une sauvegarde (backup) ?",
        options: [
            "Une copie de données stockée séparément pour prévenir la perte de données",
            "Un type de virus informatique",
            "Une méthode pour accélérer l'ordinateur",
            "Un processus de nettoyage du disque dur"
        ],
        correctAnswer: 0
    },
    {
        question: "Qu'est-ce qu'un certificat SSL/TLS ?",
        options: [
            "Un diplôme en sécurité informatique",
            "Un document qui authentifie l'identité d'un site web",
            "Une licence pour utiliser des logiciels de cryptage",
            "Un type de pare-feu"
        ],
        correctAnswer: 1
    },
    {
        question: "Qu'est-ce que le 'patching' en cybersécurité ?",
        options: [
            "La réparation de câbles réseau endommagés",
            "L'application de mises à jour pour corriger des vulnérabilités",
            "La création de nouveaux mots de passe",
            "Le blocage de l'accès à certains sites web"
        ],
        correctAnswer: 1
    },
    {
        question: "Qu'est-ce qu'une politique de sécurité de l'information ?",
        options: [
            "Une loi sur la protection des données",
            "Un ensemble de règles définissant comment protéger les actifs informationnels",
            "Un logiciel de sécurité",
            "Un type de chiffrement"
        ],
        correctAnswer: 1
    },
    {
        question: "Qu'est-ce que le 'endpoint security' ?",
        options: [
            "La sécurité des serveurs centraux",
            "La protection des appareils connectés au réseau (ordinateurs, smartphones, etc.)",
            "La sécurité des câbles réseau",
            "Un protocole de communication sécurisé"
        ],
        correctAnswer: 1
    },
    {
        question: "Qu'est-ce qu'une analyse de vulnérabilité ?",
        options: [
            "Un examen médical pour les professionnels de l'informatique",
            "Un processus pour identifier les faiblesses dans les systèmes informatiques",
            "Une méthode pour tester la vitesse d'un réseau",
            "Une technique pour améliorer les performances des logiciels"
        ],
        correctAnswer: 1
    },
    {
        question: "Qu'est-ce que le RGPD ?",
        options: [
            "Un nouveau type de câble réseau",
            "Un virus informatique très dangereux",
            "Le Règlement Général sur la Protection des Données",
            "Un protocole de sécurité pour les e-mails"
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