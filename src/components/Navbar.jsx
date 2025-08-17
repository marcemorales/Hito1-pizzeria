import { clp } from '../utils/format'

const Navbar = () => {
  const total = 25000
  const token = false

  return (
    <nav className="navbar navbar-dark bg-dark px-3 sticky-top">
      <span className="navbar-brand fw-semibold">Pizzería Mamma Mia!</span>
      <div className="d-flex gap-2 align-items-center">
        <button className="btn btn-sm btn-secondary">🍕 Home</button>
        {token ? (
          <>
            <button className="btn btn-sm btn-outline-light">🔓 Profile</button>
            <button className="btn btn-sm btn-outline-light">🔒 Logout</button>
          </>
        ) : (
          <>
            <button className="btn btn-sm btn-warning">🔐 Login</button>
            <button className="btn btn-sm btn-warning">🔐 Register</button>
          </>
        )}
        <button className="btn btn-sm btn-info text-dark">
          🛒 Total: {clp(total)}
        </button>
      </div>
    </nav>
  )
}

export default Navbar
