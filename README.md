# "Janken" - Rock✊, Paper,🖐️, Scissors✌️

A game where you have a 'Janken' match with a computer that randomly generates its choice (rock, paper, or scissors) for five rounds. The winner is the first to reach a score of three wins.

![image](https://github.com/zen-pb/janken/assets/111935236/7348329d-f46f-49c3-8f58-19a29dff2f35)

## Description

"Janken" is essentially the Japanese version of Rock, Paper, Scissors. I chose this name after being inspired by Hunter X Hunter, where the main protagonist, Gon, uses "Janken" as his fighting technique, and also because I'm a fan of anime.

## Features
- Choose between rock, paper, and scissors.
- Best-of-three scoring system.
- Clear indication of the winner of each round.
- Play again option when the game concludes.

![janken](https://github.com/zen-pb/janken/assets/111935236/297926a1-1981-4894-be1d-f1189fd8ca41)

## Problem Solving Approach

This part of the document is now outdated since I have implemented all the features I wanted for the game, with occasional updates to the UI (assuming I won't be updating for a while because I tend to procrastinate XD). However, I will leave it here for others to see the foundation of creating the app and how it has progressed to this point.

### Understanding the Problem

The player will choose which hand they want to play (rock, paper, or scissors). After the player makes their choice, the program will randomly assign a hand to the computer. Then, the program will compare the player's hand to the computer's hand. If the player chooses rock, they win if the computer's hand is scissors, they lose if the computer's hand is paper, and if both have the same hand, it's a tie. The same rules apply for the other hands: scissors win against paper, paper wins against rock, and rock wins against scissors. This process will repeat for 5 rounds, and the first to reach three wins will be declared the overall winner.

### Plan

#### Interface

- For now, the program will be accessible through the browser console. However, my ultimate goal is to develop a graphical user interface (GUI) for the final product.

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
        Else
            Display "Dude, what did you enter?"
Endwhile
If the playerScore is greater than computerScore
    Display "Congratulations! You win!"
Else
    Display "You lose! Try again..."
End
```
## Technologies
- Built with HTML, CSS, and vanilla JavaScript.

## Attributions

This project uses the following icons with grateful acknowledgment to their creators:

- **icon.png**: Created by Freepik from www.flaticon.com
- **versus.png**: Created by tulpahn from www.flaticon.com
- **rock-paper-scissors.png**: Created by Flat Icons from www.flaticon.com
- **fill.png**: Created by Google from www.flaticon.com
- **GitHub Mark:** [GitHub Logo](https://github.com/logos)

## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details