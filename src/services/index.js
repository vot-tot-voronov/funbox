export default class CardsServices {
    data = [
        {
            withWhat: 'с фуа-гра',
            partials: '10 порций',
            presents: 'мышь в подарок',
            description: 'Печень утки разварная с артишоками.'
        },
        {
            withWhat: 'с рыбой',
            partials: '40 порций',
            presents: '2 мыши в подарок',
            description: 'Головы щучьи с чесноком да свежайшая сёмгушка.'
        },
        {
            withWhat: 'с курой',
            partials: '100 порций',
            presents: '5 мышей в подарок',
            description: 'Филе из цыплят с трюфелями в бульоне.'
        }
    ];
    getCards() {
        return new Promise((resolve, reject) => {
            resolve(this.data);
        });
    }
}