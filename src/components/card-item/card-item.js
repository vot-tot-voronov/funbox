import React, { useState, useEffect, useMemo } from 'react'
import './card-item.css';
import cat from '../../images/funbox_logo.png';

const CardItem = ({card}) => {
    const {withWhat, partials, presents, weight, description, availability} = card;
    const paragraph = (
        <p className="descr__text">
            Чего сидишь? Порадуй котэ, <span className="descr__text_btn">купи</span>.
        </p>
    );
    const paragraphSelected = (
        <p className="descr__text">
            {description}
        </p>
    );

    const [selected, setSelected] = useState(false);
    const [descrParagr, setdescrParagr] = useState(paragraph);
    
    return (
        <div className="card">
            <div className="wrapper">
                <div onClick={()=> setSelected(!selected)} onMouseLeave={()=> setdescrParagr(paragraphSelected)} className="content">
                    <div className="content__text">
                        <p className="signature">Сказочное заморское яство</p>
                        <h2 className="title">Нямушка</h2>
                        <h3 className="name">{withWhat}</h3>
                        <p className="portion">{partials}</p>
                        <p className="present">{presents}</p>
                    </div>
                    <img src={cat} alt="Funbox Cat" className="content__logo"/>
                    <div className='content__circle'>
                        <p className='kilo'>{weight}<br/><span>кг</span></p>
                    </div>
                </div>
            </div>
            {descrParagr}
            {/* <p className="descr__text">
                Чего сидишь? Порадуй котэ, <span className="descr__text_btn">купи</span>.
            </p> */}
        </div>
    );

}

export default CardItem;