
import './App.css';
import { Component } from 'react';

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
    const [posts] = await Promise.all([postsResponse]);
    const postsJson = await posts.json();
    this.setState({ posts: postsJson });
  }

  render() {
    const { posts } = this.state;
    return (
      <div className="App">
        <h2>{ }</h2>
        {posts.map(post => (
          <div key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
        ))}

      </div>
    );
  }
}
export default App;

