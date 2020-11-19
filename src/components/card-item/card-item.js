import React from 'react'
import './card-item.css';
import cat from '../../images/funbox_logo.png';

const CardItem = () => {
    return (
        <div className="card">
            <div className="card__cut-corner"></div>
            <div className="content">
                <div className="content__text">
                    <p className="signature">Сказочное заморское яство</p>
                    <h2 className="title">Нямушка</h2>
                    <h3 className="name">с фуа-гра</h3>
                    <p className="portion">10 порций</p>
                    <p className="present">мышь в подарок</p>
                </div>
                <img src={cat} alt="Funbox Cat" className="content__logo"/>
                <div className='content__circle'>
                    <p className='kilo'>0,5<br/><span>кг</span></p>
                </div>
            </div>
            <p className="descr__text">
                Чего сидишь? Порадуй котэ, <span className="descr__text_btn">купи</span>.
            </p>
        </div>
    );

}

export default CardItem;