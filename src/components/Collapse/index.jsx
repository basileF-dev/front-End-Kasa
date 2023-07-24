import chevron from '../../assets/chevron.svg'
import '../../styles/Collapse.scss'
import {useRef, useState} from 'react'

export default function ScrollBar({title, element}) {
    const [isOpen, setIsOpen] = useState(false)
    const currentHeightEl = useRef(0)

    function handleClick() {
        isOpen ? setIsOpen(false) : setIsOpen(true)
    }

    return (
        <div className='container'>
            <button className="container__btn">
                <h3 className='container__btn__title'>{`${title}`}</h3>
                <img className='container__btn__chevron' src={chevron} alt="dérouler pour voir la description" style={isOpen ? {transform: 'rotateZ(-90deg)'} : {transform: 'rotateZ(90deg)'}} onClick={() => handleClick()}/>
            </button>
            <div className='container__slider' style={isOpen ? {height: `${currentHeightEl.current.clientHeight}px`} : {height: '0px'}}>
                {Array.isArray(element) ? (<ul ref={currentHeightEl} className="container__slider__text" style={isOpen ? {transform: 'translateY(0%)'} : {transform: 'translateY(-100%)'}} >{element.map((el, index) => 
                    <li key={index}>{el}</li>
                    )}</ul>
                    ) : (
                    <p ref={currentHeightEl} className="container__slider__text" style={isOpen ? {transform: 'translateY(0%)'} : {transform: 'translateY(-100%)'}}>{element}</p>
                )}
            </div>
        </div>
    )
}