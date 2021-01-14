import Style from 'styled-components'

export const TextContent = Style.div`
    .text-content {
        border: 1px solid transparent;
        transition: .1s;
        outline: none;
    
        &:hover {
            border: 1px dashed #1890ff;
        }
    }
`
