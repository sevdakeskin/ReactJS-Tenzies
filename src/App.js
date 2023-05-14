import React from "react";
import Confetti from 'react-confetti'
import './App.css';
import Die from './components/Die';

function App() {
   const [dice,setDice] = React.useState(allDiceNumbers())

   const [tenzies,setTenzies] =React.useState(false);
   console.log("dice",dice);
   const diceElements = dice.map((die,index) =>{
    return <Die dieObj={die} setDice={setDice} index={index}/>;
   });

   React.useEffect(() =>{
    console.log("useeffect worked");
    const allSelected = dice.every((die) =>die.isSelected === true)

    const allSameValue = dice.every((die)=> die.value === dice[0].value)
    
    if(allSelected && allSameValue){
      setTenzies(true);
    }

   }, [dice])

   function generateNewDie(){
     return{
      value: Math.floor(Math.random() * 6)+1,
      isSelected: false
    };
   }
   

   function allDiceNumbers(){
     // 10 adet random 1-6 arasinda üretilmis sayi arrayini return edecek.
    const newDice = [];

    for (let i=0; i <10; i++){
      
      newDice.push(generateNewDie()) 
    }
    return newDice;
   }

   function roll(){
     //const newDice = allDiceNumbers()
     setDice((oldDice)=> 
       oldDice.map(die =>{
        return die.isSelected ? die : generateNewDie()
       }) );
   }
  
  return (
      <main>
        {tenzies ? <Confetti 
        width="1000px"
        height="500px"
        />:""}
        <h1 className="title">Tenzies</h1>
        <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        <div className="dice-container">
          {diceElements}
       </div>
       <button  onClick={roll}>Roll</button>
      </main>
    
  );
}

export default App;
