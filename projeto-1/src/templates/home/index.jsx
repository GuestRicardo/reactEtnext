
import './style.css';
import { Component } from 'react';

import { loadPosts } from '../../utils/load-posts';
import { Posts } from '../../components/Posts';
//import { PostCard } from '../../components/PostCard'
import { ButtonCarregar } from '../../components/buttons/button-carregar';
import { InputSearch } from '../../components/input';


export class Home extends Component {
  //estado, tudo componente q tiver estado precisara passar por aq
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 2,
    searchValue: '',
  };

  // o metodo rendle sera chamado
  async componentDidMount() {
    await this.loadPosts();
  }
  //para fazer o carregamento dos posts
  loadPosts = async () => {
    const { page, postsPerPage } = this.state;

    const postAndphotos = await loadPosts();
    this.setState({
      posts: postAndphotos.slice(page, postsPerPage),
      allPosts: postAndphotos,
    });
  }
  //metodo(evento) para usar na paginação
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
  //metodo(evento) para usar na busca do input  
  handleChange = (e) => {
    const { value } = e.target;
    this.setState({ searchValue: value })
  }

  //tudo que esta sendo exibido na tela esta aq
  render() {
    const { posts, searchValue, allPosts } = this.state;

    //se caso tiver valor, será filtrado e
    const filteredPosts = !!searchValue ?
      allPosts.filter(post => {//e retornara
        return post.title.toLocaleLowerCase().includes(searchValue.toLowerCase());
        //todos os posts q for digitado no input usando o searchValue
      })
      //se nao tiver nenhum dos valores buscados será retornado os posts
      : posts;

    return (
      <section className='container'>
        <h1 className='h1top'>Projeto de buscas</h1>
        <div>
          <InputSearch
            searchValue={ searchValue }
            handleChange={this.handleChange}
          />
        </div>
        <>
          <h1>Você buscou:</h1>
          {!!searchValue && (
            <h3>{searchValue}</h3>
          )}
          <hr /> <br />
        </>
        {filteredPosts.length > 0 && (
          <Posts posts={filteredPosts} />
        )}
        {filteredPosts.length === 0 && (
          <div className='h1top'>
            <h4><mark>Não existem POSTS</mark></h4>
          </div>
        )}
        <div>
          {!searchValue && (
            <ButtonCarregar
              className='buttonC'
              text="Carregar Páginas"
              onClick={this.loadMorePosts}
            />
          )}

        </div>
      </section>
    )
  }
}
export default Home;

