import Navbar from './components/Navbar.jsx'
import CategoryBar from './components/CategoryBar.jsx'
import Gallery from './components/Gallery.jsx'
import Footer from './components/Footer.jsx'

function App() {
return (
<>

<Navbar />

<header className="container py-4 py-1g-5">
{/* ... bez zmian ... */}
</header>

<main className="container">
  <CategoryBar />
  <Gallery />
</main>

<Footer />
</>
)}
export default App
