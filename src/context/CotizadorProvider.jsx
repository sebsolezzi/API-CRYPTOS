import { useState, useEffect, createContext } from "react";

const CotizadorContext = createContext()

const CotizadorProvider = ({ children }) => {

    const [cryptos, setCryptos] = useState([])
    const [resultado, setResultado] = useState({})
    const [cargando, setCargando] = useState(false)

    useEffect(() => {
        const buscarMonedas = async () => {
            
            const respuesta = await fetch('https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD')
            const resultado = await respuesta.json()
            setCryptos(resultado.Data)
        }
        buscarMonedas()
    }, [])

    const calcularPrecio = async (datos) => {
        setResultado({})
        setCargando(true)
        const { moneda, cryptomoneda } = datos
        try {
            const respuesta = await fetch(`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptomoneda}&tsyms=${moneda}`)
            const result = await respuesta.json()
            setResultado(result.DISPLAY[cryptomoneda][moneda])
        } catch (error) {
            console.log(error)
        }
        finally{
            setCargando(false)
        }
    }

    return (
        <CotizadorContext.Provider
            value={{
                cryptos,
                cargando,
                resultado,
                calcularPrecio
            }}
        >
            {children}
        </CotizadorContext.Provider>
    )
}

export { CotizadorProvider }
export default CotizadorContext