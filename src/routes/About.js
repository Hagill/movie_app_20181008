import React from 'react';
import {useLocation} from "react-router-dom";
import './About.css';

function Orwell({picture, name}) {
    return (
        <div className='introduce'>
            <img src = {picture} alt = {name} />
        </div>
    );
}

function About() {
    const location = useLocation();
    console.log(location.state)
    return (
        <div className='about__container'>
             {George.map(intro => <Orwell key={intro.id} name={intro.name} picture={intro.image} />)}
             <span>
                 "Freedom is the freedom to say that two plus two make four.
                 If that is granted, all else follows."
             </span>
             <span>- George Orwell, 1984</span>
             
        </div>
    );
}

const George = [
    {
      id: 1,
      name: 'GeorgeOrwell',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/George_Orwell_press_photo.jpg/236px-George_Orwell_press_photo.jpg'
    }
]
export default About;