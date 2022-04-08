import { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../../components/Button';
import { Main } from  '../../components/Main'
import { RootState } from '../../redux/store';
import { setUsername } from '../../actions/userSlice'
import { Form } from './styled';
import { Navigate } from 'react-router-dom';

export const SignUpPage = () => {
    const [isDisabled, setIsDisabled] = useState<boolean>(true);
    const input = useRef<any>();

    // username global state
    const username = useSelector((state: RootState) => state.username.value);
    const dispatch = useDispatch();
    
    function handleInput(e: ChangeEvent<HTMLInputElement>) {
        (input.current.value.length > 0) ? setIsDisabled(false) : setIsDisabled(true);
    };

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        dispatch(setUsername(input.current.value));
    };

    useEffect(() => {
        input.current.focus();
    }, []);

    return (
        
        <Main>
            {!username ?
            <Form onSubmit={handleSubmit}>
                <h1>Welcome to CodeLeap network!</h1>
                <label htmlFor="">
                    Please enter your user name 
                    {isDisabled && <small>(required)</small>}
                </label>
                <input ref={input} onChange={handleInput} type="text" placeholder="John Doe" required />
                <Button disabled={isDisabled}>Enter</Button>
            </Form>
            :
            <Navigate to='/' />}
        </Main>
        
    );
};