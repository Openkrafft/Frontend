import Style from 'styled-components'

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
