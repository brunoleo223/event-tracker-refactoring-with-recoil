import { selector } from "recoil";
import { IEvento } from "../../interfaces/IEvento";
import { filtroDeEventosState, listaDeEventosState } from "../atom";

export const eventosFiltradosState = selector({
    key: 'eventosFiltradosState',
    get: ({ get }) => {
        const filtro = get(filtroDeEventosState)
        const todosEventos = get(listaDeEventosState)
        const eventos = todosEventos.filter(evento => {
            if(!filtro.data){
            return true;
            }
            return filtro.data.toISOString().slice(0, 10) === evento.inicio.toISOString().slice(0, 10)
        })
        return eventos;
    }
})

export const eventosAsync = selector({
    key: 'eventosAsync',
    get: async () => {
        const response = await fetch('http://localhost:8080/eventos')
        const eventos: IEvento[] = await response.json()
        return eventos.map(evento => ({
            ...evento,
            inicio: new Date(evento.inicio),
            fim: new Date(evento.fim)
        }))
    }
})