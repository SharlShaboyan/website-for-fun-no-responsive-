import { React } from "react";
import "./css/about.css";

function About() {

    const staff = [
        {
            id : 1,
            descr : "Ani Avagyan, 22 year old, Co-Founder",
            image : "../images/staff/1.jpg"
        },
        {
            id : 2,
            descr : "Anna Sargsyan, 26 year old, Human Resources manager",
            image : "../images/staff/2.jpg"
        },
        {
            id : 3,
            descr : "Milena Aghabekyan, 25 year old, CEO",
            image : "../images/staff/3.jpg"
        },
        {
            id : 4,
            descr : "Armine Sargsyan, 22 year old, Social Media Marketing",
            image : "../images/staff/4.jpg"
        },
        {
            id : 5,
            descr : "Srbuhi Hovhannisyan, 30 year old, Accountant",
            image : "../images/staff/5.jpg"
        },
        {
            id : 6,
            descr : "Seda Hakobyan, 40 year old, Cleaner",
            image : "../images/staff/6.jpg"
        }
    ];

return (
    <div className="wrap">
        {
            staff.map((el) => {
                
                {   if (el.id % 2 === 0) {
                        return (    
                            <div key={el.id} className="about">
                                <p>{el.descr}</p>
                                <img src={el.image} alt="nkar" className="pic" />
                            </div>
                        )
                    } else {
                        return (
                            <div key={el.id} className="about">
                                <img  src={el.image} alt="nkar" className="pic" id="leftImg" />
                                <p>{el.descr}</p>
                            </div>
                        )
                    }
                }
                
            })
        }
    </div>
)
}

export default About;