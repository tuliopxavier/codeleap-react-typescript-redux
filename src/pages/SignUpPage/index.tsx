import { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react';
import { Button } from '../../components/Button';
import { Main } from  '../../components/Main'
import { Form } from './styled';

export const SignUpPage = () => {
    const [isDisabled, setIsDisabled] = useState<boolean>(true);
    const [username, setUsername] = useState('');
    const input = useRef<any>();
    
    function handleInput(e: ChangeEvent<HTMLInputElement>) {
        (input.current.value.length > 0) ? setIsDisabled(false) : setIsDisabled(true);
        setUsername(e.currentTarget.value);
    };

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setUsername(e.currentTarget.value);
        console.log(username);
        // some validation logic
        // if ok redirect to main page
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
                <input ref={input} onChange={handleInput} type="text" placeholder="John Doe" required />
                <Button disabled={isDisabled}>Enter</Button>
            </Form>
        </Main>
    );
};