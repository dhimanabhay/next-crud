type Post = {
    id: string;
    title: string;
    description: string;
    date: Date;
};
let posts: Post[] = [];

export const getPosts = () => posts;

export const addPosts = (addPost: Post) => {
    posts.push(addPost);
};

export const deletePosts = (removePostId: string) => {
    posts = posts.filter((post) => post.id !== removePostId);
};

export const updatePosts = (updateId: string, updateTitle: string, updateDescription: string) => {
    const post = posts.find((post) => post.id === updateId);
    if (post) { (post.title = updateTitle), (post.description = updateDescription); }
    else { throw new Error("NO POST FOUND"); }
};

export const findPosts = (findId: string) => {
    return posts.find((post) => post.id === findId);
};