import React, {useEffect, useState} from "react";
import {Button, Container} from "@mui/material";
import "./Answer.css";
function Answers({options, correctAnswer, next, score})
{

    const [sequence, setSequence] = useState(new Array(4));


    useEffect(() => {

        if(options !== undefined){

            let arr = [...options, correctAnswer];
            setSequence(arr.sort(() => Math.random() - 0.5));
        }
    }, [options, correctAnswer])


    function handleClick(e){
        e.preventDefault();

        if(e.target.innerText == correctAnswer){
            score();
        }

        next();
    }


    if(options === undefined)
        return (<div></div>)

    return(
        <div className={"Answer-buttons"}>
                {sequence.map(element => {
                    return(
                        <div className={"Answer-container"} key={element}>
                            <Button
                                    onClick={handleClick}
                                    size={"large"}
                                    variant={"outlined"}
                                    fullWidth={true}
                            >
                                {element}
                            </Button>
                        </div>
                    )
                })}
        </div>
    )
}

export default Answers;