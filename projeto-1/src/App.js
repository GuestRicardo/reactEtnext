
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
  //para poder acessalo quando quiser
  timeOutUpdate = null;
  //aq esta disparando a função, e atualizara o estado da hudletimeout,
  // o metodo rendle sera chamado
  componentDidMount() {
    this.handleTimeout();
  }
  //aq esta atualizando o metodo infinitamente(aq no caso esta se chamando)
  componentDidUpdate() {
    this.handleTimeout();
  }
  //para limpar o lixo da pagina, quando o componente parar
  componentWillUnmount() {
    clearTimeout();
  }
  handleTimeout = () => {
    const { posts, counter } = this.state;
    posts[0].title = 'O componente em 5 segundos atualizou'
    //usando timeOutUpdade para poder manipula-lo
    this.timeOutUpdate = setTimeout(() => {
      this.setState({ posts, counter: counter + 1 })
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

