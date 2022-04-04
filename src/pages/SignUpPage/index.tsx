import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { Button } from '../../components/Button';
import { Main, Form } from './styled';

export const SignUpPage = () => {
    const [isDisabled, setIsDisabled] = useState<boolean>(true);
    const input = useRef<any>(null);
    
    function handleInput() {
        (input.current.value.length > 0) ? setIsDisabled(false) : setIsDisabled(true);
    };

    function handleSubmit(e: SubmitEvent) {
        e.preventDefault();
        console.log('clicked');
    };

    useEffect(() => {
        input.current.focus();
      }, []);

    return (
        <Main>
            <Form>
                <h1>Welcome to CodeLeap network!</h1>
                <label htmlFor="">
                    Please enter your user name 
                    {isDisabled && <small>(required)</small>}
                </label>
                <input ref={input} onChange={handleInput} type="text" placeholder="John Doe" />
                <Button disabled={isDisabled}>Enter</Button>
            </Form>
        </Main>
    );
};