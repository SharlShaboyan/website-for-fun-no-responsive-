import "./hangman.css"; 
import { useState } from "react"; 
 
function Hangman() { 

    let [score, setScore] = useState(0);
 
    const pics = [ 
        { 
            src : "/imagesHang/start.png" 
        }, 
        { 
            src : "/imagesHang/1.png" 
        }, 
        { 
            src : "/imagesHang/2.png" 
        },
        { 
            src : "/imagesHang/3.png" 
        },
        { 
            src : "/imagesHang/finish.png" 
        } 
    ]; 
 
    let [idPic, setIdPic] = useState(0);
    const [pic, setPic] = useState(pics[idPic].src); 
 
    const questions = [ 
        [ 
            "Capital of Great Britain",
            {
                ans1 : "New York",
                correctans : "London", 
                ans3 : "Washington"
            }
        ],
        [
            "Capital of United States",
            { 
                ans1 : "London", 
                ans2 : "New York", 
                correctans : "Washington"
            }
        ], 
        [
            "Capital of Russia", 
            {
                ans1 : "New York", 
                ans2 : "London", 
                correctans : "Moscow" 
            } 
        ],
        [
            "Capital of Ukraine", 
            {
                ans1 : "Kirovakan", 
                ans2 : "Erevan", 
                correctans : "Kiev" 
            } 
        ],
        [
            "Capital of Albania", 
            {
                correctans : "Tirana",
                ans1 : "New York", 
                ans2 : "London"                 
            } 
        ],
        [
            "Capital of Andorra", 
            {
                ans1 : "New York", 
                correctans : "Andorra La Vella",
                ans2 : "London"                
            } 
        ],
        [
            "Capital of Afghanistan", 
            {
                ans1 : "New York", 
                ans2 : "London", 
                correctans : "Kabul" 
            } 
        ]
    ]; 

   

    // questions

    let [titleKey, setTitleKey] = useState(0);
    const [title, setTitle] = useState(questions[titleKey][0]);
     
    return ( 
        <> 
        <h1 className="title">HANGMAN</h1> 
        <h1 className="score">Score : {score}</h1>
        <div className="game"> 
            <img src={pic} className="nk" /> 
            <div className="action"> 
                { 
                    <div>
                        <h1 className="h1">{title}</h1> 
                        <div className="answers"> 
                            <button onClick={() => { 
                                if (idPic === 3) {
                                    setPic(pics[4].src)
                                    setTitle("You lose")
                                } else {
                                    if(Object.keys(questions[titleKey][1])[0] !== "correctans") {
                                        if(titleKey !== questions.length-1) {
                                           
                                                setIdPic(idPic+=1)
                                                setPic(pics[idPic].src)
                                                
                                        }
                                    } else {
                                        if(titleKey !== questions.length-1) {
                                            setScore(score+=1)
                                        }
                                    }
                                    if(titleKey === questions.length-1) {
                                        setTitle("You win")
                                    } else {
                                        setTitleKey(titleKey+=1)
                                        setTitle(questions[titleKey][0])
                                    }
                                }
                            }}>{Object.values(questions[titleKey][1])[0]}</button> 
 
                            <button onClick={() => { 
                                if (idPic === 3) {
                                    setPic(pics[4].src)
                                    setTitle("You lose")
                                } else {
                                if(Object.keys(questions[titleKey][1])[1] !== "correctans") {
                                    if(titleKey !== questions.length-1) {
                                        setIdPic(idPic+=1)
                                        setPic(pics[idPic].src)
                                    } 
                                } else {
                                    if(titleKey !== questions.length-1) {
                                        setScore(score+=1)
                                    }
                                }
                            
                                if(titleKey === questions.length-1) {
                                    setTitle("You win")
                                } else {
                                    setTitleKey(titleKey+=1)
                                    setTitle(questions[titleKey][0])
                                }
                            }
                            }}>{Object.values(questions[titleKey][1])[1]}</button> 
 
                            <button onClick={() => { 
                                if (idPic === 3) {
                                    setPic(pics[4].src)
                                    setTitle("You lose")
                                } else {
                                if(Object.keys(questions[titleKey][1])[2] !== "correctans") {
                                    if(titleKey !== questions.length-1) {
                                        setIdPic(idPic+=1)
                                        setPic(pics[idPic].src)
                                    } 
                                } else {
                                    if(titleKey !== questions.length-1) {
                                    setScore(score+=1)
                                    }
                                }
                            
                                if(titleKey === questions.length-1) {
                                    setTitle("You win")
                                } else {
                                    setTitleKey(titleKey+=1)
                                    setTitle(questions[titleKey][0])
                                }
                            }
                            }}>{Object.values(questions[titleKey][1])[2]}</button> 
                        </div>
                    </div> 
                } 
            </div> 
        </div> 
        </> 
    ) 
} 
 
export default Hangman;