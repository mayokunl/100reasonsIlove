const reasons = [
        "1. Your eyes, i get lost in them often", 
        "2. Your unique fixations (they've become mine and i love you for it, i cant imagine my life without moio, sailor, boarders , and more)",
        "3. Your ability to make me laugh (ive never laughed so much than when im with you, and i love it)",
        "4. The sibling that you are (you treat your siblings with respect and cover for them when you dont need to)",
        "5. Your faith (yes believe it or not i love how faithful you are to islam, and i strive to be as spiritual as you)",
        "6. Your Kindness to everyone (including me), even though they may not deserve it ",
        "7. Your forgiveness (ive done a lot, i hate myself for it but you always forgive me",
        "8. YOURE A PERFECT PRETTY PRINCESS (duhh)",
        "9. You've become one of my favorite people, (now i know how much quality time acc means to me) ", 
        "10. You've kept me captivated since the day ive met you and theres never a dull moment",
        "11. Your patience, (thank you for always putting up with me) ",
        "12. Your hardwork , your the definition of doubling your hustle , and you remind me to always double mine ",
        "13. You always push me to be better, and i am better now because of you so Thank you :)",
        ":( you have reached the end, come back tomorrow for a new reason",
    ];

let currentIndex = -1;

function showNextReason() {
    if (currentIndex < reasons.length -1) {
        currentIndex++;
        document.getElementById("display").innerText = reasons[currentIndex];
    }
}

function showPrevReason() {
    if (currentIndex > 0) {
        currentIndex--;
        document.getElementById("display").innerText = reasons[currentIndex];
    }
}



