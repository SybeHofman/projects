import "./Nonogram.css";
import { useState, useEffect } from "react";

let solution = [
    [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 1, 0, 1, 1, 1, 1, 0, 1, 0],
    [1, 1, 0, 1, 0, 0, 1, 0, 1, 1],
    [0, 1, 0, 1, 1, 1, 1, 0, 1, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
];

let rowNumbers : number[][] = []
let largestRow = 0;
for(let i = 0; i < solution.length; i++) {
    rowNumbers.push([]);
    let lastTrue = false;
    for(let j = 0; j < solution[i].length; j++) {
        if(solution[i][j] === 1) {
            if(lastTrue) {
                rowNumbers[i][rowNumbers[i].length - 1]++;
            } else {
                rowNumbers[i].push(1);
            }
            lastTrue = true;
        } else {
            lastTrue = false;
        }
    }
    if(largestRow < rowNumbers[i].length) {
        largestRow = rowNumbers[i].length;
    }
}

//TODO: Add row and column hints
function Nonogram() {
    const [grid, setGrid] = useState(solution.map(row => row.map(() => 0)));
    // Helper to compare two 2D arrays by value
    function gridsEqual(a: number[][], b: number[][]) {
        return a.every((row, i) => row.every((cell, j) => cell === b[i][j]));
    }
    const isWin = gridsEqual(grid, solution);

    useEffect(() => {
        if (isWin) {
            alert("You win!");
        }
    }, [isWin]);

    return(
        <div className = "nonogram" >
            <ColumnNumbers />
            <div className = "grid-and-row-hints">
                <RowNumbers />
                <div className = "grid">
                    {solution.map((row, rowIndex) => (
                        <div className = "row" key = {rowIndex}> 
                            {row.map((cell, cellIndex) => (
                                <Cell key = {cellIndex} grid = {grid} setGrid = {setGrid} location={[rowIndex, cellIndex]}/>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

function RowNumbers() {
    return (
        <div className = "row-numbers">
            {rowNumbers.map((rowNumbersRow, rowIndex) =>
                <div className = "row-number-section">
                    {rowNumbersRow.map((number, numberIndex) => 
                        <div className = "hint-number cell" key = {numberIndex}>
                            {number}
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}
function ColumnNumbers() {
    let colNumbers : number[][] = []
    for(let i = 0; i < solution[0].length; i++) {
        colNumbers.push([]);
        let lastTrue = false;

        for(let j = 0; j < solution.length; j++) {
            if(solution[j][i] === 1) {
                if(lastTrue) {
                    colNumbers[i][colNumbers[i].length - 1]++;
                } else {
                    colNumbers[i].push(1);
                    lastTrue = true;
                }
            } else {
                lastTrue = false;
            }
        }
    }

    return (
        <div className = "column-numbers" style={{marginLeft: largestRow * 51.6 /*51.6 because that's the size of the cell*/ + "px"}}>
            {colNumbers.map((colNumbersRow, rowIndex) => 
                <div className = "column-number-section" key = {rowIndex}>
                    {
                        colNumbersRow.map((number, numberIndex) => 
                            <div className = "hint-number cell" key = {numberIndex}>
                                {number}
                            </div>
                        )
                    }
                </div>
            )
            }
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
    const [crossed, setCrossed] = useState(false);

    function onClick() {
        setCrossed(false);
        setGrid(grid.map((row, r) =>
            row.map((cell, c) =>
                (r === rowIndex && c === cellIndex) ? (cell === 1 ? 0 : 1) : cell
            )
        ));
        setFilled(!filled);
    }

    function onContextMenu(e: React.MouseEvent) {
        e.preventDefault();
        setFilled(false);
        setGrid(grid.map((row, r) =>
            row.map((cell, c) =>
                (r === rowIndex && c === cellIndex) ? (cell === 1 ? 0 : 1) : cell
            )
        ));
        setCrossed(!crossed);
    }

    return (
        <div className = {"cell" + (filled ? " filled" : "") + (crossed ? " crossed" : "")} onClick ={onClick} onContextMenu={onContextMenu}></div>
    )
}

export default Nonogram;