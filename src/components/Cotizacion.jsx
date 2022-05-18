import useCotizador from "../hooks/useCotizador"

const Cotizacion = () => {

    const { resultado } = useCotizador()
    const { HIGHDAY, LOWDAY, IMAGEURL, PRICE,CHANGEDAY} = resultado

    const formatearDinero = (dinero) =>{
       
       return dinero.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })
    }
    return (
        <div className="shadow bg-white mt-10 py-3 rounded-xl">
            <img className="w-auto h-20  mx-auto" src={`https://www.cryptocompare.com/${IMAGEURL}`} alt="imagen cripto" />
            <p className="uppercase text-purple-600 font-bold text-base px-2 mt-4">Precio: <span className="text-gray-700">{formatearDinero(PRICE)}</span> </p>
            <p className="uppercase text-purple-600 font-bold text-base px-2">Precio mas alto del dia: <span className="text-gray-700">{HIGHDAY}</span></p>
            <p className="uppercase text-purple-600 font-bold text-base px-2">Precio mas bajo del dia: <span className="text-gray-700">{LOWDAY}</span></p>
            <p className="uppercase text-purple-600 font-bold text-base px-2">Cambio en el dia: <span className="text-gray-700">{CHANGEDAY}</span></p>     
        </div>
    )
}

export default Cotizacion