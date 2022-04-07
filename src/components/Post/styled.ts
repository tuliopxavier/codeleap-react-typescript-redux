import styled from 'styled-components';

export const PostItem = styled.article`
display: flex;
flex-direction: column;
border: 1px solid #999;
margin: 0 2.5rem 2rem;
font-size: 18px;
position: relative;

& header {
    display: flex;
    justify-content: space-between;
    color: #fff;

    & .icons {
        display: flex;
        align-items: center;
        gap: 2rem;
        
        & button {
            font-size: 1.75rem;
            color: #fff;
            background-color: transparent;
            border: none;
            cursor: pointer;
        }
    }

}

& dialog {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    max-width: 661px;
    height: 168px;
    padding: 2rem;
    
    align-items: center;
    justify-content: center;
    
    animation: modal-animation .25s ease;

    & p{
        margin-bottom: 3rem;
    }

    & label {

    }

    & input {

    }

    &::backdrop {
        position: fixed;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;
        background: rgba(0, 0, 0, 0.1);
    }


    & div {
        display: flex;
        justify-content: flex-end;
        gap: 2rem;
    }

    @keyframes modal-animation {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }
}

    
& .post-info {
    color: #777;
    display: flex;
    justify-content: space-between;
    margin: 1.5rem 2rem;
}

& > p {
    margin: 0 2rem 1.5rem;

    &:last-of-type {
        margin-bottom: 2.5rem;
    }
}
`