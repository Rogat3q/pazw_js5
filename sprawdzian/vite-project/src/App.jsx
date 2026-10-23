import { Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import CatalogPage from './page/CatalogPage'
import SingleVegatablePage from './page/SingleVegetablePage'
import AddVegatablePage from './page/SingleVegetablePage'

export default function App() {
  return <>
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<CatalogPage />}></Route>
        <Route path="/vegetable/:id" element={<SingleVegatablePage></SingleVegatablePage>}></Route>
        <Route path="/add" element={<AddVegatablePage></AddVegatablePage>}></Route>
      </Route>
    </Routes>
  </>
}
