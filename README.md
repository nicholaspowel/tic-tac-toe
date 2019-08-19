Tic-Tac-Toe

## Overview
Tic Tac Toe, or Noughts and Crosses, is a game about fighting over who gets to go first. Some people think it is a game about taking turns putting a mark on a 3x3 board until one player has 3 marks in a row either horzontally, vertically, or diagonally. That player dcelares themselves the winner and everyone breaks for tea. We know better. And to that end, whenever you play a game of Tic Tac Toe with us, you will ALWAYS be Player 1, you will ALWAYS come first.

## Planning
I started this project by first coming up with wireframes based on a loose idea of what I wanted to create, and then made user stories. In hindsight I would have done the stories first, because it would have made it clearer which elements I need to have usable first.
#### Wireframe
![wireframe1 image](https://imgur.com/UUGN7y8)

![wirefrane2 image](https://imgur.com/oMcD5eA)

![wireframe3 image](https://imgur.com/9X9zWMa)
#### User stories
```
  As a user, I want to create a new game, and expect to see an empty board

  As a new user, I expect to be able to log out, and when I do I should not see a board

  As a user, I expect to log in with a username and password, so that only I have access to my games

  As a user, I expect to be unable to access boards until I am signed in so that I can store the result

  As a user,  I expect to start as player x and have the board indicate whose turn it is

  As a user, I expect clicking on a tile on the board to place my mark and then be un-clickable afterward
```
## Process
I started by creating a basic grid with HTML and Bootstrap so that I would have something to work with visually. I knew that I was going to be creating a login and using that information, so I created all of my sign in related api calls and authentication. Once those worked I connected them to form fields in the html. I also implemented a functionality to change what was visible based on login state.

My next step was to work on getting all of the game api calls to work. Getting them to interface with the frontend was much trickier, as some of the calls were dependent on the game logic being implemented. Creating a new game was simple, but in implementing the update calls to the api I realized I had to make the game logic work in order to connect everything. Once that was done I had to trouble shoot various bugs related to notifications and win conditions, and finally implmented the ability to show previous games.
## Future Features
In the future I would like to add the ability to:
-play against a computer
-play against another player (you are no longer ALWAYS first 😥)
-Switch themes
-possibly incorporate other api calls

## Technologies Used
-html
-AJAX
-jQuery
-SASS
-Bootstrap
-...?
