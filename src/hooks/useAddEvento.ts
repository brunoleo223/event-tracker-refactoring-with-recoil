import { useSetRecoilState } from "recoil"
import { IEvento } from "../interfaces/IEvento"
import { listaDeEventosState } from "../state/atom"
import { incrementeId } from "../utils/incrementId"

const useAddEvento = () => {
    const setListaDeEventos = useSetRecoilState(listaDeEventosState)

    return (evento: IEvento) => {
        
        const hoje = new Date()
        if(evento.inicio < hoje){
            throw new Error("Eventos não podem ser cadastrados com data retroativa");
        }

        evento.id = incrementeId()
        return setListaDeEventos(listaAntiga => [...listaAntiga, evento])
    }
}
export default useAddEvento