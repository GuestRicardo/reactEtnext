
import './App.css';
import { Component } from 'react';

class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        title: 'Titulo 1',
        body: 'corpo 1',
      },
      {
        id: 2,
        title: 'Titulo 2',
        body: 'corpo 2',
      },
      {
        id: 3,
        title: 'Titulo 3',
        body: 'corpo 3',
      }
    ]
  };

  componentDidMount() {
    console.log('será executado somente uma vez quando for, montado na tela');
  }

  render() {
    const { posts } = this.state;

    return (
      <div className="App">
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
