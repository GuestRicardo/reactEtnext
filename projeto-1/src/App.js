
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

  render() {
    const { posts } = this.state;

    return (
      <div className="App">
        {posts.map(post => <h1>{post.title}</h1>)}
      </div>
    );
  }

}

export default App;
