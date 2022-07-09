import { useRecoilValue } from "recoil"
import { eventosFiltradosState } from "../state/seletores"

const useGetLista = () => {
    return useRecoilValue(eventosFiltradosState)
}

export default useGetLista