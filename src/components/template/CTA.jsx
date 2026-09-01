import Button from '../molecules/Button';

const CTA = ({ titulo = 'texto inicial', texto = 'lorem ipsum bla bla', cta = 'cta', btnCta = 'botao' }) => {
  return (
    <section className="container mx-auto max-w-5xl flex flex-col items-center gap-4 text-center">
      <span>{cta}</span>
      <h1>{titulo}</h1>
      <p>{texto}</p>
      <Button estilizacao={'bg-secondary rounded-md p-2 border'} nome={btnCta} />
    </section>
  )
}

export default CTA
