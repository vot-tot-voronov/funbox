import React from 'react';
import CardsItemsConsumer from '../card-service-context';

const withCards = () => (Wrapped) => {
    return (props) => {
        return (
            <CardsItemsConsumer>
                {
                    (CardsServices) => {
                        return (
                            <Wrapped {...props} CardsServices={CardsServices} />
                        );
                    }
                }
            </CardsItemsConsumer>
        );
    }
}

export default withCards;