var point = 0
var userChoice;
var ans;

var computerChoice;

var sound;

function returnImge(i)
{
    if(i === "rock")
        return "<img class='img' src='https://github.com/Ashish1322/rockPaperScisor/blob/master/rock1.png?raw=true' alt='rock' '/>"
    if( i=== "paper")
        return "<img class='img' src='https://github.com/Ashish1322/rockPaperScisor/blob/master/paper1.png?raw=true' alt='rock' />"
    if(i==="scissor")
        return "<img class='img' src='https://github.com/Ashish1322/rockPaperScisor/blob/master/scissor1.png?raw=true' alt='rock'  />"
    
}

async function finalChange()
{
    document.getElementById("first").innerHTML = returnImge(userChoice)
    document.getElementById("second").innerHTML = "";
    document.getElementById("third").innerHTML = "";
    await new Promise(r => setTimeout(r, 1000));
    playSound("cardput")
    document.getElementById("third").innerHTML = returnImge(computerChoice)
    await new Promise(r => setTimeout(r, 1000));
    playSound(sound)
    document.getElementById("second").innerHTML = "<h1 class='ans mt-5'> " + ans + "<h1>"

 document.getElementById("point").innerHTML = "Point : " +point;  
}

function reset()
{
    playSound("cardput")
    document.getElementById("first").innerHTML = '<img onclick="rock()" class="img" src="https://github.com/Ashish1322/rockPaperScisor/blob/master/rock1.png?raw=true" alt="">'
    document.getElementById("second").innerHTML = '    <img onclick="paper()" class="img" src="https://github.com/Ashish1322/rockPaperScisor/blob/master/paper1.png?raw=true" alt="">'
    document.getElementById("third").innerHTML = '  <img onclick="scissor()" class="img" src="https://github.com/Ashish1322/rockPaperScisor/blob/master/scissor1.png?raw=true" alt="">'
}

function playSound(id)
{
    var s = document.getElementById(id);
    s.play();
}

function calCulate()
{
  
    if(userChoice === computerChoice)
    {
        ans = "Draw"
        sound  = "cardput";
        return
    }
    if(userChoice==="rock")
    {
        if(computerChoice === "paper")
        {
            ans = "YouLose";
            sound  = "loose";
            point = point - 1
         
        }

        if(computerChoice === "scissor")
        {
            ans = "You Won";
            sound  = "win";
            point = point + 1
            return
        }

    }

    if(userChoice === "paper")
    {
        if(computerChoice === "scissor")
        {
            ans = "You Lose"
            sound  = "loose";
            point = point - 1
            return
        }

        if(computerChoice === "rock")
        {

            ans = "You Won"
            sound  = "win";
            point = point + 1
            return
        }
        
    }
    if(userChoice === "scissor")
    {
        if(computerChoice === "paper")
        {
            ans = "You Won"
            sound  = "win";
            point = point + 1
            return
        }
        if(computerChoice === "rock")
        {
            ans = "You Lose"
            sound  = "loose";
            point = point - 1
            
        }
    }


}

function setComputerChoice()
{
    var arr = ["rock","paper","scissor"]
    computerChoice = arr[Math.floor(Math.random() * arr.length)]
    calCulate()
    finalChange()
   
}

function rock()
{
 playSound("cardput")
 userChoice = "rock"
 setComputerChoice()
}

function paper()
{
    playSound("cardput")
    userChoice = "paper"
    setComputerChoice()

}

function scissor()
{
    playSound("cardput")
    userChoice = "scissor"
    setComputerChoice()
}
