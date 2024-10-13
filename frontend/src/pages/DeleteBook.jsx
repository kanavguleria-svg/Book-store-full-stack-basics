import React,{ useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import SpinnerComp from "../components/SpinnerComp";
import axios from 'axios';

const DeleteBook = ()=>{
    const [loading,setLoading] = useState(false);
    const navigate = useNavigate();

    const {id} = useParams();
    const handleDeleteBook = () =>{
        setLoading(true);
        axios.delete(`http://localhost:5555/book/${id}`)
        .then(()=>{
            setLoading(false);
            navigate('/');
        }).catch((error)=>{
            setLoading(false);
            alert('an Error happended . please check console');
            console.log(error);
        })
    };
    return (
        <div className="p-4">
            <BackButton/>
            <h1 className="text-3xl my-4">Delete Book</h1>
            {loading?<SpinnerComp/>:''}
            <div className="flex flex-col item-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto">
                <h3 className="text-2xl">Are you sure you want to delete this book? </h3>
                <button className="p-4 bg-red-600 text-white m-8 w-full" onClick={handleDeleteBook}>Yes,Delete it</button>
            </div>
        </div>
    )
}

export default DeleteBook;