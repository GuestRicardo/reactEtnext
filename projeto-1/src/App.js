
import './App.css';
import { Component } from 'react';

import { loadPosts } from './components/load-posts/index';
import { Posts } from './components/Posts';

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
    const postAndphotos = await loadPosts();
    this.setState({ posts: postAndphotos });
  }

  render() {
    const { posts } = this.state;

    return (
      <section className='container'>
        <Posts posts={posts} />
      </section>
    );
  }
}
export default App;

