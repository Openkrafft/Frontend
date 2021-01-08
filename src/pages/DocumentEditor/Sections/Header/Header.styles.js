import Style from 'styled-components'

export const HeaderContainer = Style.div`
    position: relative;
    border: 1px solid transparent;
    transition: 0.1s;

    &:hover {
        border: 1px dashed #1890ff;    
    }
`

export const Name = Style.input`
    width: 100%;
    border: 1px solid transparent;
    margin: 0px;
    font-size: 35px;
    outline: none;

    &:hover {
        border: 1px dashed #1890ff;    
    }
`

export const PositionName = Style.input`
    width: 100%;
    border: 1px solid transparent;
    margin-bottom: 15px;
    margin-top: 0px;
    font-size: 25px;
    color: #2d3436;
    outline: none;

    &:hover {
        border: 1px dashed #1890ff;    
    }
`

export const Summary = Style.div`
    .summary {
        width: 100%;
        resize: none;
        overflow: hidden;
        padding: 0;
        border: 1px solid transparent;
        font-size: 14px;
        outline: none;
    
        &:hover {
            border: 1px dashed #1890ff;    
        }   
    }
`
export const EditHeader = Style.button`
    border: none;
    outline: none;
    display: none;
    position: absolute;
    right: -35px;
    background: #1890ff;
    padding: 8px 10px;
    top: 0px;
    color: #fff;
    cursor: pointer;
    transition: .1s;
`
