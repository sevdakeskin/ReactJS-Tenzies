import React from "react";

export default function Die(props) {

    function dieSelected(die) {
        console.log("die selected", props.index);

        props.setDice((oldDice) => {
            const newDice = [...oldDice]; //Güncel state deki zar objelerini kopyaladik.
            newDice[props.index] = {
                value: newDice[props.index].value,
                isSelected: !newDice[props.index].isSelected
            }
            return newDice;
        }
        )

    }
    return (
        <>
            <div
                className="die-face"
                style={{ backgroundColor: props.dieObj.isSelected ? "#59E391" : "white" }}
                onClick={() => dieSelected(props.dieObj)}

            >
                <h3 className="die-num">{props.dieObj.value}</h3>
            </div>
        </>
    )
}
