import Style from 'styled-components'

export const ExperienceContainer = Style.div`
    position: relative;
    outline: none;
    margin-top: 15px;
    border: 1px solid transparent;
    transition: .1s;

    &:hover {
        border: 1px dashed #1890ff;
    }
`
export const SectionTitle = Style.input`
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
`

export const Role = Style.div`
    position: relative;
    border: 1px solid transparent;
    transition: .1s;
    outline: none;

    &:not(:first-child) {
        margin-top: 20px;
    }

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

export const CompanyName = Style.div`
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

export const List = Style.div`
    font-size: 14px;
    border: 1px solid transparent;
    transition: .1s;
    outline: none;

    &:hover {
        border: 1px dashed #73bcff;
    }
`
export const EditExperience = Style.button`
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
export const AddRole = Style(EditExperience)`
    top: 40px
`
