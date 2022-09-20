import './App.css';
import { Component } from 'react';
import { Cabecalho } from './component/Cabecalho';
import { Body } from './component/Body';
import { Rodape } from './component/Rodape';

class App extends Component {
  state = {
    busca: '',
    odas: []
  }

  componentDidMount(){
    this.carregaODAs();
  }

  carregaODAs(){
    const {busca} = this.state;
    fetch('http://www.bocaweb.com.br/apibocaweb?nome='+busca)
    .then(response => response.json())
    .then(odas => this.setState({odas}))
  }

  buscaODA = (evento) => {
    this.setState({busca: evento.target.value});
    this.carregaODAs()
  }


  render() {
    const {busca, odas} = this.state;
    return (
      <section>
        <Cabecalho
          busca={this.state.busca}
          buscaODA={this.buscaODA}
        />
        <Body
          odas={odas}
        />
        <Rodape/>    
      </section>
    )
  } 
}

export default App;
