import MetodosModel from "../MetodosModel";
import { GiPayMoney } from 'react-icons/gi'

export default function modelFreeFinances(){
    return(
        <MetodosModel
            titulo="Financas livres"
            icon={<GiPayMoney/>}
            url='/freefinances'
        />
    )
}