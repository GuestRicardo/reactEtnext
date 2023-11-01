
import './App.css';
import { Component } from 'react';

class App extends Component {
  state = {
    counter: 0,
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
    const { posts, counter } = this.state;
    posts[0].title = 'O componente em 5 segundos atualizou'

    setTimeout(() => {
      this.setState({ posts, counter: counter+1 })
    }, 5000);
  }

  render() {
    const { posts, counter } = this.state;

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
