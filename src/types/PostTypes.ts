export type PostProps = {
    id: number;
    username: string;
    created_datetime: string;
    title: string;
    content: string;
};

export interface PostItemProps {
    post: PostProps;
};

export interface PostsState {
    value: PostProps[];
};

export type EditPostProps = {
    id: number, 
    title: string, 
    content: string
};