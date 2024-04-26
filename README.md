# "Janken" - Rock✊, Paper,🖐️ Scissors✌️
A game where you have a 'Janken' match with a computer that randomly generates its choice (rock, paper, or scissors) for five rounds. The winner is the first to reach a score of three wins.

## Description
"Janken" is essentially the Japanese version of Rock, Paper, Scissors. I chose this name after being inspired by Hunter X Hunter, where the main protagonist, Gon, uses "Janken" as his fighting technique, and also because I'm a fan of anime.

## Features
- getComputerChoice() function to randomly generate hand for the computer.
- getPlayerChoice() function to get the player input.
- Game scores. If either the player or the computer gets a score of 3, the game ends and outputs the winner.
- playRound() function to play a round of the game inside the;
- playGame() function to play 5 rounds of game and whoever gets to score of 3 first wins.

## Problem Solving Approach

### Understand the Problem
The player will choose which hand they want to play (rock, paper, or scissors). After the player makes their choice, the program will randomly assign a hand to the computer. Then, the program will compare the player's hand to the computer's hand. If the player chooses rock, they win if the computer's hand is scissors, they lose if the computer's hand is paper, and if both have the same hand, it's a tie. The same rules apply for the other hands: scissors win against paper, paper wins against rock, and rock wins against scissors. This process will repeat for 5 rounds, and the first to reach three wins will be declared the overall winner.

### Plan
#### Interface
- For now, the program will be accessible through the browser console. However, my ultimate goal is to develop a graphical user interface (GUI) for the final product. Additionally, I plan to introduce a multiplayer mode instead of just playing against a computer with a randomly generated hand. This feature will allow friends to compete against each other, enhancing the fun and interaction within the game.

#### Input
- The inputs for the game will consist of the player's choice, represented by numbers since there is no GUI yet. Players will type to the prompt 'rock' for Rock, 'paper' for Paper, and 'scissors' for Scissors.

#### Output
- The desired output of the game is to display whether the player wins or loses based on the comparison performed by the program.

#### Pseudocode
```
Start
Initialize playerScore and computerScore to 0
While playerScore and computerScore is not equal to 3
    Player chooses a hand to play
    Randomly generate a hand for the computer
    Compare the player's hand to the computer's hand
        If the player's hand is the same with the computer's hand
            Display "Tie!"
        Else if the player's hand is Rock
            If the computer's hand is Scissors
                Display "You win!"
                Increment playerScore by one
            Else
                Display "You lose..."
                Increment computerScore by one
        Else if the player's hand is Paper
            If the computer's hand is Rock
                Display "You win!"
                Increment playerScore by one
            Else
                Display "You lose..."
                Increment computerScore by one
        Else if the player's hand is Scissors
            If the computer's hand is Paper
                Display "You win!"
                Increment playerScore by one
            Else
                Display "You lose!"
                Increment computerScore by one
Endwhile
If the playerScore is greater than computerScore
    Display "Congratulations! You win!"
Else
    Display "You lose! Try again..."
End
```

