import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>Successful Front-End Developer</h1>
            <p>Hi. I’m Said, a freelance Front-end Developer experience creating successful websites.</p>
                <div className="cards__container">
                    <div className="cards__wrapper">
                        <ul className="cards__items">
                        <CardItem 
                            src="images/front.jpg" 
                            text="Responsive websites built for an optimal user experience that achieves your business goals." 
                            label="Front-end development" 
                            path="/"
                        />

                        <CardItem 
                            src="images/performance.jpg" 
                            text="Make your website fast, easy to find, and reach the widest audience possible."
                            label="Performance, SEO, &
                            accessibility testing" 
                            path="/" 
                        />

                        <CardItem 
                            src="images/wordpress.png" 
                            text="Manage your website using the web's most popular content management system." 
                            label="WordPress website" 
                            path="/"
                        />

                        
                    </ul>
{/* 
                    <ul className="cards__items">
                        <CardItem 
                            src="images/img-3.jpg" 
                            text="Set Sail in the Atlantic Ocean visiting Uncharted Waters" 
                            label="Mystery" 
                            path="/services"
                        />

                        <CardItem 
                            src="images/img-4.jpg" 
                            text="Experience Footbal on Top of the Himalayan Mountains"
                            label="Adventure" 
                            path="/services" 
                        />

                        <CardItem 
                            src="images/img-8.jpg" 
                            text="Raid through the Sahara Desert on a guided camel tour"
                            label="Adrenaline" 
                            path="/services" 
                        />
                    </ul> */}

                    </div>
                </div>
        </div>
    )
}

export default Cards;
