import type { PostItemProps } from '../../types/PostTypes';
import { useRef, useState } from 'react';
import { MdDeleteForever } from 'react-icons/Md';
import { FaEdit } from 'react-icons/Fa';
import { Button } from '../Button';
import useClickOutside from '../../hooks/useClickOutside';
import Fade from 'react-reveal/Fade';
import { PostItem } from './styled';

export const Post = ({post}: PostItemProps) => {
    const [isDeleting, setIsDeleting] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const deleteDialog = useRef<HTMLDivElement>(null);
    const editDialog = useRef<HTMLDivElement>(null);
    
    
    const { id, username, created_datetime, title, content } = post;

    // handle click outside modal
    useClickOutside(deleteDialog, () => {
        setIsDeleting(false);
    });
    useClickOutside(editDialog, () => {
        setIsEditing(false);
    });

    function toogleDeleteModal(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        setIsDeleting(true);
    };
    function toogleEditModal(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        setIsEditing(true);
    };

    function handleDeletePost(id: number) {
        console.log('delete clicked', id );
        // const filteredPosts = posts.filter(post => post.id !== id);
        // setPosts(filteredPosts);
    };
    function handleEditPost(id: number) {
        console.log('edit clicked', id);
    };

    return (
        <Fade bottom>
            <PostItem key={id}>
                <header>
                    <h3>{title}</h3>
                    <div className="icons">
                        <button onClick={toogleDeleteModal} aria-label="Delete post button"><MdDeleteForever /></button>
                        <button onClick={toogleEditModal} aria-label="Edit post button"><FaEdit /></button>
                    </div>
                </header>

                <div className="post-info">
                    <p>@{username}</p>
                    <p>{created_datetime}</p>
                </div>

                <p> {content} </p>

                {/* confirm delete modal */}
                <dialog ref={deleteDialog} open={isDeleting ? true : false}>
                    <p>Are you sure you want to delete this item?</p>
                    <div>
                        <Button color="#000" backgroundColor="#fff" onClick={() => setIsDeleting(false)}>Cancel</Button>
                        <Button color="#000" backgroundColor="#fff" onClick={() => handleDeletePost(id)}>Ok</Button>
                    </div>
                </dialog>

                {/* confirm edit modal */}
                <dialog ref={editDialog} open={isEditing ? true : false}>
                    <div className="edit-post">
                        <p>Edit Item</p>
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" placeholder="Hello world" />
                        <label htmlFor="content">Content</label>
                        <input type="text" id="content" placeholder="Content Here" />
                        <div>
                            <Button color="#000" backgroundColor="#fff" onClick={() => setIsEditing(false)}>Cancel</Button>
                            <Button color="#000" backgroundColor="#fff" onClick={() => handleEditPost(id)}>Save</Button>
                        </div>
                    </div>
                </dialog>
            </PostItem>
        </Fade>
    );
};