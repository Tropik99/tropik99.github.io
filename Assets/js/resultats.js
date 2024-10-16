document.addEventListener('DOMContentLoaded', () => {
    const userName = localStorage.getItem('userName');
    const userFormation = localStorage.getItem('userFormation');
    const scores = JSON.parse(localStorage.getItem('scores')) || [];
    
    const userScore = scores.find(score => score.name === userName && score.formation === userFormation);
    
    if (userScore) {
        const userResultEl = document.getElementById('userResult');
        userResultEl.innerHTML = `
            <h2>Félicitations, ${userScore.name} !</h2>
            <p>Formation : ${userScore.formation}</p>
            <p>Votre score : ${userScore.score} / 20</p>
            <p>${getScoreMessage(userScore.score)}</p>
        `;
    }
    
    displayTopScores(scores);
});

function getScoreMessage(score) {
    if (score >= 18) {
        return "Excellent ! Vous êtes un expert en cybersécurité !";
    } else if (score >= 14) {
        return "Très bien ! Vous avez de solides connaissances en cybersécurité.";
    } else if (score >= 10) {
        return "Pas mal ! Vous avez les bases, mais il y a encore de la place pour l'amélioration.";
    } else {
        return "Vous devriez approfondir vos connaissances en cybersécurité. Continuez à apprendre !";
    }
}

function displayTopScores(scores) {
    const topScoresEl = document.getElementById('topScores');
    const sortedScores = scores.sort((a, b) => b.score - a.score).slice(0, 5);
    
    sortedScores.forEach((score, index) => {
        const li = document.createElement('li');
        li.classList.add('list-group-item');
        li.textContent = `${index + 1}. ${score.name} (${score.formation}) - Score : ${score.score}/20`;
        topScoresEl.appendChild(li);
    });
}