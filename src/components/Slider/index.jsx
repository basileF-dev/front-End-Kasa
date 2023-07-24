import { useState } from 'react'
import chevron from '../../assets/chevron.svg'
import '../../styles/Slider.scss'

export default function Slider({imgArr}) {
    const [ slideIndex, setSlideIndex ] = useState(0)
    function handleClick(next) {
        next === true ? (slideIndex < imgArr.length - 1 ? setSlideIndex(slideIndex + 1) : setSlideIndex(0)
        ) : (
        slideIndex >= 1 ? setSlideIndex(slideIndex - 1) : setSlideIndex(imgArr.length -1))
    }
    return (
        <div className="fiche__slider">
                <img className="fiche__slider__img" src={imgArr[slideIndex]} alt="appartement"/>
                {imgArr.length >= 2 && 
                <div className="fiche__slider__nav">
                    <button className="fiche__slider__nav__btn" onClick={() => handleClick(false)}><img src={chevron} alt='boutton precédante' className="fiche__slider__nav__btn__img"/></button>
                    <div className="fiche__slider__nav__index">{`${slideIndex + 1}/${imgArr.length}`}</div>
                    <button className="fiche__slider__nav__btn next" onClick={() => handleClick(true)}><img src={chevron} alt='boutton suivante' className="fiche__slider__nav__btn__img"/></button>
                </div>}
        </div>
    )
}