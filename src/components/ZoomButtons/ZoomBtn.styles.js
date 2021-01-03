import Style, {keyframes} from 'styled-components'
import { bounceInRight } from 'react-animations'

export const ZoomButtons = Style.div`
    position: fixed;
    right: 70px;
    top: 25%;
    height: 85px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    z-index: 10;
    animation: .8s ${keyframes `${bounceInRight}`};
`

export const ZoomInButton = Style.button`
    height: 36px;
    width: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    outline: none;
    border-radius: 100%;
    box-shadow: 0px 2px 5px 1px rgb(155 160 175 / 23%);
    background-color: #fff;
    cursor: pointer;
    transition: .1s ease;

    &:hover {
        background: #edf5ff;
    }
`

export const ZoomOutButton = Style(ZoomInButton)``