import { selector } from "recoil";
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