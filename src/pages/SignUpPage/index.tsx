import { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '../../components/Button';
import { Main } from  '../../components/Main'
import { setUsername } from '../../actions/userSlice'
import { Form } from './styled';

export const SignUpPage = () => {
    const [isDisabled, setIsDisabled] = useState<boolean>(true);
    const input = useRef<any>();
    const dispatch = useDispatch();
    
    function handleInput(e: ChangeEvent<HTMLInputElement>) {
        (input.current.value.length) ? setIsDisabled(false) : setIsDisabled(true);
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
            <Form onSubmit={handleSubmit}>
                <h1>Welcome to CodeLeap network!</h1>
                <label htmlFor="">
                    Please enter your user name
                    {isDisabled && <small>(required)</small>}
                </label>
                <input ref={input} onChange={handleInput} type="text" placeholder="John Doe" maxLength={40} required />
                <Button disabled={isDisabled}>Enter</Button>
            </Form>
        </Main>
        
    );
};