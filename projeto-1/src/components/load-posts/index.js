export const loadPosts = async () => {
    const postsResponse = fetch('https://jsonplaceholder.typicode.com/posts');
    const photoResponse = fetch('https://jsonplaceholder.typicode.com/photos')
    const [posts, photos] = await Promise.all([postsResponse, photoResponse]);
    const postsJson = await posts.json();
    const photosJson = await photos.json();

    const postAndphotos = postsJson.map((post, index) => {
        return {...post, cover: photosJson[index].url }
    });
    
    return postAndphotos;
}