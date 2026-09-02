import Button from '../molecules/Button';

const CTA = ({ titulo = 'texto inicial', texto = 'lorem ipsum bla bla', cta = 'cta', btnCta = 'botao', imagemFundo }) => {
  return (
    <section className={`container mx-auto w-full flex flex-col items-center gap-4 text-center py-20 h-auto ${imagemFundo}`}>
      <span>{cta}</span>
      <h1 className='text-primary'>{titulo}</h1>
      <p>{texto}</p>
      <Button estilizacao={'bg-secondary rounded-full border text-primary-foreground'} nome={btnCta} />
    </section>
  )
}

export default CTA
