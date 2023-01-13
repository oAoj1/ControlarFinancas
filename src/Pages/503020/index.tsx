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

                <div className="info503020">
                    <h3>O que é o metodo 50-30-20?</h3>
                    <p>Muitas pessoas usam esse método para controlar suas financas fundamentais, pessoais e reservas de emergencia</p>
                    <ul>
                        <li> <strong>50%: Gastos fundamentais -</strong> transporte, mercado, contas</li>
                        <li> <strong>30%: Gastos pessoais - </strong> restaurantes, cinemas, viagens, serviços streaming</li>
                        <li> <strong>20%: Reservas de emergencia ou investimentos</strong> </li>
                    </ul>
                </div>

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