import CTA from './components/template/CTA';
import Footer from './components/organisms/Footer';
import Card from './components/organisms/Card';
import Button from './components/molecules/Button';

import './App.css'

function App() {

  return (
    <>
    <main className='flex flex-col gap-8'>
       <CTA
        cta={'Bem vind@ a EcoTrend'}
        titulo={'A verdadeira elegância não custa o planeta'}
        texto={'A Eco Trend nasceu da urgência de limpar nossos litorais e da paixão por um estilo de vida sustentável.'}
        btnCta='Explorar site'
        imagemFundo={'bg-[url(/fundo-hero.png)] bg-no-repeat bg-cover'}
      />

      <section className='bg-[url(/fundo.jpg)] text-primary-foreground bg-no-repeat bg-cover h-1/2 w-full flex flex-col lg:flex-row justify-between items-end gap-4 text-center py-10 px-8 '>
        <div>
          <h2>A Natureza Reinventada em Joias</h2>
        <Button nome={'Conheça mais sobre nós'} estilizacao={'rounded-md bg-secondary rounded-full'} />
        </div>
         <div className='p-4 border rounded-md flex flex-col gap-4 items-center '>
          <h3>O que nós criamos</h3>
            <div>
                <img src={'/src/assets/hero.png'} height={200} width={100} />
                <p className='text-primary-foreground'>aaa</p>
            </div>
            {/* actions */}
            <div className='w-full border-t-2 border-dashed'>
                <p>Origem do material aaaa</p>
            </div>
        </div>
      </section>

      <section className='container mx-auto max-w-5xl flex flex-col lg:flex-row items-start justify-around gap-4 py-20'>
          
        <div id="destaques" className='w-full lg:w-1/2 gap-2 grid'>
        <h2>Por que escolher a Eco Trend?</h2>
          <div className='transition-all hover:bg-primary p-2 rounded-md border-primary border-2 border-dashed group group-hover:text-white'>
            <h3 className='group-hover:text-white'>Origem responsável</h3>
            <p className='text-gray-500 group-hover:text-white'>Cada joia vendida representa menos lixo nas nossas praias. Coletamos e transformamos plásticos, vidros e metais descartados em matéria-prima de alto padrão, ajudando a restaurar o ecossistema costeiro um acessório por vez.</p>
          </div>
          <div className='transition-all hover:bg-primary p-2 rounded-md border-primary border-2 border-dashed group group-hover:text-white'>
            <h3 className='group-hover:text-white'>Peças únicas</h3>
            <p className='text-gray-500 group-hover:text-white'>A origem orgânica dos nossos materiais garante que nenhuma peça seja idêntica à outra.</p>
          </div>
          <div className='transition-all hover:bg-primary p-2 rounded-md border-primary border-2 border-dashed group group-hover:text-white'>
            <h3 className='group-hover:text-white'>Moda circular</h3>
            <p className='text-gray-500 group-hover:text-white'>Na Eco Trend, transformamos resíduos resgatados das praias em joias exclusivas e cheias de propósito.</p>
          </div>
        </div>
        <div className='p-0 rounded-md border w-full lg:w-1/3'>
          <img src="/public/eco-trend.jpg" alt="Joias em cima de uma concha" width={200} height={300} className='w-auto rounded-t-xl' />
          <div className='bg-white p-4 rounded-b-xl'>
            <p>Descubra como estamos redefinindo a moda e junte-se a nós no movimento por um consumo mais consciente.</p>
          </div>
        </div>
      </section>
    </main>
    </>
  )
}

export default App
