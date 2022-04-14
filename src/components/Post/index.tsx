import type { PostItemProps } from '../../types/PostTypes';
import { useRef, useState } from 'react';
import { MdDeleteForever } from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';
import { Button } from '../Button';
import { Fade } from "react-awesome-reveal";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { deletePost, editPost } from '../../actions/postsSlice';
import { formatDistanceToNow } from 'date-fns';
import useClickOutside from '../../hooks/useClickOutside';
import { DeleteDialog, EditDialog, PostItem } from './styled';

export const Post = ({post}: PostItemProps) => {
    const { id, username, created_datetime, title, content } = post;
    
    const [editedTitle, setEditedTitle ] = useState(title);
    const [editedContent, setEditedContent ] = useState(content);
    const [isDeleting, setIsDeleting] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [fadeOutPost, setFadeOutPost] = useState('');
    
    const Username = useSelector((state: RootState) => state.username?.value);
    const dispatch = useDispatch();

    // handle click outside modal
    const deleteDialog = useRef<HTMLDivElement>(null);
    const editDialog = useRef<HTMLDivElement>(null);
    useClickOutside(deleteDialog, () => { setIsDeleting(false); });
    useClickOutside(editDialog, () => { setIsEditing(false); });

    function handleEditPost(id: number) {
        if (!editedTitle || !editedContent) {
            setIsEditing(false); 
            return;
        }
        dispatch(editPost({id: id, title: editedTitle, content: editedContent}));
        setIsEditing(false);
    };

    function handleDeletePost(id: number) {
        setTimeout(() => {
            dispatch(deletePost(id));
        },500);
        setIsDeleting(false);
        setFadeOutPost('fade-out');
    };


    return (
        <div data-testid='post-item'>
            <PostItem className={fadeOutPost} isDeleting={isDeleting} isEditing={isEditing}>
                <header>
                    <h3>{title}</h3>
                    {username === Username && <div className="icons">
                        <button onClick={()=>setIsDeleting(true)} aria-label="Delete post button"><MdDeleteForever /></button>
                        <button onClick={()=>setIsEditing(true)} aria-label="Edit post button"><FaEdit /></button>
                    </div>}
                </header>

                <div className="post-info">
                    <p>@{username}</p>
                    <p>{`${formatDistanceToNow(new Date (created_datetime))} ago`}</p>
                </div>

                <p> {content} </p>

                {/* confirm delete modal */}
                <DeleteDialog ref={deleteDialog} open={isDeleting ? true : false}>
                    <p>Are you sure you want to delete this item?</p>
                    <div>
                        <Button color="#000" backgroundColor="#fff" onClick={() => setIsDeleting(false)}>Cancel</Button>
                        <Button color="#000" backgroundColor="#fff" onClick={() => handleDeletePost(id)}>Ok</Button>
                    </div>
                </DeleteDialog>

                {/* confirm edit modal */}
                <EditDialog ref={editDialog} open={isEditing ? true : false}>
                    <div className="edit-content">
                        <label htmlFor="title">Edit Title</label>
                        <input type="text" id="title" defaultValue={title} onChange={(e) => setEditedTitle(e.target.value)} placeholder="Hello world" />
                        <label htmlFor="content">Edit Content</label>
                        <textarea id="content" defaultValue={content} onChange={(e) => setEditedContent(e.target.value)} placeholder="Content here" maxLength={805} cols={30} rows={5} required />
                    </div>
                    <div>
                        <Button color="#000" backgroundColor="#fff" onClick={() => setIsEditing(false)}>Cancel</Button>
                        <Button color="#000" backgroundColor="#fff" onClick={() => handleEditPost(id)}>Save</Button>
                    </div>
                </EditDialog>
                
            </PostItem>
        </div>
    );
};