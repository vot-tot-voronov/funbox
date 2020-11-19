import React from 'react'

import withCards from '../hoc';
import CardItem from '../card-item';
import './block-cards.css'

const BlockCards = ({CardsServices}) => {
    const data = CardsServices.getCards();
    const allCards = data.map((card) => <CardItem key={card.id} card={card}/>);
    return (
        <div className="container">
            {allCards}
        </div>
        
    );
}

export default withCards()(BlockCards);