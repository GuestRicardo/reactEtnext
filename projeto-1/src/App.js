
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

  }

  componentDidUpdate() {

  }

  componentWillUnmount() {

  }

  render() {
    const { posts } = this.state;
    return (
      <div className="App">
        <h2>{counter}</h2>
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

