import React from 'react'
import './card-item.css';
import cat from '../../images/funbox_logo.png';

const CardItem = () => {
    return (
        <div className="card">
            <div className="content">
                <div className="content__text">
                    <p className="signature">Сказочное заморское яство</p>
                    <h2 className="title">Нямушка</h2>
                    <h3 className="name">с фуа-гра</h3>
                    <p className="portion">10 порций</p>
                    <p className="present">мышь в подарок</p>
                </div>
                <img src={cat} alt="Funbox Cat" className="content__logo"/>
                <div className="content__circle">
                    <p className="circle__weight">0,5</p>
                    <p className="circle__kg">кг</p>
                </div>
            </div>
            <div className="content__descr">
                <p className="descr__text">
                    Чего сидишь? Порадуй котэ, <button className="descr__text_btn">купи</button>.
                </p>
            </div>
        </div>
    );

}

export default CardItem;