import Style from 'styled-components'

export const RoleContainer = Style.div`
    position: relative;
    border: 1px solid transparent;
    transition: .1s;
    outline: none;

    &:hover {
        border: 1px dashed #73bcff;
    }
`

export const RoleTitle = Style.input`
    width: 100%;
    font-size: 20px;
    margin-bottom: 0;
    border: 1px solid transparent;
    transition: .1s;
    outline: none;

    &:hover {
        border: 1px dashed #73bcff;
    }
`

export const CompanyName = Style.input`
    font-size: 20px;
    margin-bottom: 10px;
    border: 1px solid transparent;
    transition: .1s;
    outline: none;

    &:hover {
        border: 1px dashed #73bcff;
    }
`

export const Date = Style.div`
    color: gray;
    font-style: italic;
    margin-bottom: 10px;
    border: 1px solid transparent;
    transition: .1s;
    outline: none;
    cursor: pointer;

    &:hover {
        border: 1px dashed #73bcff;
    }
`

export const StartDate = Style.input`
    width: 80px;
    border: 1px solid transparent;
    transition: .1s;
    outline: none;
    cursor: pointer;

    &:hover {
        border: 1px dashed #73bcff;
    }
`

export const EndDate = Style.input`
    margin-left: 15px;
    width: 80px;
    border: 1px solid transparent;
    transition: .1s;
    outline: none;
    cursor: pointer;

    &:hover {
        border: 1px dashed #73bcff;
    }
`

export const JobDescription = Style.div`
    .job-description {
        font-size: 14px;
        border: 1px solid transparent;
        transition: .1s;
        outline: none;
    
        &:hover {
            border: 1px dashed #73bcff;
        }
    }
`

export const EditRole = Style.button`
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
