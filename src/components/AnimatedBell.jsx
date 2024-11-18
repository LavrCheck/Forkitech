import './AnimatedBell.sass'
import bell from '../assets/notificationBell.svg'
import indicator from '../assets/indicator.svg'
import {useState} from "react";

export const AnimatedBell = () => {

    const [isAnimated, setIsAnimated] = useState(true)

    return <>
        <div style={{transform: 'rotate(30deg)', display: 'flex'}}>
            <div style={{display: 'flex'}}
                 className={`AnimatedBell ${isAnimated && 'active'}`}
                 onClick={() => setIsAnimated(!isAnimated)}
            >
                <img
                    src={bell}
                    id={'1'}
                    alt="bell"
                />
                <img id={'1'} style={{position: 'absolute', top: '0', right: '0'}} src={indicator} alt="indicator"/>
            </div>
        </div>
    </>
}