import styled from 'styled-components';

export const Form = styled.form`
display: flex;
flex-direction: column;
width: 500px;
background-color: #fff;
border: 1px solid #ccc;
padding: 1.75rem 2rem;
margin: 1rem;

& h1 {
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

& button {
    align-self: flex-end;
}

`
