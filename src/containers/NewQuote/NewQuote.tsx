import AddQuote from '../../components/AddQuote/AddQuote.tsx';
import { useNavigate } from 'react-router-dom';
import { IQuoteForm } from '../../types';
import axiosAPI from '../../axiosAPI.ts';


const NewQuote = () => {

  const navigate = useNavigate();

  const submitForm = async (retell: IQuoteForm) => {
    try {
      await axiosAPI.post("quotes.json", { ...retell });
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <AddQuote submitForm={submitForm}/>
    </>
  );
};

export default NewQuote;