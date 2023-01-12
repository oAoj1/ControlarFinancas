import { FaRegMoneyBillAlt } from 'react-icons/fa'
import './Header.css'

export default function Header(){
    return(
        <header>
            <div className="logoHeader">
                <FaRegMoneyBillAlt/>
            </div>
            <div className="titleHeader">
                <h1>Controle suas financas</h1>
                <span>App para te ajudar a controlar seus gastos financeiros</span>
            </div>
            <div className="logoHeader">
                <FaRegMoneyBillAlt/>
            </div>
        </header>
    )
}