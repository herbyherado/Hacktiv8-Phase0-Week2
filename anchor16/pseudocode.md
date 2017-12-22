    process.stdin.setEncoding('utf8');

    SET a variable `board` to an empty array
    SET a variable `turn` to 5

    define FUNCTION `printBoard` where it takes no argument:
         FOR `index` from 0 to less than 5 add an increment by 1:
            PRINT `board` by `index` with each value in the array separated by a space
         ENDFOR
    ENDFUNCTION

    define FUNCTION `initBoard` where it takes no argument:
        FOR `index 1` from 0 to less than 5 add an increment by 1:
            PUSH/ADD an empty array to `board`
            FOR `index 2` from 0 to less than 5 add an increment by 1:
                PUSH/ADD a character 'O' into `board` by `index 1`
            ENDFOR
        ENDFOR

        PRINT instructions to play the game
        CALL FUNCTION `printBoard`
    ENDFUNCTION

    CALL FUNCTION `initBoard`

    define FUNCTION `randomRow` that takes an array `board` as argument:
        RETURN a random number multiplied by length of an array `board` minus 1, rounded and with its absolute number
    ENDFUNCTION

    define FUNCTION `randomCol` that takes an array `board` as argument:
        RETURN a random number multiplied by length of an array `board`s first subscript minus 1 and rounded
    ENDFUNCTION

    SET a variable `shipRow` to FUNCTION `randomRow` which takes `board` as its argument
    SET a variable `shipCol` to FUNCTION `randomCol` which takes `board` as its argument

    PRINT value of `shipRow` to indicate 'hidden' position in row (in the array)
    PRINT value of `shipCol` to indicate 'hidden' position in column (in the array)

    SET a variable `questions` to an array that holds two string values - asking for the position of row and position of column

    SET a variable `guessAns` to an empty array that will hold values inputted through the CL interface
    
    SET a variable `askingForRow` to a boolean - true.

    define FUNCTION `askUser` where it takes no argument:
        IF `turn` is 0:
            SET array `board` with subscript position `shipRow` and `shipCol` to character 'I'
            PRINT description of randomized/hidden position denoted by character 'I'
            CALL FUNCTION `printBoard`
            RELAY to event listener 'exit' by nodeJs' process.exit()
        ELSE:
            CALL FUNCTION `askUserForRow`
        ENDIF
    ENDFUNCTION

    define FUNCTION `askUserForRow` where it takes no argument:
        PRINT with nodeJs' process.stdout that calls the 1st element of an array `questions`
    ENDFUCTION 

    define FUNCTION `askUserForColumn` where it takes no argument:
        PRINT with nodeJs' process.stdout that calls the 2nd element of an array `questions`
    ENDFUCTION

    define an EVENT LISTENER by nodeJs' process.stdin that's able to take an input `data` and a FUNCTION as arguments, with FUNCTION:
        IF calling `askingForRow` condition set to true:
            PUSH/ADD `data` with its whitespace removed from string and converted to type number and enclosed within an array, to array `guessAns`
            SET `askingForRow` to false
            CALL FUNCTION `askUserForColumn`
        ELSE:
            PUSH/ADD `data` with its whitespace removed from string and converted to type number to array `guessAns` with subscript value of `guessAns` array length minus 1
            SET `askingForRow` to true
            CALL FUNCTION `showFeedback`
        ENDIF
    ENDFUNCTION
    ENDEVENTLISTENER

    define FUNCTION `showFeedback` where it takes no argument
        SET a variable `guessRow` to the array `guessAns` with first subscript to length of `guessAns` array minus 1 and second subscript to the the 1st element within enclosed array
        
        SET a variable `guessCol` to the array `guessAns` with first subscript to length of `guessAns` array minus 1 and second subscript to the the 2nd element within enclosed array

        DECREMENT value of `turn` by 1

        IF value of `guessRow` is equals to `shipRow` AND `guessCol` is equals to `shipCol`:
            SET array `board` with subscript position `guessRow` and `guessCol` to character 'I'
            CALL FUNCTION `printBoard`
            PRINT description that you have won the game
            RELAY to event listener 'exit' by nodeJs' process.exit()
        ELSE IF value of `guessRow` is more than 4 OR `guessRow` is less than 0 OR `guessCol` is more than 4 OR `guessCol` is less than 0:
            CALL FUNCTION `printBoard`
            PRINT description that the position they've entered is out of bounds
            PRINT with nodeJs' process.stdout that describes the amount of turn left
            CALL FUNCTION `askUser`
        ELSE IF array `board` with subscript position `guessRow` and `guessCol` is equals to character 'X':
            CALL FUNCTION `printBoard`
            PRINT description that they have already input the same position in previous attempt
            PRINT with nodeJs' process.stdout that describes the amount of turn left
            CALL FUNCTION `askUser`
        ELSE:
            SET array `board` with subscript position `guessRow` and `guessCol` to character 'X'
            CALL FUNCTION `printBoard`
            PRINT description that they have not guessed the position right
            PRINT with nodeJs' process.stdout that describes the amount of turn left
            CALL FUNCTION `askUser`
        ENDIF
    ENDFUNCTION

    define an EVENT LISTENER by nodeJs' process.on `exit` and with a callback FUNCTION: 
        PRINT description that the game is over
    ENDFUNCTION

    CALL FUNCTION `askUser` to initiate process