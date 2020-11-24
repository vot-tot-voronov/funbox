import React, { useState } from 'react'
import './card-item.css';
import cat from '../../images/funbox_logo.png';

const CardItem = ({card}) => {
    const {withWhat, partials, presents, weight, description, availability} = card;
    
    const buy = () => {
        if (!availability) {
            setDescrParagr(paragraphAvl);
            setWarp_sel('wrapper_sel_avl');
            setContent_cercl_sel('content__circle_sel_avl');
            setContentTextDis('content_text_dis');
            setLogoOpacity('logo_opacity');
        } else {
            setDescrParagr(paragraphSelected);
            setWarp_sel('wrapper_sel_hov');
            setContent_cercl_sel('content__circle_sel_hov');
        }
        setSelected((selected) => !selected);
        setSelhov(true);
    }

    const paragraph = (
        <p className="descr__text">
            Чего сидишь? Порадуй котэ, <span 
                                            onClick={buy}
                                            className="descr__text_btn">купи</span>.
        </p>
    );
    
    const paragraphSelected = (
        <p className="descr__text">
            {description}
        </p>
    );
    const paragraphAvl = (
        <p className="descr__text descr__text_avl">
            Печалька, {withWhat} закончился.
        </p>
    );

    const [selected, setSelected] = useState(false);
    const [descrParagr, setDescrParagr] = useState(paragraph);
    const [warp_sel, setWarp_sel] = useState('wrapper_hov');
    const [content_cercl_sel, setContent_cercl_sel] = useState('content__circle_hov');

    const [signature, setSignature] = useState('Сказочное заморское яство');
    const [selhov, setSelhov] = useState(false);
    const [signColor, setSignColor] = useState('');

    const [contentTextDis, setContentTextDis] = useState('');
    const [logoOpacity, setLogoOpacity] = useState('');

    const selectCard = () => {
        setSelected((selected) => !selected);
        if (!selected) {
            if (!availability) {
                setDescrParagr(paragraphAvl);
                setWarp_sel('wrapper_sel_avl');
                setContent_cercl_sel('content__circle_sel_avl');
                setContentTextDis('content_text_dis');
                setLogoOpacity('logo_opacity');
            } else if (!selhov) {
                setDescrParagr(paragraphSelected);
                setWarp_sel('wrapper_sel');
                setContent_cercl_sel('content__circle_sel');
            }
        } else {
            setDescrParagr(paragraph);
            setWarp_sel('wrapper_hov');
            setContent_cercl_sel('content__circle_hov');
            setSelhov(false);
            setContentTextDis('');
            setLogoOpacity('');
            setSignature('Сказочное заморское яство');
            setSignColor('');
        }
    };
    const changeStylesLeave = () => {
        if (selected) {
            if (availability) {
                setWarp_sel('wrapper_sel_hov');
                setContent_cercl_sel('content__circle_sel_hov');
                setSelhov(true);
            }
        }
        setSignature('Сказочное заморское яство');
        setSignColor('');
    }
    const changeSignature = () => {
        if (selhov) {
            if (availability) {
                setSignature('Котэ не одобряет?');
                setSignColor('signature_sel_hov');
            }
        }
    }
    
    return (
        <div className="card">
            <div className={`wrapper ${warp_sel}`}>
                <div 
                    onClick={selectCard} 
                    onMouseLeave={changeStylesLeave} 
                    onMouseMove={changeSignature}
                    className="content">
                    <div className={`content__text ${contentTextDis}`}>
                        <p className={`signature ${signColor}`}>{signature}</p>
                        <h2 className={`title ${contentTextDis}`}>Нямушка</h2>
                        <h3 className={`name ${contentTextDis}`}>{withWhat}</h3>
                        <p className="portion">{partials}</p>
                        <p className="present">{presents}</p>
                    </div>
                    <img src={cat} alt="Funbox Cat" className={`content__logo ${logoOpacity}`}/>
                    <div className={`content__circle ${content_cercl_sel}`} >
                        <p className='kilo'>{weight}<br/><span>кг</span></p>
                    </div>
                </div>
            </div>
            {descrParagr}
        </div>
    );
}

export default CardItem;