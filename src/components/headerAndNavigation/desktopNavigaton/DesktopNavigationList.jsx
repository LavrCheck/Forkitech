import './DesktopNavigationList.sass'
import {DesktopNavigationUnit} from "./DesktopNavigationUnit.jsx";
import {useLocation} from "react-router-dom";
import {navigationUnits} from "../HeaderAndNavigation.jsx";

export const DesktopNavigationList = ({currentPath}) => {

    return <>
        <div className={'DesktopNavigationList'}>
            {navigationUnits.map((unit, i) => (
                <DesktopNavigationUnit
                    key={i}
                    name={unit.name}
                    link={unit.link}
                    isActive={unit.link === currentPath}
                />
            ))}
        </div>
    </>
}