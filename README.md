# "Janken" - Rock✊, Paper,🖐️ Scissors✌️
A game where you have a 'Janken' match with a computer that randomly generates its choice (rock, paper, or scissors).

## Description
"Janken" is essentially the Japanese version of Rock, Paper, Scissors. I chose this name after being inspired by Hunter X Hunter, where the main protagonist, Gon, uses "Janken" as his fighting technique, and also because I'm a fan of anime.

## Problem Solving Approach

### Understand the Problem
The player will choose which hand they want to play (rock, paper, or scissors). After the player makes their choice, the program will randomly assign a hand to the computer. Then, the program will compare the player's hand to the computer's hand. If the player chooses rock, they win if the computer's hand is scissors, they lose if the computer's hand is paper, and if both have the same hand, it's a tie. The same rules apply for the other hands: scissors win against paper, paper wins against rock, and rock wins against scissors.

### Plan
#### Interface
- For now, the program will be accessible through the browser console. However, my ultimate goal is to develop a graphical user interface (GUI) for the final product. Additionally, I plan to introduce a multiplayer mode instead of just playing against a computer with a randomly generated hand. This feature will allow friends to compete against each other, enhancing the fun and interaction within the game.

#### Input
- The inputs for the game will consist of the player's choice, represented by numbers since there is no GUI yet. Players will input 1 for Rock, 2 for Paper, and 3 for Scissors.

#### Output
- The desired output of the game is to display whether the player wins or loses based on the comparison performed by the program.

#### Pseudocode
```
Player chooses a hand to play
Randomly generate a hand for the computer
Compare the player's hand to the computer's hand
    If the player's hand is the same with the computer's hand
        Display "Tie!"
    Else if the player's hand is Rock
        Check if the computer's hand is Scissors
            Display "You win!"
        Else
            Display "You lose..."
    Else if the player's hand is Paper
        Check if the computer's hand is Rock
            Display "You win!"
        Else
            Display "You lose..."
    Else if the player's hand is Scissors
        Check if the computer's hand is Paper
            Display "You win!"
        Else
            Display "You lose!"
```

