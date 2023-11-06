
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
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())//convertendo em json
    .then(posts => this.setState({posts}))//carregando
  }

  componentDidUpdate() {

  }

  componentWillUnmount() {

  }

  render() {
    const { posts } = this.state;
    return (
      <div className="App">
        <h2>{}</h2>
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

