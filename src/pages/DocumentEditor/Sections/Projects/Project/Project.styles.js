import Style from 'styled-components'

export const ProjectContainer = Style.div`
    margin-bottom: 15px;
    position: relative;
    border: 1px solid transparent;
    transition: .1s;
    outline: none;

    &:hover {
        border: 1px dashed #73bcff;
    }
`

export const ProjectName = Style.div`
    .project-name {
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

export const ProjectLink = Style.div`
    .project-link {
        font-size: 14px;
        margin-bottom: 10px;
        border: 1px solid transparent;
        transition: .1s;
        outline: none;
    
        &:hover {
            border: 1px dashed #73bcff;
        }
    }
`

export const GithubLink = Style.div`
    .project-link {
        color: gray;
        font-size: 14px;
        margin-bottom: 10px;
        border: 1px solid transparent;
        transition: .1s;
        outline: none;
    
        &:hover {
            border: 1px dashed #73bcff;
        }
    }
`

export const ProjectDescription = Style.div`
    .project-description {
        color: gray;
        font-size: 14px;
        border: 1px solid transparent;
        transition: .1s;
        outline: none;
    
        &:hover {
            border: 1px dashed #73bcff;
        }
    }
`

export const DeleteProject = Style.button`
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
export const DragProject = Style(DeleteProject)`
    top: 40px;
    padding: 7px 8px;

    &:active {
        cursor: grabbing;
    }
`
