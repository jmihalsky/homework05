var level = "level1";
var correct = 0;
var wrong = 0;
var unaswr = 0;
var timer_run = false;

var level1 = [
     {
        question: "Which rap group was totally crossed out?",
        opt: ["2 Pac","Kris Kross","2 Live Crew","M C Hammer"],
        aswr: 1
    },
    {
        question: "Who sang 'Renegades Of Funk'?",
        opt: ["Rage Against the Machine","Red Hot Chili Peppers","George Clinton","U2"],
        aswr: 0
    },
    {
        question: "What movie star danced Mary Jane's Last Dance with Tom Petty?",
        opt: ["Courtney Cox","Heather Locklear","Julia Roberts","Kim Basinger"],
        aswr: 3
    },
    {
        question: "Who bumped Michael Jackson off the number 1 spot in January 1992?",
        opt: ["Nirvana","Mariah Carey","Whitney Houston","Pearl Jam"],
        aswr: 0
    },
    {
        question: "What is Pearl Jam's second album?",
        opt: ["Ten","No Code","Binaural","Vs"],
        aswr: 3
    },
    {
        question: "What is the correct order of Nirvana studio albums by release date (oldest to newest)?",
        opt: ["In Utero, Nevermind, Bleach","Nevermind, Bleach, In Utero","Bleach, Nevermind, In Utero","Blech, In Utero,Nevermind"],
        aswr: 2
    },
    {
        question: "Which girl group said 'If you want my future, forget my past. If you wanna get with me, better make it last'?",
        opt: ["TLC","Spice Girls","En Vogue","Salt n Pepa"],
        aswr: 1
    },
    {
        question: "Which band's 1994 live reunion tour is titled 'Hell Freezes Over'?",
        opt: ["Guns n Roses","Black Sabbath","The Smiths","Eagles"],
        aswr: 3
    },
    {
        question: "Who legally adopted a symbol to replace his name in 1993?",
        opt: ["Michael Jackson","Elton John","Prince","Vanilla Ice"],
        aswr: 2
    },
    {
        question: "What nationality is the 1990s pop group 'Ace of Base'? ",
        opt: ["Swedish","Norwegian","French","Danish"],
        aswr: 0
    }

];

$("#start_btn").on("click",function() {
    $("#start_btn").css("display","none");
    set_questions();
    $("#submit").css("display","block");
});

function set_questions(){
    if(level == "level1")
    {
        for(var i = 0; i < level1.length; i++)
        {
            question(i);
            options(i);
            if(!timer_run)
            {
                timer_run = true;
            }
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
    ques_col.html("<br>"+ level1[x].question+"</br>");
    console.log(ques_col);

    $(".ques-space").append(ques_col);
}

function options(x){
    var ques_opt = $("<div>");
    ques_opt.addClass("Q"+x);
    for(var i=0; i<level1[x].opt.length;i++){
        var InputOpt = $("<input>");
        InputOpt.attr("type","radio");
        InputOpt.attr("name", x);
        InputOpt.attr("id", i);
        var lbl = $("<label>");
        lbl.attr("for",i);
        lbl.html(level1[x].opt[i]);
        ques_opt.append(InputOpt);
        ques_opt.append(lbl);
    }

    $(".ques-space").append(ques_opt);
    
}

$("#submit").on("click",function() {
    if (level == "level1")
    {
        for(var i = 0; i < level1.length; i++)
        {
            answr_valid(i);
            score();
        }
    }
    else if (level == "level2")
    {

    }
});

function answr_valid(x){
    if($("input[name="+x+"]:checked").attr("id") == level1[x].aswr)
    {
        correct++;
    }
    else if($("input[name="+x+"]:checked").val() === undefined)
    {
        unaswr++;
    }
    else
    {
        wrong++;
    }
    
}

function score(){

}