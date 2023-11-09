
import './style.css';
import { Component } from 'react';

import { loadPosts } from '../../components/load-posts/index';
import { Posts } from '../../components/Posts';
import { PostCard } from '../../components/PostCard'

class App extends Component {
  state = {
    counter: 0,
    posts: [

    ]
  };

  // o metodo rendle sera chamado
  async componentDidMount() {
    await this.loadPosts();
  }

  loadPosts = async () => {
    const postAndphotos = await loadPosts();
    this.setState({ posts: postAndphotos });
  }

  render() {
    const { posts } = this.state;

    return (
      <section className='container'>
        <Posts posts={posts} />
        <div className="posts">
          {posts.map(post => (
            <PostCard
              key={post.id}
              post={post}
            />
          ))}
        </div>

      </section>
    )
  }
}
export default App;

