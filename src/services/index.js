export default class CardsServices {
    data = [
        {
            id: '1',
            withWhat: 'с фуа-гра',
            partials: '10 порций',
            presents: 'мышь в подарок',
            weight: '0,5',
            description: 'Печень утки разварная с артишоками.'
            
        },
        {
            id: '2',
            withWhat: 'с рыбой',
            partials: '40 порций',
            presents: '2 мыши в подарок',
            weight: '2',
            description: 'Головы щучьи с чесноком да свежайшая сёмгушка.'
        },
        {
            id: '3',
            withWhat: 'с курой',
            partials: '100 порций',
            presents: '5 мышей в подарок',
            weight: '5',
            description: 'Филе из цыплят с трюфелями в бульоне.'
        }
    ];
    getCards() {
        return this.data;
    }
}