import CTA from './components/template/CTA';
import Footer from './components/organisms/Footer';
import Grid from './components/template/Grid';

import './App.css'

function App() {

  const produtos = [
    {
      id: 2,
      nome: "colar",
      preco: 20.00,
      categorias: [
        "joalheria",
        "novo",
        "promocao"
      ],
      descricao: "descricao legal"
    },
    {
      id: 1,
      nome: "brinco",
      preco: 20.00,
      categorias: [
        "joalheria",
        "novo",
        "promocao"
      ],
      descricao: "descricao legal"
    },
    {
      id: 1,
      nome: "brinco",
      preco: 20.00,
      categorias: [
        "joalheria",
        "novo",
        "promocao"
      ],
      descricao: "descricao legal"
    },
  ];

  console.log('produtos', produtos)
  return (
    <>
      <CTA
        cta={'Bem vind@ a EcoTrend'}
        titulo={'Texto de boas vindas'}
        texto={'lorem impsum a ad sfs adasewe '}
        btnCta='Explorar site'
      />
      <Grid
        titulo={'seção grid'}
        subtitulo={'aaa'}
        itens={produtos}
      />
    </>
  )
}

export default App
