import Style from 'styled-components'

export const SectionContainer = Style.div`
    margin-top: 15px;
    position: relative;
    outline: none;
    border: 1px solid transparent;
    transition: .1s;

    &:hover {
        border: 1px dashed #1890ff;
    }
`
export const SectionButtons = Style.div`
    display: block;
    position: absolute;
    right: 0px;
    top: -38px;
`

export const EditSection = Style.button`
    margin-right: 1px;
    border: none;
    outline: none;
    background: #1890ff;
    padding: 8px 10px;
    color: #fff;
    cursor: pointer;
    transition: .1s;

    &:hover {
        background: #166cbb
    }
`

export const DeleteSection = Style(EditSection)``

export const AddSection = Style(EditSection)``

export const DragSection = Style(EditSection)``

export const SectionTitle = Style.div`
    .section-title {
        margin-bottom: 15px;
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

export const SectionChildElements = Style.div``
