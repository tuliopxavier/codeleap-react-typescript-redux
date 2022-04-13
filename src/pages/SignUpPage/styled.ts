import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 500px;
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 1.75rem 2rem;
  margin: 1rem;

  @media screen and (prefers-color-scheme: dark) {
    color: #ddd;
    background-color: #333;
    border: 1px solid #222;
  }

  & h1 {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  & label {
    margin-bottom: 1rem;
  }

  & small {
    color: #ccc;
    margin-left: 0.5rem;
  }

  & input {
    height: 1.75rem;
    border-radius: 0.25rem;
    margin-bottom: 1.25rem;
    border: 1px solid #777;
    padding: 0.5rem 0.75rem;
    font-size: 1rem;
    padding: 0.5rem 0.75rem;

    &::placeholder {
      opacity: 0.3;
    }

    @media screen and (prefers-color-scheme: dark) {
      color: #ddd;
      background-color: #222;
    }
  }

  & button {
    align-self: flex-end;
  }
`;
