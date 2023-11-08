
import './App.css';
import { Component } from 'react';
import { postCard } from './components/postCards';

class App extends Component {
  state = {
    counter: 0,
    posts: [

    ]
  };

  // o metodo rendle sera chamado
  componentDidMount() {
    this.loadPosts();
  }

  loadPosts = async () => {
    const postsResponse = fetch('https://jsonplaceholder.typicode.com/posts');
    const photoResponse = fetch('https://jsonplaceholder.typicode.com/photos')
    const [posts, photos] = await Promise.all([postsResponse, photoResponse]);
    const postsJson = await posts.json();
    const photosJson = await photos.json();

    const postAndphotos = postsJson.map((post, index) => {
      return { ...post, cover: photosJson[index].url }
    });
    this.setState({ posts: postAndphotos });
  }

  render() {
    const { posts } = this.state;

    return (
      <section className='container'>
        <div className="posts">
          {posts.map(post => (
           <postCard atributo= 'aqui q esta sendo passado para o props, seria atributo' />
          ))}
        </div>
      </section>
    );
  }
}
export default App;

