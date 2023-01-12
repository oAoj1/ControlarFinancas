import Header from '../../Components/Header'
import { metodosArray } from '../../Datas/metodosArray'
import './Home.css'

export default function Home(){ 

    return(
        <div className='home'>
            <Header/>
            <h2>Escolha o método</h2>
            
            <ul className='metodosContainer'>
                {metodosArray.map(metods => (
                    <li key={metods.name}>
                        {metods.metod}
                    </li>
                ))}     
            </ul>
            
        </div>
    )
}