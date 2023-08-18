import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";


const ColorSwicher = () => {
    const [style, setStyle] = useState('../src/assets/css/skin/skin-1.css');
    const [switcher, setSwitcher] = useState('-70px');
    const RouterPath = useLocation();

    let link = document.createElement("link");
    useEffect(() => {
        let head = document.head;
        link.type = "text/css";
        link.rel = "stylesheet";
        link.setAttribute('class', 'skins')
        head.appendChild(link);
        link.href = style;
    });

    useEffect(() => {
        let getPath = RouterPath.pathname;
        if (getPath === '/') {
            setStyle('../src/assets/css/skin/skin-1.css')
        }
        if (getPath === '/business-man') {
            setStyle('../src/assets/css/skin/skin-2.css')
        }
        if (getPath === '/modal') {
            setStyle('../src/assets/css/skin/skin-3.css')
        }
        if (getPath === '/doctor') {
            setStyle('../src/assets/css/skin/skin-2.css')
        }
        if (getPath === '/security') {
            setStyle('../src/assets/css/skin/skin-4.css')
        }
        if (getPath === '/health-coach') {
            setStyle('../src/assets/css/skin/skin-3.css')
        }
        if (getPath === '/electrician') {
            setStyle('../src/assets/css/skin/skin-5.css')
        }
        if (getPath === '/blogger') {
            setStyle('../src/assets/css/skin/skin-2.css')
        }
        if (getPath === '/web-developer') {
            setStyle('../src/assets/css/skin/skin-5.css')
        }
        if (getPath === '/swimmer') {
            setStyle('../src/assets/css/skin/skin-5.css')
        }
        if (getPath === '/dance-trainer') {
            setStyle('../src/assets/css/skin/skin-1.css')
        }
        if (getPath === '/news-anchor') {
            setStyle('../src/assets/css/skin/skin-2.css')
        }
        if (getPath === '/youtube') {
            setStyle('../src/assets/css/skin/skin-1.css')
        }
    }, [RouterPath.pathname])

    function ColorsBtn(action: string) {
        link.remove()
        switch (action) {
            case '1':
                setStyle('../src/assets/css/skin/skin-1.css')
                break;
            case '2':
                setStyle('../src/assets/css/skin/skin-2.css')
                break;
            case '3':
                setStyle('../src/assets/css/skin/skin-3.css')
                break;
            case '4':
                setStyle('../src/assets/css/skin/skin-4.css')
                break;
            case '5':
                setStyle('../src/assets/css/skin/skin-5.css')
                break;
            case '6':
                setStyle('../src/assets/css/skin/skin-6.css')
                break;
            case '7':
                setStyle('../src/assets/css/skin/skin-7.css')
                break;
            case '8':
                setStyle('../src/assets/css/skin/skin-8.css')
                break;

            default:
                break;
        }
    }

    return (
        <>
            <div id="dzSwitcher" className="styleswitcher" style={{ left: `${switcher}`, transition: 'all .3s linear', zIndex: 999999999 }}>
                <div className="styleswitcher-inner">
                    <div className="switcher-btn-bx">
                        <a className="switch-btn" onClick={() => { switcher === '-70px' ? setSwitcher('0px') : setSwitcher('-70px') }}> <span className="fa fa-cogs fa-lg"></span></a>
                    </div>
                    <Link to={'#'} className="dez-page site-button button-sm">Delete All Cookie</Link>
                    <div className="theme-box">
                        <ul className="color-skins-db theme-panel-save">
                            <li> <Link onClick={() => { ColorsBtn('1') }} to={'#'} className="theme-skin skin-1" dir="css/skin/skin-1"></Link></li>
                            <li> <Link onClick={() => { ColorsBtn('2') }} to={'#'} className="theme-skin skin-2" dir="css/skin/skin-2"></Link></li>
                            <li> <Link onClick={() => { ColorsBtn('3') }} to={'#'} className="theme-skin skin-3" dir="css/skin/skin-3"></Link></li>
                            <li> <Link onClick={() => { ColorsBtn('4') }} to={'#'} className="theme-skin skin-4" dir="css/skin/skin-4"></Link></li>
                            <li> <Link onClick={() => { ColorsBtn('5') }} to={'#'} className="theme-skin skin-5" dir="css/skin/skin-5"></Link></li>
                            <li> <Link onClick={() => { ColorsBtn('6') }} to={'#'} className="theme-skin skin-6" dir="css/skin/skin-6"></Link></li>
                            <li> <Link onClick={() => { ColorsBtn('7') }} to={'#'} className="theme-skin skin-7" dir="css/skin/skin-7"></Link></li>
                            <li> <Link onClick={() => { ColorsBtn('8') }} to={'#'} className="theme-skin skin-8" dir="css/skin/skin-8"></Link></li>
                        </ul>
                    </div>
                </div>
            </div>


        </>
    )
}

export default ColorSwicher