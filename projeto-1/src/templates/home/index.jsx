
import './style.css';
import { Component } from 'react';

import { loadPosts } from '../../utils/load-posts';
import { Posts } from '../../components/Posts';
//import { PostCard } from '../../components/PostCard'
import { ButtonCarregar } from '../../components/buttons/button-carregar';
import { InputSearch } from '../../components/input';

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
    const {
      page,
      postsPerPage,
      allPosts,
      posts
    } = this.state;
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage)
    posts.push(...nextPosts);

    this.setState({ posts, page: nextPage })

    console.log(page, postsPerPage, nextPage, nextPage + postsPerPage)
  }

  render() {
    const { posts } = this.state;

    return (
      <section className='container'>
        <h1 className='h1top'>Projeto de buscas</h1>
        <div>
          <InputSearch
            
          />
        </div>
        <Posts posts={posts} />

        <ButtonCarregar
          className='buttonC'
          text="Carregar Páginas"
          onClick={this.loadMorePosts}
        />
      </section>
    )
  }
}
export default Home;

