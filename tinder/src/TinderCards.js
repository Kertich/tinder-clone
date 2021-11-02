import React, { useState } from 'react';
import './TinderCards.css'; 
import TinderCard from 'react-tinder-card';

function TinderCards() {
    const [people, setPeople] = useState([
        {
            name: 'Steve Jobs',
            url: 'https://image.shutterstock.com/image-photo/istanbul-turkey-december-19-2017-260nw-778315861.jpg'
        },
        {
            name: 'mark zuckerberg',
            url: 'https://image.shutterstock.com/image-photo/deauville-france-may-26-2011-260nw-181985696.jpg'
        }
    ]);

    return (
        <div>
            <h1>Tinder Cards</h1>

            {people.map(person => (
            <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe = {['up', 'down']}
            >
                <div 
                style={{ backgroundImage: `url(${person.url})` }}
                className="card">
                    <h3>{person.name}</h3>
                </div>
            </TinderCard>
    ))}
            
        </div>
    )
}

export default TinderCards
