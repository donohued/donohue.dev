import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Monitor from './Monitor';


function App() {

    return (
        <>
            <Router>
                <div className='flex-wrapper'>
                    <Routes>
                        <Route path="/*" element={<Monitor />} />
                    </Routes>
                </div >
            </Router>

        </>
    )
}

export default App
