import { NavLink } from 'react-router-dom';
import { IQuote, IQuoteAPI } from '../../types';
import { useCallback, useEffect, useState } from 'react';
import axiosAPI from '../../axiosAPI.ts';
import { Card, CardActions, CardContent} from '@mui/material';
import { Grid } from "@mui/joy";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Home = () => {

  const [quotes, setQuotes] = useState<IQuote[]>([]);

  const fetchData = useCallback(async () => {
      const response: { data: IQuoteAPI } = await axiosAPI<IQuoteAPI>("quotes.json");
      if (response.data) {
        const quotesFromAPI = Object.keys(response.data).map((quoteKey) => {
          return {
            ...response.data[quoteKey],
            id: quoteKey,
          };
        });
        setQuotes(quotesFromAPI);
      }
  }, []);

  useEffect(() => {
    void fetchData();
  }, [fetchData]);

  return (
    <div className="d-flex justify-content-between">
      <div className="d-flex flex-column">
        <NavLink style={{textDecoration: "none", color: "inherit"}} to="/quotes">All</NavLink>
        <NavLink style={{textDecoration: "none", color: "inherit"}} to="/quotes">Star wars</NavLink>
        <NavLink style={{textDecoration: "none", color: "inherit"}} to="/quotes">Famous people</NavLink>
        <NavLink style={{textDecoration: "none", color: "inherit"}} to="/quotes">Saying</NavLink>
        <NavLink style={{textDecoration: "none", color: "inherit"}} to="/quotes">Humour</NavLink>
        <NavLink style={{textDecoration: "none", color: "inherit"}} to="/quotes">Motivational</NavLink>
      </div>
      <div>
        <div className="me-5"> {quotes.length === 0 ? (
          <p className="text-center fs-1">No quotes</p>
        ) : (
          <Grid container spacing={2}>
            {quotes.map((quote) => (
              <Grid xs={10} key={quote.id}>
                <Card sx={{ boxShadow: 10 }}>
                  <CardContent sx={{ alignSelf: "center" }}>
                    <Typography
                      sx={{ fontSize: 30, ms: 0, ps: 0, }}
                      variant="body2"
                    >{`"${quote.quote}"`}
                    </Typography>
                    <Typography
                      sx={{ fontSize: 30, ms: 0, ps: 0 }}
                      variant="body2">
                      {` - ${quote.author}`}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      to={`/quotes/${quote.id}`}
                      size="small"
                      component={NavLink}
                    >
                      Refactor
                    </Button>
                    <Button
                      to={`/quotes/${quote.id}`}
                      size="small"
                      component={NavLink}
                    >
                      Delete
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}</div>
      </div>
    </div>

  );
};

export default Home;