import { useRef } from "react"
import { useVegetables } from '../hooks/useVegetables'
import { useNavigate } from "react-router-dom"
import { newVegetableId } from "../service/vegetables"

export default function AddVegetablePage() {
    const { vegetables, setVegetables } = useVegetables()
    const navigate = useNavigate()

    const nazwa = useRef("")
    const grupa = useRef("")
    const rozmiar = useRef(1)

    function handleSubmit(event) {
        event.preventDefault()
        setVegetables(Vegetables.push({
            id: newVegetableId(),
            nazwa: nazwa.current.value,
            grupa: grupa.current.value,
            rozmiar: rozmiar.current.value,
            dostepny: true
        }))
        navigate("/")
    }

    return <>
        <h1>Dodaj Kwiat</h1>
        <form className="p-2" onSubmit={(event) => handleSubmit(event)}>
            <label className="form-label mt-2">Nazwa kwiatu:</label>
            <input className="form-control" type="text" ref={nazwa}></input>

            <label className="form-label mt-2">Grupa:</label>
            <select className="form-select" defaultValue={1} ref={grupa}>
                <option>Ogrodowe</option>
                <option>Doniczkowe</option>
                <option>Cięte</option>
            </select>

            <label className="form-label mt-2">Rozmiar (1-100):</label>
            <input className="form-control" type="number" max={100} min={1} ref={rozmiar}></input>

            <button className="btn btn-primary mt-3">Zatwierdź wybór</button>
        </form>
    </>
}
