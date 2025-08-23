import "./Nonogram.css";
import { useState } from "react";

let solution = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 1, 0, 1, 1, 1, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 1, 1, 1, 0, 1, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

//TODO: Add row and column hints
function Nonogram() {
    const [grid, setGrid] = useState(solution.map(row => row.map(() => 0)));
    // Helper to compare two 2D arrays by value
    function gridsEqual(a: number[][], b: number[][]) {
        return a.every((row, i) => row.every((cell, j) => cell === b[i][j]));
    }
    const isWin = gridsEqual(grid, solution);
    return(
        <div className = "nonogram">
            <div className = "grid">
                {solution.map((row, rowIndex) => (
                    <div className = "row" key = {rowIndex}> 
                        {row.map((cell, cellIndex) => (
                            <Cell key = {cellIndex} grid = {grid} setGrid = {setGrid} location={[rowIndex, cellIndex]}/>
                        ))}
                    </div>
                ))}
            </div>
            <span className = "win-message">{isWin ? "You win!" : ""}</span>
        </div>
    )
}

interface CellProps {
    grid: number[][];
    setGrid: (newGrid: number[][]) => void;

    location: [number, number];
}

function Cell({grid, setGrid, location} : CellProps) {
    const [rowIndex, cellIndex] = location;
    const [filled, setFilled] = useState(grid[rowIndex][cellIndex] === 1);

    function onClick() {
        setGrid(grid.map((row, r) =>
            row.map((cell, c) =>
                (r === rowIndex && c === cellIndex) ? (cell === 1 ? 0 : 1) : cell
            )
        ));
        setFilled(!filled);
    }

    return (
        <div className = {"cell" + (filled ? " filled" : "")} onClick ={onClick}></div>
    )
}

export default Nonogram;