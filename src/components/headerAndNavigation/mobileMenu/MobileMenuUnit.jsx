import './MobileMenuUnit.sass'
import {Link} from "react-router-dom";

export const MobileMenuUnit = ({link, name, isActive, onMenuUnitClick}) => {
    return <>
        <div className={`MobileMenuUnit ${isActive ? 'active' : ''}`}>
            <Link onClick={onMenuUnitClick} to={link}>{name}</Link>
        </div>
    </>
}