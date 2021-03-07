import Style from 'styled-components'

export const ContactContainer = Style.div`
    margin-bottom: 0px;
    padding: 13px 5px 0px 5px;
    display: flex;
    flex-wrap: wrap;
    position: relative;
    border: 1px solid #192a56;
    transition: 0.1s;
    background: transparent;

    &:hover {
        border: 1px dashed #1890ff;    
    }
`
export const ContactInformation = Style.div`
    color: #192a56;
    display: flex;
    margin-right: 25px;
`
export const EditContactInfo = Style.button`
    border: none;
    outline: none;
    display: none;
    position: absolute;
    right: -35px;
    background: #1890ff;
    padding: 8px 10px;
    top: -0px;
    color: #fff;
    cursor: pointer;
    transition: .1s;
`
