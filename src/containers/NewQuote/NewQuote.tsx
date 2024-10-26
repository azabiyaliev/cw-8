import AddQuote from '../../components/AddQuote/AddQuote.tsx';
import { useNavigate } from 'react-router-dom';
import { IQuoteForm } from '../../types';
import axiosAPI from '../../axiosAPI.ts';
import { useState } from 'react';
import Loader from '../../components/UI/Loader/Loader.tsx';


const NewQuote = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const submitForm = async (retell: IQuoteForm) => {
    try {
      setLoading(true);
      await axiosAPI.post("quotes.json", { ...retell });
      navigate("/");
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading ? <Loader/> : <AddQuote submitForm={submitForm}/>}
    </>
  );
};

export default NewQuote;