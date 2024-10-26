import AddQuote from '../../components/AddQuote/AddQuote.tsx';
import { IQuote, IQuoteForm } from '../../types';
import { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axiosAPI from '../../axiosAPI.ts';

const EditQuote = () => {
  const [quote, setQuote] = useState<IQuote>();
  const params = useParams<{ idQuote: string }>();
  const navigate = useNavigate();


  const fetchQuote = useCallback(async (id: string) => {
    try {
      const response: { data: IQuote } = await axiosAPI<IQuote>(
        `quotes/${id}.json`,
      );
      if (response.data) {
        setQuote(response.data);
      }
    } catch (e) {
      console.log(e);
    }
  }, []);

  useEffect(() => {
    if (params.idQuote) {
      void fetchQuote(params.idQuote);
    }
  }, [params.idQuote, fetchQuote]);

  const submitForm = async (post: IQuoteForm) => {
    try {
      if (params.idQuote) {
        await axiosAPI.put(`quotes/${params.idQuote}.json`, { ...post });
        navigate("/");
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      {quote ? (
        <>
          <AddQuote retell={quote} submitForm={submitForm}/>
        </>
      ) : null}
    </>
  );
};

export default EditQuote;