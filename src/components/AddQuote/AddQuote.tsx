import Box from '@mui/material/Box';
import { FormControl, NativeSelect } from '@mui/material';
import { InputLabel} from '@mui/material';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import React, { useEffect, useState } from 'react';
import { IQuoteForm } from '../../types';

const initialForm = {
  category: "",
  author: "",
  quote: "",
};

interface Props {
  retell?: IQuoteForm;
  submitForm: (post: IQuoteForm) => void;
}

const AddQuote: React.FC<Props> = ({retell, submitForm}) => {
  const [form, setForm] = useState<IQuoteForm>({ ...initialForm });

  useEffect(() => {
      if (retell) {
        setForm((prevState) => ({
          ...prevState,
          ...retell,
        }));
      }
    }, [retell]);

    const onChangeField = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setForm((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    };

  const onSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    submitForm({ ...form,});

    if (!retell) {
      setForm({ ...initialForm });
    }
  };

  return (
    <form onSubmit={onSubmitForm}>
      <h1 style={{textAlign: "left", paddingTop: "30px"}}>
        Submit new quote
      </h1>
      <Box
        sx={{
          py: 3,
          display: "grid",
          gap: 2,
          flexWrap: "wrap",
          width: "100%",
        }}
      >
        <Box sx={{ maxWidth: 200 }}>
          <FormControl fullWidth>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
              Category
            </InputLabel>
            <NativeSelect
              required
              name="category"
              aria-selected={false}
              onChange={onChangeField}
            >
              <option value={"Star wars"}>Star wars</option>
              <option value={"Famous people"}>Famous people</option>
              <option value={"Saying"}>Saying</option>
              <option value={"Humour"}>Humour</option>
              <option value={"Motivational"}>Motivational</option>
            </NativeSelect>
          </FormControl>
        </Box>
        <TextField
          sx={{me: "auto", width: "50%"}}
          name="author"
          id="outlined-basic"
          label="Author"
          variant="outlined"
          value={form.author}
          onChange={onChangeField}
        />
        <TextField
          sx={{me: "auto", width: "50%"}}
          name="quote"
          id="outlined-multiline-static"
          label="Quote text"
          multiline
          rows={4}
          value={form.quote}
          onChange={onChangeField}
        />
        <Button
          type="submit"
          sx={{me: "auto", width: "5%"}}
          color="inherit"
          variant="outlined"
        >
          Save
        </Button>
      </Box>
    </form>
  );
};

export default AddQuote;