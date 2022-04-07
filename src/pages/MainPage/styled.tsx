import styled from 'styled-components';

export const Section = styled.section`

display: flex;
flex-direction: column;
width: 800px;
min-height: 100vh;
background-color: #fff;

& header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 5rem;
    background-color: #000;
    padding: 0 2.5rem;

    & h1 {
        color: #fff;
        font-size: 1.5rem;
    }

    & button {
        display: flex;
        align-items: center;
        border: none;
        gap: .5rem;
        padding-left: .5rem;
        text-decoration: underline;
    }
}

& form {
    display: flex;
    flex-direction: column;
    border: 1px solid #999;
    padding: 1.75rem 2rem;
    margin: 2.75rem 2.5rem;

    & h2 {
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }

    & label {
        margin-bottom: 1rem;
    }

    & small {
    color: #777;
    margin-left: .5rem;
    }

    & input {
        height: 1.75rem;
        border-radius: .25rem;
        margin-bottom: 1.25rem;
        border: 1px solid #777;
        padding: .5rem .75rem;
        font-size: 1rem;
        padding: .5rem .75rem;

        &::placeholder {
            opacity: .3;
        }
    }

    & textarea {
        font-family: 'Roboto', sans-serif;
        font-size: 1rem;
        padding: .5rem .75rem;
        border-radius: .25rem;
        margin-bottom: 2rem;

        &::placeholder {
            opacity: .3;
        }
    }

    & button {
    align-self: flex-end;
    }
}

& ul.posts-list {
    display: flex;
    flex-direction: column-reverse;
}
`
    

export const UpButton = styled.button`

width: 2rem;
height: 2rem;
border: none;
font-size: 2rem;

position: fixed;
bottom: 2rem;
right: 2rem;

cursor: pointer;

&:hover svg {
    animation: bounce .75s infinite ease;
}

@keyframes bounce {
    0% { transform: translateY(0%) };
    50% { transform: translateY(-25%) };
    100% { transform: translateY(0%) };
}

&.hide-button {
    display: none;
}
`