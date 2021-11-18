import styled from 'styled-components';

export const DragContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* padding: 20px; */
    border: 2px dashed;
    margin: 30px 0;
    width: calc(100%-60px);
    .dropzone{
        width: 100%;
        &:focus{
            outline: none;
        }
        &:hover{
            cursor: pointer;
        }
    }
    .path-select{
        margin-bottom: 30px;
    }
    ul{
        margin-bottom: 20px;
    }
    p{
        text-align: center;
        width: 100%;
        padding: 30px;
    }

`