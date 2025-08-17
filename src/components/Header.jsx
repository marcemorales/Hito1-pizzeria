export default function Header() {
  const heroUrl = '/src/assets/Header.jpg'
  const boxStyle = {
    backgroundImage: `linear-gradient(rgba(0,0,0,.55), rgba(0,0,0,.55)), url(${heroUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '240px',
    borderRadius: '6px',
  }
  return (
    <header className="container my-3">
      <div className="p-5 text-white" style={boxStyle}>
        <h1 className="display-6 fw-bold mb-2">¡Pizzería Mamma Mia!</h1>
        <p className="lead mb-0">¡Tenemos las mejores pizzas que podrás encontrar!</p>
        <hr className="border-light opacity-50 mt-3 mb-0" />
      </div>
    </header>
  )
}
