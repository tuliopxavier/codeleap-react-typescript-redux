import styled from 'styled-components';

export const LoadingLogo = styled.div`
display: flex;
align-items: center;
justify-content: center;

width: 100%;
min-height: 100vh;

svg {
    margin: 2rem;
    animation: pulse 2s infinite ease-in;
}

@keyframes pulse {
    0% { opacity: 0; }
    50% { opacity: 1; }
    100% { opacity: 0; }
}

`