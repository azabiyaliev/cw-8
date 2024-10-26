import AddQuote from '../../components/AddQuote/AddQuote.tsx';
import { IQuote, IQuoteForm } from '../../types';
import { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axiosAPI from '../../axiosAPI.ts';
import Loader from '../../components/UI/Loader/Loader.tsx';

const EditQuote = () => {
  const [quote, setQuote] = useState<IQuote>();
  const params = useParams<{ idQuote: string }>();
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);

  const fetchQuote = useCallback(async (id: string) => {
    try {
      setLoading(true);
      const response: { data: IQuote } = await axiosAPI<IQuote>(
        `quotes/${id}.json`,
      );
      if (response.data) {
        setQuote(response.data);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (params.idQuote) {
      void fetchQuote(params.idQuote);
    }
  }, [params.idQuote, fetchQuote]);

  const submitForm = async (post: IQuoteForm) => {
    try {
      setLoading(true);
      if (params.idQuote) {
        await axiosAPI.put(`quotes/${params.idQuote}.json`, { ...post });
        navigate("/");
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading ? (<Loader/>) : (
        <>
          {quote ? (
            <>
              <AddQuote retell={quote} submitForm={submitForm}/>
            </>
          ) : null}
        </>
      ) }
    </>
  );
};

export default EditQuote;