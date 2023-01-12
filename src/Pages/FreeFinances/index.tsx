import './FreeFincances.css'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import Header from '../../Components/Header'

export default function FreeFincances(){

    const [money, setMoney] = useState<any>()
    const [erro, setErro] = useState<string>('')

    const [firstPercent,setFirstPercent] = useState<any>()
    const [secondPercent,setSecondPercent] = useState<any>()
    const [thirdPercent,setThirdPercent] = useState<any>()

    const [fundamental,setFundamental] = useState<any>()
    const [pessoal,setPessoal] = useState<any>()
    const [reserva,setReserva] = useState<any>()

    const valores = [
        `Fundamental ${firstPercent}%: ${fundamental}`,
        `Pessoal ${secondPercent}%: ${pessoal}`,
        `Reserva ${thirdPercent}%: ${reserva}`
    ]
    
    const primeiraPorcentagem = Number(firstPercent)
    const segundaPorcentagem = Number(secondPercent)
    const terceiraPorcentagem = Number(thirdPercent)
    const somas = primeiraPorcentagem+segundaPorcentagem+terceiraPorcentagem
    const msgSomas = `${somas}%: 100%`

    const enviarFreeFinances = (evento:React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()

        const contaFundamental = ((firstPercent * money) / 100)
        const contaPessoal = ((secondPercent * money) / 100)
        const contaReserva = ((thirdPercent * money) / 100)

        setFundamental(contaFundamental)
        setPessoal(contaPessoal)
        setReserva(contaReserva)

        if(somas > 100){
            setFundamental('')
            setPessoal('')
            setReserva('')
            setErro('Valor acima da porcentagem esperada')
        }
        if(somas < 100){
            setFundamental('')
            setPessoal('')
            setReserva('')
            setErro('Valor abaixo da porcentagem esperada')
        }
        
    }

    return(
        <>
            <Header/>
                <div className="freeFinances">
                <form onSubmit={enviarFreeFinances}>

                    <span className='limite'>
                        {somas > 1 ? msgSomas : ''} 
                    </span>
                    <span className="erro">
                        {erro}
                    </span>

                    <div className="percentensContainer">
                        <input 
                            type="number" 
                            onChange={first => setFirstPercent(first.target.value)}
                            placeholder='Gastos fundamentais'
                            maxLength={3}
                        />
                        <input 
                            type="number" 
                            onChange={second => setSecondPercent(second.target.value)}
                            placeholder='Gastos pessoais'
                            maxLength={3}
                        />
                        <input 
                            type="number" 
                            onChange={third => setThirdPercent(third.target.value)}
                            placeholder='Reserva de emergência'
                            maxLength={3}
                        />
                    </div>
                    
                    <div className="moneyContainer">
                        <input 
                            type="number" 
                            onChange={money => setMoney(money.target.value)}
                            placeholder='Insira o dinheiro'
                        />
                    </div>
                    
                    <button>
                        Calcular
                    </button>
                    
                    {fundamental > 1 && pessoal > 1 && reserva > 1 ? 
                        <ul className='resultadoFree'>
                            {valores.map((values,index) => (
                                <li key={index}>
                                    {values}
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