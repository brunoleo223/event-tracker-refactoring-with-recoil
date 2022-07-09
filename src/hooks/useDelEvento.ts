import { useSetRecoilState } from "recoil"
import { IEvento } from "../interfaces/IEvento"
import { listaDeEventosState } from "../state/atom"

const useDelEvento = () => {
    const setListaDeEventos = useSetRecoilState<IEvento[]>(listaDeEventosState)
    
    return (evento: IEvento) => { setListaDeEventos(listaAntiga => {
        return listaAntiga.filter(e => e.id !== evento.id)
    })}
}

export default useDelEvento