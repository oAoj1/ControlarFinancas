import './MetodosModel.css'
import { IMetodos } from '../../Interfaces/IMetodos'
import { Link } from 'react-router-dom'

export default function MetodosModel({titulo,icon,url}:IMetodos){
    return(
        <div className="metodosModelContainer">
            <Link to={url}>
                <span>{icon}</span>
                <h3>{titulo}</h3>
            </Link>
        </div>
    )
}