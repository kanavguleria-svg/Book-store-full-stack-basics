import react from 'react';
import {Routes,Route} from 'react-router-dom';
import CreateBooks from './pages/CreateBooks';
import DeleteBook from './pages/DeleteBook';
import EditBook from './pages/EditBook';
import Home from './pages/Home';
import ShowBook from './pages/ShowBook';
import ReacHookForm from "./pages/ReacHookForm";

const App = ()=>{
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/books/create" element={<CreateBooks/>}/>
            <Route path="/books/delete/:id" element={<DeleteBook/>}/>
            <Route path="/books/editBook/:id" element={<EditBook/>}/>
            <Route path="/books/details/:id" element={<ShowBook/>}/> 
            <Route path="/testForm" element={<ReacHookForm/>}/> 
        </Routes>
    )
}

export default App;