import useCotizador from './hooks/useCotizador'
import Formulario from './components/Formulario'
import Cotizacion from './components/Cotizacion'
import Spinner from './components/Spinner'


function App() {

  const { resultado, cargando } = useCotizador()

  return (

    <>
      <h1 className='uppercase font-bold text-3xl lg:text-5xl py-3 text-center text-white bg-purple-600'>
        Cotizador de Cryptos
      </h1>
      <div className='container w-auto px-2  mx-auto'>
        <div className='flex flex-col lg:flex-row lg:gap-4 items-center justify-center'>
          <Formulario />
          {cargando && <Spinner />}
          {resultado?.FROMSYMBOL ? <Cotizacion /> : null}
        </div>
      </div>
      <footer className=' absolute bottom-0 w-full uppcersae text-white font-bold bg-purple-600 text-center
      text-lg '>
        J.S.Solezzi - 2022
      </footer>
    </>

  )
}

export default App
