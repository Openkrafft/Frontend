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

export const RoleTitle = Style.div`
    .role-title {
        width: 100%;
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

export const CompanyName = Style.div`
    .company-name {
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
    .date-seperator {
        margin: 0 5px
    }
    .start-date,
    .end-date {
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
    }
`

export const JobDescription = Style.div`
    font-size: 14px;
    border: 1px solid transparent;
    transition: .1s;
    outline: none;

    &:hover {
        border: 1px dashed #73bcff;
    }
`
