import type { PostProps } from '../../types/PostTypes';
import React, { FormEvent, useEffect, useRef, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Main } from '../../components/Main';
import { Button } from '../../components/Button';
import { Post } from '../../components/Post';
import { MdKeyboardArrowUp, MdLogout } from 'react-icons/Md';
import { format } from 'date-fns';
import { Section, UpButton } from './styled';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { setUsername } from '../../actions/userSlice';
import { setPosts } from '../../actions/postsSlice';
// import api from '../../actions/services/api';

export const MainPage = () => {
    const [inputValue, setInputValue] = useState('');
    const [textareaValue, setTextareaValue] = useState('');

    const [id, setId] = useState(0);
    const [isDisabled, setIsDisabled] = useState(true);
    const [hideScrollTopButton, setHideScrollTopButton] = useState('hide-button');

    const username = useSelector((state: RootState) => state.username.value);
    const posts = useSelector((state: RootState) => state.posts.value);
    const dispatch = useDispatch();
    
    const input = useRef<HTMLInputElement>(null);
    const textarea = useRef<HTMLTextAreaElement>(null);

    // IF GOING TO FETCH FROM THE API
    // async function getPosts() {
    //     const { data } = await api.get('/?format=json');
    //     setPosts(data.results);        
    // };

    useEffect(() => {
        input?.current?.focus();
        // getPosts();
    }, []);

    function handleChangeInput(e: React.ChangeEvent<HTMLInputElement>) {
        (input?.current?.value.length && textarea?.current?.value.length) ? setIsDisabled(false) : setIsDisabled(true);
        setInputValue(e.currentTarget.value);
    };

    function handleChangeTextarea(e: React.ChangeEvent<HTMLTextAreaElement>) {
        (input?.current?.value.length && textarea?.current?.value.length) ? setIsDisabled(false) : setIsDisabled(true);
        setTextareaValue(e.currentTarget.value);
    };

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (!inputValue) return;
        if (!textareaValue) return;

        setId(id + 1);
        let date = format(new Date(), "HH:mm:ss");

        const newPost = {
            id: id,
            username: username,
            created_datetime: date,
            title: inputValue,
            content: textareaValue
        }
        console.log(newPost);
        
        setPosts(newPost);
        input?.current?.focus();
        window.scroll({ top: 645, behavior: "smooth" });
        console.log(posts);
        
    };

    function handleLogout() {
        dispatch(setUsername(''));
    };

    // show scrolling top button at window view bottom
    window.onscroll = function () {
        let currentScrollPosition = window.pageYOffset;
        const windowViewHeight = window.innerHeight;

        (currentScrollPosition > windowViewHeight) ? setHideScrollTopButton('') : setHideScrollTopButton('hide-button');
    };
    // scrolling top button
    function handleScrollTop() {
        window.scroll({ top: 0, behavior: "smooth" });
    };

    return (
        <Main>
            {username ?
                <Section>
                    <header>
                        <h1>CodeLeap Network</h1>
                        <Button onClick={handleLogout}><MdLogout />Logout</Button>
                    </header>

                    <form onSubmit={handleSubmit}>
                        <h2>What's on your mind?</h2>

                        <label htmlFor="title">
                            Title {isDisabled && <small>(required)</small>}
                        </label>
                        <input ref={input} onChange={handleChangeInput} type="text" id="title" placeholder="Hello World" maxLength={50} required />

                        <label htmlFor="content">
                            Content {isDisabled && <small>(required)</small>}
                        </label>
                        <textarea ref={textarea} onChange={handleChangeTextarea} id="content" cols={30} rows={10} placeholder="Content here" maxLength={805} required></textarea>

                        <Button disabled={isDisabled}>Create</Button>
                    </form>

                    <ul className="posts-list">
                        {posts?.map(post => { return <Post key={post.id} post={post} /> })}
                    </ul>

                    <UpButton className={hideScrollTopButton} onClick={handleScrollTop} aria-label="scroll to top button">
                        <MdKeyboardArrowUp />
                    </UpButton>
                </Section>
                :
                <Navigate to='/signup' />
            }
        </Main>
    );
};