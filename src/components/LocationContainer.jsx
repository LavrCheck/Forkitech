import location from "../assets/location.svg";
import './LocationContainer.sass'

export const LocationContainer = ({isDesktop}) => {
    return <>
        <div className={`LocationContainer ${isDesktop ? 'desktop' : ''}`}>
            <img src={location} alt="location"/>
            <span>Москва и область</span>
        </div>
    </>
}