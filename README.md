# 🎯 Tic-Tac-Toe

A simple and interactive **Tic-Tac-Toe** game built using **React**. This project is deployed via **GitHub Pages** and demonstrates key React concepts including components, props, state management, and conditional rendering.

The image below shows the interface of the Tic-Tac-Toe game

![cover](https://github.com/user-attachments/assets/8a84be81-b0d9-4ed7-9eb1-9c91712dc816)

# Tic-Tac-Toe Component Diagram

The Tic-Tac-Toe application follows a component-based architecture in React. Below is the component diagram that illustrates the structure of the app:

<img width="1137" alt="component-diagram" src="https://github.com/user-attachments/assets/fd9cc0ed-4ba3-4c31-baec-7223f24baf87" />

## Component Breakdown

### 1. **App Component**
The root component of the app that imports and renders the `TicTacToe` component. It sets up the app’s basic structure.

```jsx
import TicTacToe from "./components/TicTacToe";
function App() {
  return (
    <TicTacToe />
  );
}
```

### 2. **TicTacToe Component**
The `TicTacToe` component manages the game's logic and state. It keeps track of the tiles, the current player's turn, the game state (in progress, draw, or win), and the winning strike class.

**Responsibilities:**
- Handles tile clicks and manages state updates for each player’s turn.
- Checks for a winner after each move.
- Manages the reset functionality for the game.

```jsx
function TicTacToe() {
  // state management and game logic
}
```

### 3. **Board Component**
The `Board` component is the layout of the game board. It is composed of 9 `Tile` components, arranged in a grid. The `Board` component is responsible for passing tile values and handling tile clicks.

**Responsibilities:**
- Renders the 9 tiles in a 3x3 grid.
- Handles the layout and placement of tiles.
- Accepts `playerTurn`, `tiles`, and `onTileClick` props to handle gameplay logic.

```jsx
export default function Board({ tiles, onTileClick, playerTurn, strikeClass }) {
  // renders 9 tiles with click events
}
```

### 4. **Tile Component**
The `Tile` component represents each individual tile on the game board. It displays either "X" or "O" based on the current player's turn, or nothing if the tile is empty.

**Responsibilities:**
- Displays the player’s symbol (X or O).
- Changes the appearance of the tile when hovered by the current player.

```jsx
export default function Tile({ className, value, onClick, playerTurn }) {
  // handles tile click and displays X or O
}
```

### 5. **GameOver Component**
The `GameOver` component is responsible for displaying the game’s result. It shows the winner or a draw message based on the game state.

**Responsibilities:**
- Displays "X Wins", "O Wins", or "Draw" depending on the game outcome.

```jsx
export default function GameOver({ gameState }) {
  // displays the result of the game
}
```

### 6. **Reset Component**
The `Reset` component allows players to reset the game when it ends, either after a win or a draw.

**Responsibilities:**
- Renders a "Reset" button to restart the game.
- Resets the game state and clears the board.

```jsx
export default function Reset({ gameState, onReset }) {
  // renders reset button if the game is over
}
```

### 7. **Strike Component**
The `Strike` component renders a visual strike (line) over the winning combination of tiles. It accepts a `strikeClass` to dynamically apply the correct class for the winning combination (e.g., horizontal, vertical, diagonal).

**Responsibilities:**
- Renders a strike over the winning combination of tiles.

```jsx
export default function Strike({ strikeClass }) {
  // renders the strike line based on the winning combination
}
```

---

### Key State Management

- **Tiles**: Holds the current state of the game board (array of 9 tiles).
- **Player Turn**: Tracks which player's turn it is (X or O).
- **Game State**: Tracks whether the game is still in progress, has been won, or ended in a draw.
- **Strike Class**: Tracks the CSS class to apply the visual strike over the winning tiles.

---

## Conclusion

The component diagram and the detailed breakdown show how each React component interacts with others to create the Tic-Tac-Toe game. The `TicTacToe` component manages the game state, while the `Board`, `Tile`, `GameOver`, `Reset`, and `Strike` components focus on specific parts of the UI and game logic. This separation of concerns helps keep the application modular and maintainable.


---

## 🔗 Live Demo

👉 [Click here to play](https://nithinjukuri.github.io/Tic-Tac-Toe/)

---

## 📦 Features

- 🎮 Two-player gameplay (X and O)
- 🧠 Game state management with win/draw detection
- 💡 Responsive UI with visual feedback
- 🔄 Reset functionality
- 🚀 Deployed using GitHub Pages

---

## 📁 Project Setup

To run the project locally, follow these steps:

```bash
git clone https://github.com/NithinJukuri/Tic-Tac-Toe.git
cd Tic-Tac-Toe
npm install
npm start
 Deployed using GitHub Pages
```
## 📜 Scripts

| Command          | Description                          |
|------------------|--------------------------------------|
| `npm start`      | Runs the app in development mode     |
| `npm run build`  | Builds the app for production        |
| `npm run deploy` | Deploys the app to GitHub Pages      |
| `npm test`       | Launches the test runner             |

---

## 🚀 Deployment

Deployment is handled using the `gh-pages` package.

### 🧾 Steps to Deploy

1. **Set `homepage` in `package.json`:**

```json
"homepage": "https://nithinjukuri.github.io/Tic-Tac-Toe"
```



2. **Add deploy scripts in `package.json`**

Add the following inside the `"scripts"` section of your `package.json` file:

```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```



3. **Deploy the app using:**

Run the following command in your terminal:

```bash
npm run deploy
```
🔹 That's it! Your app will be deployed to GitHub Pages. 🚀
