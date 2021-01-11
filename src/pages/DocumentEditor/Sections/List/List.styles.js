import Style from 'styled-components'

export const ListContainer = Style.div`
    position: relative;
    outline: none;
    margin-top: 15px;
    border: 1px solid transparent;
    transition: .1s;

    &:hover {
        border: 1px dashed #1890ff;
    }
`
export const SectionTitle = Style.div`
    .section-title {
        width: 100%;
        color: #192a56;
        font-size: 25px;
        margin-top: 0px;
        border: 1px solid transparent;
        transition: .1s;
        outline: none;
    
        &:hover {
            border: 1px dashed #1890ff;
        }
    }
`

export const ListContent = Style.div`
    .list-content {
        border: 1px solid transparent;
        transition: .1s;
        outline: none;
    
        &:hover {
            border: 1px dashed #1890ff;
        }
    }
`

export const EditSection = Style.button`
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

export const DeleteSection = Style(EditSection)`
    top: 40px;
`
