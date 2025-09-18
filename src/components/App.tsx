import NavBar from "./navBar/NavBar.tsx";
import Nonogram from "./nonogram/Nonogram.tsx";
import Blackjack from "./blackjack/Blackjack.tsx";
import "./App.css";
function App() {
    return(
        <div className = "app">
            <NavBar />
            <Nonogram />
            <Blackjack />
        </div>
    )
}

export default App;