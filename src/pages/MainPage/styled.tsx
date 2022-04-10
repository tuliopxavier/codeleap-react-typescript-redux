import styled from 'styled-components';

export const Section = styled.section`
display: flex;
flex-direction: column;
width: 800px;
min-height: 100vh;
background-color: #fff;

@media screen and (prefers-color-scheme: dark) {
    color: #ddd;
    background-color: #333;
}

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

        @media (max-width: 425px) {
            font-size: 1rem;
        }

        @media screen and (prefers-color-scheme: dark) {
            color: #ddd;
        }
    }

    & button {
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        gap: .5rem;
        text-decoration: underline;

        @media (max-width: 425px) {
            font-size: 0.75rem;
        }

        @media screen and (prefers-color-scheme: dark) {
            background-color: #000;
        }
    }
}

& form {
    display: flex;
    flex-direction: column;
    border: 1px solid #999;
    padding: 1.75rem 2rem;
    margin: 2.75rem 2.5rem;

    @media (max-width: 425px) {
        margin: 2.75rem 2rem;
    }

    @media (max-width: 375px) {
        margin: 2.75rem 1rem;
    }

    @media (max-width: 320px) {
        margin: 2.75rem 1rem;
    }

    @media screen and (prefers-color-scheme: dark) {
        border: 1px solid #000;
    }

    & h2 {
        font-size: 1.5rem;
        margin-bottom: 2rem;

        @media (max-width: 425px) {
            font-size: 1.25rem;
        }

        & span {
            text-decoration: underline;
        }
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

        @media screen and (prefers-color-scheme: dark) {
            color: #ddd;
            background-color: #222;
        }
    }

    & textarea {
        font-family: 'Roboto', sans-serif;
        font-size: 1rem;
        padding: .5rem .75rem;
        border-radius: .25rem;
        border: 1px solid #777;
        margin-bottom: 2rem;

        &::placeholder {
            opacity: .3;
        }

        @media screen and (prefers-color-scheme: dark) {
            color: #ddd;
            background-color: #222;
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