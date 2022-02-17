import React, {useEffect, useState} from "react";
import {Button, Container} from "@mui/material";

function Answer({options, correctAnswer})
{
    const [score, setScore] = useState(0);
    const [sequence, setSequence] = useState(new Array(4));

    useEffect(() => {

        if(options !== undefined){

            let arr = [...options, correctAnswer];
            setSequence(arr.sort(() => Math.random() - 0.5));
        }
    }, [options, correctAnswer])


    function handleClick(e){
        e.preventDefault();
        console.log(e.target.innerText);
    }


    if(options === undefined)
        return (<div></div>)

    return(
        <Container>
            {sequence.map(element => {
                return(
                    <Button key={element} onClick={handleClick}>
                        {element}
                    </Button>
                )
            })}
        </Container>
    )
}

export default Answer;