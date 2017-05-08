# tictactoe-redux

Tic Tac Toe in Redux/React

You will build Tic Tac Toe in Redux. It will be good for you, like vegetables. If you are feeling adventurous, implement the reducer using TDD.

Step 0: Top level setup

Use create-react-app to generate your app.
Install the modules redux and react-redux using npm, use the --save option so they are remembered as dependencies.
In index.js create a store - install this blob: window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() as the second argument to createStore so that you activate the Redux Dev Tools.
Use a provider from react-redux to wrap the rest of your application.
Step 1: Design the structure of your state object

What will your state look like? What does it need? Structure your state as an object that contains all of this information. Here are some things you'll definitely need:

an array representing the board
who the current player is
Create a file for the reducer, say TicTacToe.reducer.js, create the initial state of the app, and have the reducer return that as the initial state.

Step 2: Render the grid

To render the grid, you'll need to create a presentation component, let's call this TicTacToe - it will get the board passed in as a prop. Put this component in a separate file and export it.

Next you'll need to connect the store to the TicTacToe component by creating a container component using React-Redux's connect function, let's call this TicTacToeContainer - put this in a separate file too. Render this container component in the top application wrapped within the provider.

Step 3: Dispatching moves

To make a move on the board, you'll need to dispatch an action when a square is clicked. But you can't just do it in the presentation component, you need to

Have the button call a function that's passed in via a prop, this function will take in the index position of the square, or 2 indices if you have a 2D array.
In the connect call in TicTacToeContainer, with the mapDispatchToProps argument, pass in a function that dispatches a "move" action. This function will need to take in a index or indices as parameter(s), and then attach it to the action that it dispatches.
Test the dispatching of the "move" actions using the Redux Dev Tools.
Step 4: Making moves

Modify your TicTacToe reducer now to respond to "move" actions, by placing a the piece corresponding to the current player on the board. You are not allow to do anything impure!

Step 5: Detecting wins

Write a function to detect the winner given the board. Where would you call this function? You may call it within the render method of your TicTacToe component or within the reducer and save who the winner was as a separate property in the state.

If there is a winner, display the winner.

You may chose to implement this function using TDD.

Step 6: Detecting draws

Write a function to detect draws given the board. Again, you may chose to call this function in the render method or in the reducer and then save it.

If there is a draw, tell the player that there is a draw.

You may chose to implement this function using TDD.

Step 7: Stop/Restart the game

When the game ends due to winner or a draw, end the game by disabling the board and displaying a "Play again" button. Make the "Play again" button restart the game.

Step 8: Keep score

Add the state and logic to keep score in the reducer. The reducer now has to determine if the game has ended after each move, and it needs to count up the tally for each player's wins and the draws column if it has.

Step 9: Display score

Create a ScoreBoard component to display the score. Wire it up as a container component using the connect() function.
