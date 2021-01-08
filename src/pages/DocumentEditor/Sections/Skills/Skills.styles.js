import Style from 'styled-components'

export const SkillsContainer = Style.div`
    position: relative;
    margin-top: 15px;
    border: 1px solid transparent;
    transition: .1s;

    &:hover {
        border: 1px dashed #1890ff;
    }
`
export const SectionTitle = Style.div`
    .skills-title {
        width: 100%;
        color: #192a56;
        font-size: 25px;
        margin-top: 0px;
        margin-bottom: 10px;
        border: 1px solid transparent;
        transition: .1s;
        outline: none;
    
        &:hover {
            border: 1px dashed #1890ff;
        }
    }
`

export const List = Style.div`
    .skills-list {
        border: 1px solid transparent;
        transition: .1s;
        outline: none;
    
        &:hover {
            border: 1px dashed #1890ff;
        }
    }
`

export const EditSkills = Style.button`
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
