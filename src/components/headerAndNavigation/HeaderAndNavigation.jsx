import {Header} from "./Header.jsx";
import {DesktopNavigationList} from "./desktopNavigaton/DesktopNavigationList.jsx";
import './HeaderAndNavigation.sass'
import {useEffect, useState} from "react";
import {MobileMenuList} from "./mobileMenu/MobileMenuList.jsx";
import {useLocation} from "react-router-dom";

export const navigationUnits = [
    {name: 'Преимущества Tele2', link: 'advantages'},
    {name: 'Тарифы', link: 'tariffs'},
    {name: 'Акции и спецпредложения', link: 'sales'},
    {name: 'Промтариф Tele2', link: 'promotional-tariff'},
    {name: 'Технология eSIM', link: 'eSIM'},
    {name: 'Подключение нового абонента', link: 'new-subscriber'},
]

export const HeaderAndNavigation = () => {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleClose = () => {
            if (window.innerWidth > 1024) {setIsMobileMenuOpen(false)}
        }
        window.addEventListener('resize', handleClose);

        return () => {
            window.removeEventListener('resize', handleClose);
        }
    }, [])

    const {pathname} = useLocation()
    const currentPath = pathname.slice(1)

    return <>
        <div className={'HeaderAndNavigation'}>
            <Header
                onMenuClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                isMenuOpen={isMobileMenuOpen}
            />
            <nav>
                <DesktopNavigationList
                    currentPath={currentPath}
                />
                {isMobileMenuOpen &&
                    <MobileMenuList
                        currentPath={currentPath}
                        onMenuUnitClick={() => setIsMobileMenuOpen(false)}
                    />
                }
            </nav>
        </div>
    </>
}