import './MobileMenuList.sass'
import {navigationUnits} from "../HeaderAndNavigation.jsx";
import {MobileMenuUnit} from "./MobileMenuUnit.jsx";
import {LocationContainer} from "../../LocationContainer.jsx";

export const MobileMenuList = ({currentPath, onMenuUnitClick}) => {
    return <>
        <div className='MobileMenuList'>
            {navigationUnits.map((unit, i) => (
                <MobileMenuUnit
                    key={i}
                    link={unit.link}
                    name={unit.name}
                    isActive={unit.link === currentPath}
                    onMenuUnitClick={onMenuUnitClick}
                />
            ))}
            <div className={'footer'}>
                <LocationContainer/>
            </div>
        </div>
    </>
}