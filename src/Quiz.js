import React, {useState} from "react";
import {Box, Button, ButtonGroup, Card, CardContent, Paper, Typography} from "@mui/material";
import Answers from "./Answers";
import "./Quiz.css";

function Quiz({questions}) {

    const [qIndex, setQIndex] = useState(0);
    const [next, setNext] = useState(false);
    const [score, setScore] = useState(0);

    function handleClick() {
        setQIndex(qIndex+1);
        setNext(false);
    }

    function handleScore() {
        setScore(score+1);
    }

    if(qIndex === questions?.length) {
        return (
            <div className={"Quiz-container"}>
                <Box sx={{
                    width: 'auto',
                    height: '100%',
                    border: 'none',
                    borderRadius:'1%',
                    display: 'flex',
                    flexDirection:'column',
                    alignContent: 'center',
                    padding:'2rem',
                    textAlign:'center'

                }}>
                    <Typography variant={"h3"} component={"div"}>
                        {`Congratulations, you answered ${score}/${questions?.length} questions correctly.`}
                    </Typography>
                </Box>
                <Box sx={{
                    margin: '10rem 0',
                    height:'100%',
                    width:'100%'
                }}>
                    <Button
                        size={"large"}
                        variant={"outlined"}
                        fullWidth={false}
                        onClick={() => window.location.reload()}
                    >
                        {"Play 1 more time"}
                    </Button>
                </Box>
            </div>
        )
    }

    return(
        <div>
            <div className={"Quiz-container"}>
                <Box sx={{
                    width: 'auto',
                    height: '100%',
                    border: '1px solid #353535',
                    borderRadius:'1%',
                    display: 'flex',
                    flexDirection:'column',
                    alignContent: 'center',
                    padding:'2rem'

                }}>
                    <Typography variant={"h3"} component={"div"}>
                        {questions[qIndex]?.question}
                    </Typography>
                </Box>

                <Answers
                    options={questions[qIndex]?.incorrect_answers}
                    correctAnswer={questions[qIndex]?.correct_answer}
                    next={handleClick}
                    score={handleScore}
                />
            </div>
            <div className={"Quiz-question"}>
                <Typography>
                    {`${qIndex+1}/${questions.length}`}
                </Typography>
            </div>
        </div>
    )

}

export default Quiz;
