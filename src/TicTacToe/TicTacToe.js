import React, { useState } from "react";
import './TicTacToe.css';

const TicTacToe = () => {

    const [turn, setTurn] = useState('X');
    const [cells, setCells] = useState(Array(9).fill('')); 
    const [winner, setWinner] = useState('');

    const checkForWinner = (squares) => {
        let combos = {
            across : [
                [0,1,2],
                [3,4,5],
                [6,7,8],
            ],

            down:[
                [0,3,6],
                [1,4,7],
                [2,5,8],
            ],
            cross:[
                [0,4,8],
                [2,4,6]
            ],
        };

         for(let combo in combos){
        combos[combo].forEach((pattern) =>{
            if (
                squares[pattern[0]] === '' || 
                squares[pattern[1]] === '' || 
                squares[pattern[2]] === '' 
                ) {
                
            }else if(
                squares[pattern[0]] === squares[pattern[1]] &&
                squares[pattern[1]] === squares[pattern[2]]
            ){
                setWinner(squares[pattern[0]]);
            }
        } )
    }
    };
    
   

    const handleClick = (number) => {
        if (cells[number] !== '') {
            alert('Already Clicked');
            return;
        }
        let squares = [...cells];
        if(turn === 'X'){
            squares[number] = 'X';
            setTurn('O');
        }
        else{
            squares[number] = 'O';
            setTurn('X');
        }
        checkForWinner(squares);
        setCells(squares);
    };


    const handleRestart = () =>{
        setWinner(null);
        setCells(Array(9).fill(''));
    }

    const Cell = ({number}) =>{
        return <td onClick={() => handleClick(number)}>{cells[number]}</td>
    };
    return(
        <div className="container">
                <center>
                    <strong>
                       <h3> TIC TAC TOE GAME </h3>
                    </strong>
                    <br></br>
                    <table>
                        Turn : {turn}
                        <tbody>
                            <tr>
                                <Cell number={0}/>
                                <Cell number={1}/>
                                <Cell number={2}/>
                            </tr>
                            <tr>
                                <Cell number={3}/>
                                <Cell number={4}/>
                                <Cell number={5}/>
                            </tr>
                            <tr>
                                <Cell number={6}/>
                                <Cell number={7}/>
                                <Cell number={8}/>
                            </tr>
                        </tbody>
                    </table>
                    {winner && (
                        <>
                        <p>winner is : {winner}</p>
                        <button onClick={() => handleRestart()}>Restart Game</button>
                        </>
                    )}
                </center>
        </div> 
    )
}

export default TicTacToe;