import Style from 'styled-components'

export const SchoolContainer = Style.div`
    margin-bottom: 15px;
    position: relative;
    border: 1px solid transparent;
    transition: .1s;
    outline: none;

    &:hover {
        border: 1px dashed #73bcff;
    }
`

export const SchoolWrapper = Style.div`
    display: flex;
    justify-content: space-between;
    border: 1px solid transparent;
    transition: .1s;
    outline: none;

    &:hover {
        border: 1px dashed #73bcff;
    }
`

export const SchoolName = Style.div`
    .school-name {
        color: gray;
        font-size: 20px;
        margin-bottom: 0;
        border: 1px solid transparent;
        transition: .1s;
        outline: none;
    
        &:hover {
            border: 1px dashed #73bcff;
        }
    }
`

export const Degree = Style.div`
    .degree {
        font-size: 20px;
        margin-bottom: 10px;
        border: 1px solid transparent;
        transition: .1s;
        outline: none;
    
        &:hover {
            border: 1px dashed #73bcff;
        }
    }
`

export const Date = Style.div`
    display: flex;
    align-items: center;
    
    .date-seperator {
        margin: 0 10px;
    }
    .start-date,
    .end-date {
        color: gray;
        font-style: italic;
        border: 1px solid transparent;
        transition: .1s;
        outline: none;
        cursor: pointer;
    
        &:hover {
            border: 1px dashed #73bcff;
        }
    }
`

export const Description = Style.div`
    .description {
        font-size: 14px;
        border: 1px solid transparent;
        transition: .1s;
        outline: none;
    
        &:hover {
            border: 1px dashed #73bcff;
        }
    }
`

export const DeleteSchool = Style.button`
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

    &:hover {
        background: #166cbb
    }
`
export const DragSchool = Style(DeleteSchool)`
    top: 40px;
    padding: 7px 8px;

    &:active {
        cursor: grabbing;
    }
`
