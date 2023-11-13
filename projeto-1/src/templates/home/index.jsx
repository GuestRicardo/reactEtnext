
import './style.css';
import { Component } from 'react';

import { loadPosts } from '../../components/load-posts/index';
import { Posts } from '../../components/Posts';
import { PostCard } from '../../components/PostCard'
import { ButtonCarregar } from '../../components/buttons/button-carregar';

export class Home extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 2
  };

  // o metodo rendle sera chamado
  async componentDidMount() {
    await this.loadPosts();
  }

  loadPosts = async () => {
    const { page, postsPerPage } = this.state;

    const postAndphotos = await loadPosts();
    this.setState({
      posts: postAndphotos.slice(page, postsPerPage),
      allPosts: postAndphotos,
    });
  }
  loadMorePosts = () => {
    console.log('load more post chamados')
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
        <ButtonCarregar
          text="Carregar Páginas"
          quandoClica={this.loadMorePosts}
        />
      </section>
    )
  }
}
export default Home;

