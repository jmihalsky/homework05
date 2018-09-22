var level = "level1";

var level1 = [
     {
        question: "Which rap group was totally crossed out?",
        a: "2 Pac",
        b: "Kris Kross",
        C: "2 Live Crew",
        d: "M C Hammer",
        aswr: "b"
    },
    {
        question: "Who sang 'Renegades Of Funk'?",
        a: "Rage Against the Machine",
        b: "Red Hot Chili Peppers",
        c: "George Clinton",
        d: "U2",
        aswr: "a"
    },
    {
        question: "What movie star danced Mary Jane's Last Dance with Tom Petty?",
        a: "Courtney Cox",
        b: "Heather Locklear",
        c: "Julia Roberts",
        d: "Kim Basinger",
        aswr: "d"
    },
    {
        question: "Who bumped Michael Jackson off the number 1 spot in January 1992?",
        a: "Nirvana",
        b: "Mariah Carey",
        c: "Whitney Houston",
        d: "Pearl Jam",
        aswr: "a"
    },
    {
        question: "What is Pearl Jam's second album?",
        a: "Ten",
        b: "No Code",
        c: "Binaural",
        d: "Vs",
        aswr: "d"
    },
    {
        question: "What is the correct order of Nirvana studio albums by release date (oldest to newest)?",
        a: "In Utero, Nevermind, Bleach",
        b: "Nevermind, Bleach, In Utero",
        c: "Bleach, Nevermind, In Utero",
        d: "Blech, In Utero, Nevermind",
        aswr: "c"
    },
    {
        question: "Which girl group said 'If you want my future, forget my past. If you wanna get with me, better make it last'?",
        a: "TLC",
        b: "Spice Girls",
        c: "En Vogue",
        d: "Salt n Pepa",
        aswr: "b"
    },
    {
        question: "Which band's 1994 live reunion tour is titled 'Hell Freezes Over'?",
        a: "Guns n Roses",
        b: "Black Sabbath",
        c: "The Smiths",
        d: "Eagles",
        aswr: "d"
    },
    {
        question: "Who legally adopted a symbol to replace his name in 1993?",
        a: "Michael Jackson",
        b: "Elton John",
        c: "Prince",
        d: "Vanilla Ice",
        aswr: "c"
    },
    {
        question: "What nationality is the 1990s pop group 'Ace of Base'? ",
        a: "Swedish",
        b: "Norwegian",
        c: "French",
        d: "Danish",
        aswr: "a"
    }

];

$("#start_btn").on("click",function() {
    $(".start").css("display","none");
    set_questions();

});

function set_questions(){
    if(level == "level1")
    {
        for(var i = 0; i < level1.length; i++)
        {
            question(i);
        }    
    }
    else if (level == "level2")
    {

    }
}

function question(x){
    var clss = x;
    console.log(clss);
    console.log(level1[x].question);
    var ques_col = $("<div>");
    ques_col.addClass("quest " + clss);
    ques_col.text = level1[x].question;
    console.log(ques_col);
    $(".ques-space").append(ques_col);
}