import styled from 'styled-components';

export const PostItem = styled.article<any>`
  display: flex;
  flex-direction: column;
  border: ${({ isDeleting, isEditing }) => isDeleting || isEditing ? '1px solid #99999950' : '1px solid #999'};
  margin: 0 2.5rem 2rem;
  font-size: 18px;
  min-height: 349px;

  & header {
    display: flex;
    justify-content: space-between;
    color: #fff;
    filter: ${({ isDeleting, isEditing }) => isDeleting || isEditing ? 'blur(1px)' : ''};
    opacity: ${({ isDeleting, isEditing }) => isDeleting || isEditing ? 0.25 : 1};

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

  & .post-info {
    color: #777;
    display: flex;
    justify-content: space-between;
    margin: 1.5rem 2rem;
    filter: ${({ isDeleting, isEditing }) => isDeleting || isEditing ? 'blur(1px)' : ''};
    opacity: ${({ isDeleting, isEditing }) => isDeleting || isEditing ? 0.25 : 1};
  }

  & > p {
    margin: 0 2rem 1.5rem;
    filter: ${({ isDeleting, isEditing }) => isDeleting || isEditing ? 'blur(1px)' : ''};
    opacity: ${({ isDeleting, isEditing }) => isDeleting || isEditing ? 0.25 : 1};

    &:last-of-type {
      margin-bottom: 2.5rem;
    }
  }
`;


export const DeleteDialog = styled.dialog`
  position: absolute;
  inset: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  max-width: 661px;
  height: 168px;
  padding: 2rem;
  border: 1px solid #000;
  animation: modal-animation 0.25s ease;

  & p {
    margin-bottom: 3rem;
  }

  & div {
    display: flex;
    justify-content: flex-end;
    gap: 2rem;
  }

  & .edit-content {
      display: flex;
      flex-direction: column;
      gap: .5rem;
  }

  @keyframes modal-animation {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const EditDialog = styled.dialog`
  position: absolute;
  top: 46%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  max-width: 661px;
  height: 90%;
  padding: 2rem;
  border: 1px solid #000;
  animation: modal-animation 0.25s ease;

  & p {
      margin-bottom: 2rem;
  }

  & div {
    display: flex;
    justify-content: flex-end;
    gap: 2rem;
  }

  & .edit-content {
    display: flex;
    flex-direction: column;
    gap: 0;

    & label {
      margin-bottom: .5rem;
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
  }

  @keyframes modal-animation {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;