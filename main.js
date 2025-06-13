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
        "14. Body is TEAAAAAAAAAAAA",
        "15. Your ability to take the high road every single time",
        "16. Your my PRE MED PRINCESS, you saved ayo's life, your gonna save so many, your so cute, your gonna be the cutest doctor , like bruh i just love ",
        "17, I love that when i see you i see great things, like no matter who we are to eachother I know im always going to be able to look back and say, - that babe was amazing",
        "18, Your Smile, (The dopamine hit manz gets everytime I see you smile is undescribable)",
        "19, Your hugs and kisses (Missing them heavy right now) #needthat - i miis you ",
        "20, How you look at me, i see in your eyes that you truly love me, i see how much this experience with you is once in a lifetime",
        "21, I love how much i miss you, you are so beautiful, and so sweet, I LOVEEE ",
        "22. I love how vulnerable you are with me, it means a lot to me that you trust me",
        "23. Off of my last point , I love im becoming more and more vulnerable with you, I never thought i would be able to open up like this",
        "24. I love how you make me bask in my wins, nothing is to small for you, and to you everything is a big achievement ",
        "25. I love how your abscence has only made my heart grow fonder, I miss you so much baby, and i can wait to be back on campus", 
        "26. I love how you respect my boundaries , no means no and you understand that",
        "27, I love how you look at me, it just makes me wanna BITE YOU ", 
        "28, I love how everyday you teach me more and more what love is, this is my first time being in love, I love you, and i mean that",
        "29, When im with you , i feel like we are the only two people in the world, whether its puttshack, katies pizza, main event or my apartment, (more dates to come)",
        "30, I know i said your body but I need you to realize , your body IS BEAUTIFUL, your body is a vessel for everything that you are, just like how you sparkle , your body sparkles, (madam clear skin)",
        "31, You allow me to be myself, i do weird shit and you think its cute",
        "32, You sacrifice and work so hard, without even realizing that you are.",
        "33, You are HOT, like you make my temperature higher when i see you",
        "34, You make me forget my problems, thank you :) ", 
        "35, You are the sweetest girl i know, and people may not see that but i see it, please dont stop being sweet",
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



