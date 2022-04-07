export type PostProps = {
    id: number;
    username: string;
    created_datetime: string;
    title: string;
    content: string;
};

export type PostItemProps = {
    post: {
        id: number;
        username: string;
        created_datetime: string;
        title: string;
        content: string;
    };
};