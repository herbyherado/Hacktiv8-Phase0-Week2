# Battleship
----
Running *battleship.js* will require the use of Node.js®.
Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine and if you have not installed it yet, you can download it through [here](https://nodejs.org/en/). 

Make sure to have the latest release to get the most of it.

If you're unsure and would like to check whether you have installed it in your computer or not, you can check through the following command in your *terminal*:

    node -v
 
-------

## Running the file

Locate the file's folder directory through *terminal*. If you're unsure, you can access the directory with the **cd** command. For example, if you've recently just downloaded the file and had it saved in a folder named *Downloads*, you may type in:
   
    cd Downloads/

After locating the directory, to run the file, simply type in:

    node battleship.js


## Playing the game

A 5x5 board will be provided for you to guess where the hidden battleship is, example as follow:
    
    O O O O O
    O O O O O
    O O O O O
    O O O O O
    O O O O O

You will get to have 5 turns to guess where the hidden battleship is.

Input range will be set from '0' to '4'. An input of '5' (or more) or less than '0' will be considered out of bounds. 

For each turn, your input will be processed and marked with an 'X' in the board. For example, inputting for: 
    
    Guess Row: 2
    Guess Column: 0

Will result as follow:

    O O O O O
    O O O O O
    X O O O O
    O O O O O
    O O O O O

If you've successfully guessed where the hidden battleship is, result will be marked and showed with an 'I' in the board.

Good luck Captain! :anchor: 


> --herbyherado