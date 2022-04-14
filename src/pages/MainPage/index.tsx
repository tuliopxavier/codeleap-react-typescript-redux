import { useEffect, useRef, useState } from 'react';
import { Main } from '../../components/Main';
import { Button } from '../../components/Button';
import { Post } from '../../components/Post';
import { MdKeyboardArrowUp, MdLogout } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { setUsername } from '../../actions/userSlice';
import { setPosts } from '../../actions/postsSlice';
import { Section, UpButton } from './styled';
// import api from '../../actions/services/api';

export const MainPage = () => {
    const username = useSelector((state: RootState) => state.username?.value);
    const posts = useSelector((state: RootState) => state.posts?.value);
    const dispatch = useDispatch();
    
    const [titleValue, setTitleValue] = useState('');
    const [contentValue, setContentValue] = useState('');
    const [postId, setPostId] = useState(posts?.length);
    const [isDisabled, setIsDisabled] = useState(true);
    const [hideScrollTopButton, setHideScrollTopButton] = useState('hide-button');

    // IF GOING TO FETCH DATA FROM THE API
    // async function getPosts() {
    //     const { data } = await api.get('/?format=json');
    //     setPosts(data.results);        
    // };

    // useEffect(() => {
    //     getPosts();
    // }, []);

    const input = useRef<HTMLInputElement>(null);
    useEffect(() => {
        input?.current?.focus();
    }, []);

    useEffect(() => {
        (titleValue.trim() && contentValue.trim()) ? setIsDisabled(false) : setIsDisabled(true);
    },[titleValue, contentValue]);

    function handleSubmit(e: MouseEvent) {
        e.preventDefault();
        if (!titleValue) return;
        if (!contentValue) return;

        setPostId(postId + 1);
        const date = new Date();

        const newPost = {
            id: postId,
            username: username,
            created_datetime: date.toString(),
            title: titleValue,
            content: contentValue
        };
        
        dispatch(setPosts(newPost));
        
        setTitleValue('');
        setContentValue('');
        input?.current?.focus();
        window.scroll({ top: 645, behavior: "smooth" });
    };

    function handleLogout() {
        dispatch(setUsername(''));
    };

    // show scrolling top button at window view bottom
    window.onscroll = function () {
        const currentScrollPosition = window.pageYOffset;
        const windowViewHeight = window.innerHeight;

        (currentScrollPosition > windowViewHeight) ? setHideScrollTopButton('') : setHideScrollTopButton('hide-button');
    };
    // scrolling top button
    function handleScrollTop() {
        window.scroll({ top: 0, behavior: "smooth" });
    };

    return (
        <Main>
            <Section>
                <header>
                    <h1>CodeLeap Network</h1>
                    <Button onClick={handleLogout}><MdLogout />Logout</Button>
                </header>

                <form>
                    <h2>What's on your mind, <span>{username}</span>?</h2>

                    <label htmlFor="title">
                        Title {isDisabled && <small>(required)</small>}
                    </label>
                    <input ref={input} value={titleValue} onChange={(e) => setTitleValue(e.target.value)} type="text" id="title" placeholder="Hello world" maxLength={50} required />

                    <label htmlFor="content">
                        Content {isDisabled && <small>(required)</small>}
                    </label>
                    <textarea value={contentValue} onChange={(e) => setContentValue(e.target.value)} id="content" cols={30} rows={10} placeholder="Content here" maxLength={805} required></textarea>

                    <Button onClick={handleSubmit} disabled={isDisabled}>Create</Button>
                </form>

                <ul className="posts-list">
                    {posts?.map(post => { return <Post key={post.id} post={post} /> })}
                </ul>

                <UpButton className={hideScrollTopButton} onClick={handleScrollTop} aria-label="scroll to top button">
                    <MdKeyboardArrowUp />
                </UpButton>
            </Section>
        </Main>
    );
};