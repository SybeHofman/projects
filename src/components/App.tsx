import NavBar from "./navBar/NavBar.tsx";
import Nonogram from "./nonogram/Nonogram.tsx";
import "./App.css";
function App() {
    return(
        <div className = "app">
            <NavBar />
            <Nonogram />
        </div>
    )
}

export default App;