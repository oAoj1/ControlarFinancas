import './503020.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import Header from '../../Components/Header'

export default function Metodo503020(){ 

    const [dinheiro, setDinheiro] = useState<any>('')
    const [cinquenta, setCinquenta] = useState<any>()
    const [trinta, setTrinta] = useState<any>()
    const [vinte, setVinte] = useState<any>()

    const valores = [
        `50%: ${cinquenta}`,
        `30%: ${trinta}`,
        `20%: ${vinte}`
    ]

    const enviar503020 = (evento:React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()

        const contaCinquenta = ((dinheiro * 50) / 100)
        const contaTrinta = ((dinheiro * 30) / 100)
        const contaVinte = ((dinheiro * 20) / 100)
        
        setCinquenta(contaCinquenta)
        setTrinta(contaTrinta)
        setVinte(contaVinte)
        
    }

    return(
        <>
            <Header/>
                <div className='cinquentaTrintaVinteContainer'>

                <form onSubmit={enviar503020}>
                    <input 
                        type="number" 
                        placeholder='Insira o dinheiro'
                        onChange={money => setDinheiro(money.target.value)}
                    />

                    <button>
                        Calcular
                    </button>

                    {cinquenta > 1 && trinta > 1 && vinte > 1 ? 
                        <ul className='resultado503020'>
                            {valores.map((contas,index) => (
                                <li key={index}>
                                    {contas}
                                </li>
                            ))}
                        </ul> 
                    : ''}
                </form>     

                <span className='aviso'>Não use ponto ou vírgula</span>

                <div className="returnContainer">
                    <Link to='/'>
                        <button>
                            <AiOutlineArrowLeft/>
                            Voltar
                        </button>
                    </Link>
                </div>

            </div>
        </>
        
    )
}