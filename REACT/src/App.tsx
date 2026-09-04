// App.tsx
import './App.css'
import HomePage from './Pages/HomePage.tsx'
import AddExpensePage from './Pages/AddExpensePage.tsx'
import {Route, Routes} from 'react-router'
import Footer from './Components/Footer.tsx'

function App() {
  return (
  <main className='page-content pb-20'>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/add-expense' element={<AddExpensePage />} />
    </Routes>

    <div className="fixed bottom-0 inset-x-0 border-t border-border bg-surface">
      <Footer />
    </div>
  </main>

  )

}

export default App