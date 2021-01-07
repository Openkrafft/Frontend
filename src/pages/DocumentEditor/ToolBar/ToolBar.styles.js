import Style, { keyframes } from 'styled-components'
import { bounceInLeft } from 'react-animations'

export const ToolBarContainer = Style.div`
    height: 240px;
    width: 45px;
    position: fixed;
    left: 30px;
    top: 18%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    z-index: 10;
    animation: .8s ${keyframes`${bounceInLeft}`};
`

export const ToolButton = Style.button`
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
    font-size: 16px;
    cursor: pointer;
    transition: .1s ease;

    &:hover {
        background: #edf5ff;
    }
`
