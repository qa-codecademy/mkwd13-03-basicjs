# Exercises

## Pig game   

#### Game Rules


- Game has 2 players and 2 dices and it is played in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- There are two ways the player can end the round
    - Round ends when the player rolls a 1 and the player that is active losses all his ROUND score. After that, it's the next player's turn
    - The player can choose to 'Hold', which means that his ROUND score gets added to his GOLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

##### What we need 

- First we need to take all the html elements that we will gonna use(disscuss what we need)
- We need to create a functionality that will start the game
    * Set score to 0 (round score and total score) for the players
    * Start the game
- We need to create a funtionality that will roll the dice
    * Every rool should show witch dice are rolled and sum the score
    * When one(1) is rolled the round for the active player should end
- We need a functionality to hold round score
    * When hold is pressed the round score should be added to total score
    * When hold is pressed the round should end for the current player and the next player should continue
- We need a functionality to see who is the winner
    * The winner is the first one that gets 100 points
    * After the winner is crowned the game should only start when the new game button is pressed

**Note:** Html will be provided by trainer


## Authentication form

#### Rules

- We need and authentication form for registering and loging users
- We should be able to switch between this two form based on the selection of the user
    - When the user wants to login we should show the login form
    - When the user wants to register we should show the register form
- When the user wants to register we need to ask the user to enter some informations
    * Username 
        * **BONUS:** Should not be longer that 25 characters
        * **BONUS:** Validation message should appear
    * Email
        * **BONUS:** Should contain an valid email address
        * **BONUS:** Validation message should appear
    * Password
        * **BONUS:** Password should be at least 8 characters
        * **BONUS:** Validation message should appear
    * Age
        * **BONUS:** The age should be over 18 so the user can register
        * **BONUS:** Validation message should appear

- After successfull registering the user should be redirected to login page and the user should be added to the in memory array of users
- When the user wants to login
    - The user should enter username and password
    - We need to check if the username and password match some user in the in memory array and show appropriate message
 
