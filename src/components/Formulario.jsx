import { useState } from 'react'
import useCotizador from '../hooks/useCotizador'


const Formulario = () => {

    const { cryptos, calcularPrecio } = useCotizador()

    const [moneda, setMoneda] = useState('')
    const [cryptomoneda, setCryptomoneda] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (moneda === '' || cryptomoneda === '') {
            return
        }
        calcularPrecio({
            moneda,
            cryptomoneda
        })
    }

    return (
        <div className=''>
            <form className='shadow bg-white mt-10 py-3 rounded-xl'>

                <div className=' text-xl px-2'>
                    <label className='text-purple-600 font-bold' htmlFor="">Criptomoneda</label>
                    <select onChange={e => setCryptomoneda(e.target.value)} className='block border-2 border-purple-600 rounded' name="" id="">
                        <option value=""> Selecciona una Criptomoneda </option>
                        {
                            cryptos.map(crypto => (
                                <option value={crypto.CoinInfo.Name} key={crypto.CoinInfo.Name}>{crypto.CoinInfo.FullName}</option>
                            ))
                        }
                    </select>
                </div>

                <div className=' uppercase text-xl mt-3 px-2'>
                    <label className='text-purple-600 font-bold' htmlFor="">Moneda</label>
                    <select onChange={e => setMoneda(e.target.value)} className='block border-2 border-purple-600 rounded' name="" id="">
                        <option value=""> Selecciona una moneda </option>
                        <option value="USD"> Dolar USA </option>
                        <option value="ARS"> Peso Argentino</option>
                    </select>
                </div>

                <input
                    onClick={handleSubmit}
                    className='block mx-auto mt-4 rounded-lg bg-purple-600 text-white py-2 px-3 uppercase font-bold cursor-pointer'
                    type="submit"
                    value="Calcular"
                />

            </form>
        </div>
    )
}

export default Formulario