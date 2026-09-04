// App.tsx
import './App.css'
import HomePage from './Pages/HomePage.tsx'
import {Route, Routes} from 'react-router'
import Footer from './Components/Footer.tsx'
// import AddTransactionsPage from './Pages/AddTransactionsPage.tsx'

function App() {
  return (
  <main className='page-content pb-20'>
    <Routes>
      <Route path='/' element={<HomePage />} />
      
    </Routes>

    <div className="fixed bottom-0 inset-x-0 border-t border-border bg-surface">
      <Footer />
    </div>
  </main>

  )

}

export default App