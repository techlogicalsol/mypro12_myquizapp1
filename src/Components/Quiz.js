import React, { useState, useEffect } from "react";
import PrizeList from "./PrizeList";
import Timer from "./Timer";

function Quiz({
    fname, 
    lname, 
    data,
    questionNum,
    setQuestionNum,
    setTimeOut,
    setStop,
    earned,
    setEarned,
    stop,
}){

    const [question, setQuestion] = useState(null)
    const [selected, setSelected] = useState(null)
    const [className, setClassName] = useState("ans")

    useEffect(()=>{
        setQuestion(data[questionNum - 1])
    }, [data, questionNum])


    const delay = (duration, callback)=>{
        setTimeOut(()=>{
            callback()   
        }, duration)
    }

    const handleClick = (a)=>{  
        setSelected(a)
        setClassName("ans active")
        delay(3000, ()=>
            setClassName(a.correct ? "ans correct" : "ans_wrong")
        );

        delay(5000, ()=>{
            if(a.correct){

                delay(1000, ()=>{
                    setQuestionNum((prev => prev + 1))
                    setSelected(null)
                })
            }else{
                delay(1000, ()=>{
                    setStop(true)
                })
            }
        });
    }

    useEffect(()=>{
        questionNum > 1 && setEarned(PrizeList.find(money => money.id === questionNum -1).amount + earned)
    },[PrizeList, questionNum])


    return(
        <>
            <div className="container mt-5">
                <div className="row">
                <div className="col-md-12">
                    <div className="row">
                        
                    <div className="col-md-6 mx-auto">
                       <div className="welcome"> Welcome, {fname+" "+ lname} </div>
                       <button className="btn btn-danger btn-block">
                         <a href="/">  Quit </a>
                        </button>
                    </div>

                    
                    <div className="col-md-12 mt-5">
                        <div className="row">
                        <div className="col-md-2 timer">

                           
                                {stop ? (
                                    <p>You have earned: {earned}</p>
                                ) : (

                          

                            <div className="timer">
                            <Timer 
                                setStop={setStop}
                                questionNum={questionNum}
                            />
                            </div>
                             )}
                        </div>

                        <div className="col-md-6 bg-light questionsList">
                            <div className="question">
                                {question?.question}
                            </div>

                            <div className="row">

                                {question?.answers.map((a)=>(
                                    <div className="col-md-6 d-flex justify-content-center mb-2 mt-5">
                                        <div className={selected === a ? className : "ans"} onClick={()=> !selected && handleClick(a)}>
                                       <button className="btn btn-warning ansMybtn">
                                            {a.text}
                                        </button> 
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="col-md-4 mx-auto" style={{backgroundColor: "#f1f1f1"}}>
                            <div className="row">
                                {PrizeList.map((money)=>(
                                    <div className="col-md-4 d-flex justify-content-center bg-secondary p-2 mt-3 mb-3">
                                                          
                                        <div className={questionNum === money.id ? "sub active p-2" : "sup p-2"}>
                                            {money.id}
                                            <div>
                                            {money.amount}
                                            </div>
                                        </div>
   

                                       
                                   
                                    </div>
                                ))}
                            </div>
                        </div>
                        </div>
                    </div>
                    
                    </div>
                </div>


                  
                </div>
            </div>

            
        
        </>
    )
}

export default Quiz

