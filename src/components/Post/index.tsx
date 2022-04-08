import type { PostItemProps } from '../../types/PostTypes';
import { ChangeEvent, useRef, useState } from 'react';
import { MdDeleteForever } from 'react-icons/Md';
import { FaEdit } from 'react-icons/Fa';
import { Button } from '../Button';
import useClickOutside from '../../hooks/useClickOutside';
import Fade from 'react-reveal/Fade';
import { DeleteDialog, EditDialog, PostItem } from './styled';
import { useDispatch, useSelector } from 'react-redux';
import { deletePost, editPost } from '../../actions/postsSlice';
import { RootState } from '../../redux/store';

export const Post = ({post}: PostItemProps) => {
    const { id, username, created_datetime, title, content } = post;
    const [editedTitle, setEditedTitle ] = useState(title);
    const [editedContent, setEditedContent ] = useState(content);

    const [isDeleting, setIsDeleting] = useState<boolean>(false);
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const deleteDialog = useRef<HTMLDivElement>(null);
    const editDialog = useRef<HTMLDivElement>(null);
    
    const Username = useSelector((state: RootState) => state.username.value);

    const dispatch = useDispatch();

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

    function handleTitleChange(e: ChangeEvent<HTMLInputElement>) {
        setEditedTitle(e.target.value);
    }

    function handleContentChange(e: ChangeEvent<HTMLTextAreaElement>) {
        setEditedContent(e.target.value);
        
    }

    function handleDeletePost(id: number) {
        dispatch(deletePost(id));
    };

    function handleEditPost(id: number) {
        dispatch(editPost({id: id, title: editedTitle, content: editedContent}));
        setIsEditing(false);
    };

    return (
        <Fade bottom>
            <PostItem isDeleting={isDeleting} isEditing={isEditing}>
                <header>
                    <h3>{title}</h3>
                    {username === Username && <div className="icons">
                        <button onClick={toogleDeleteModal} aria-label="Delete post button"><MdDeleteForever /></button>
                        <button onClick={toogleEditModal} aria-label="Edit post button"><FaEdit /></button>
                    </div>}
                </header>

                <div className="post-info">
                    <p>@{username}</p>
                    <p>{created_datetime}</p>
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
                    <p>Edit Item</p>
                    <div className="edit-content">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" defaultValue={title} onChange={handleTitleChange} placeholder="Hello world" />
                        <label htmlFor="content">Content</label>
                        <textarea id="content" defaultValue={content} onChange={handleContentChange} placeholder="Content here" maxLength={805} cols={30} rows={2} required />
                    </div>
                    <div>
                        <Button color="#000" backgroundColor="#fff" onClick={() => setIsEditing(false)}>Cancel</Button>
                        <Button color="#000" backgroundColor="#fff" onClick={() => handleEditPost(id)}>Save</Button>
                    </div>
                </EditDialog>
                
            </PostItem>
        </Fade>
    );
};