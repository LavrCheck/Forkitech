import './DesktopNavigationUnit.sass'
import {Link} from "react-router-dom";

export const DesktopNavigationUnit = ({name, link, isActive}) => {

    return <>
        <div className={`DesktopNavigationUnit ${isActive ? 'active' : ''}`}>
            <Link to={link}>
                {name}
            </Link>
        </div>
    </>
}