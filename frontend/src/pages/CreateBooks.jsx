import React,{ useState } from "react";
import { useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton";
import SpinnerComp from "../components/SpinnerComp";
import axios from 'axios';

const CreateBooks = () => {
const [values,setValues] = useState({
  title:"",
  author:"",
  publishYear:""
})
const [title, setTitle] = useState('');
const [author, setAuthor] = useState('');
const [publishYear, setPublishYear] = useState('');
const [loading,setLoading] = useState(false);
const navigate = useNavigate();

const handleChanges = (e) =>{
  values[e.target.name] = e.target.value;
  setValues({...values});
}

const handleSaveBook = () => {
  console.log(values);
    const data = {
      title,
      author,
      publishYear,
    };
  
    setLoading(true);
    axios
      .post("http://localhost:5555/book/createBook", values)
      .then((response) => {
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
        alert("an error occured check console");
      });
  };


  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Create Book</h1>
      {loading ? (
        <SpinnerComp />
      ) : ''}
      <div className=" flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
        <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">Title</label>
            <input 
            type = 'text'
            // value = {title}
            // onChange={(e)=> setTitle(e.target.value)}
            name = "title"
            onChange={(e)=> handleChanges(e)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
            />
        </div>
        <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">Author</label>
            <input 
            type = 'text'
            // value = {author}
            // onChange={(e)=> setAuthor(e.target.value)}
            name = "author"
            onChange={(e)=> handleChanges(e)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
            />
        </div>
        <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">publishYear</label>
            <input 
            type = 'text'
            // value = {publishYear}
            // onChange={(e)=> setPublishYear(e.target.value)}
            name = "publishYear"
            onChange={(e)=> handleChanges(e)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
            />
        </div>
        <button className="p-2 bg-sky-300 m-8" onClick={handleSaveBook}>Save</button>
      </div>
    </div>
  );
};

export default CreateBooks;
