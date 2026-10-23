import { Link } from "react-router-dom"

export default function VegetableCard({ vegetable, onDelete }) {
    return <>
        <div className="card">
            <div className="card-body">
                <h4 className="card-title">{vegetable.nazwa}</h4>
                <span className="card-text">Grupa: {vegetable.grupa}</span><br></br>
                <span className="card-text">Rozmiar: {vegetable.rozmiar}</span><br></br>
                {vegetable.dostepny ?
                    <span className="badge text-bg-success">Dostępny</span>
                    :
                    <span className="badge text-bg-secondary">Niedostępny</span>
                }
                <div className="d-flex justify-content-between mt-2 border-top">
                    <Link className="btn btn-outline-primary mt-2" to={`/vegetable/${vegetable.id}`}>Szczgóły</Link>
                    <div>
                        <button className="btn btn-outline-secondary mt-2">Dostępność</button>
                        <button className="btn btn-danger mt-2 ms-2" onClick={() => onDelete(vegetable.id)}>Usuń</button>
                    </div>
                </div>
            </div>
        </div>
    </>
}