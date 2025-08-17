import { clp } from '../utils/format'

export default function CardPizza({ img, name, price, ingredients = [] }) {
  return (
    <div className="card h-100 shadow-sm">
      <img src={img} className="card-img-top" alt={`Pizza ${name}`} height="220"/>
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">Pizza {name}</h5>
        <hr className="my-2" />
        <p className="text-muted mb-1">Ingredientes:</p>
        <p className="mb-3">
          <span role="img" aria-label="slice">🍕</span>{' '}
          {ingredients.join(', ')}
        </p>
        <h5 className="mt-auto mb-3">Precio: <strong>{clp(price)}</strong></h5>
        <div className="d-flex gap-2">
          <button className="btn btn-outline-secondary btn-sm">
            Ver Más <i className="bi bi-eye"></i>
          </button>
          <button className="btn btn-dark btn-sm">
            Añadir <i className="bi bi-cart"></i>
          </button>
        </div>
      </div>
    </div>
  )
}
