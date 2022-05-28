import { useEffect, useState } from 'react';
import './app.scss';
// import { getAllGames } from '../fake-api';
import { Header } from '@.//store/ui-shared';
import { formatRating } from '@.//store/util-formatters';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import { Route, Routes, Link } from 'react-router-dom';

import { StoreFeatureGameDetail } from '@.//store/feature-game-detail';
import { Game } from '@.//api/util-interfaces';

export function App() {
  const [state, setState] = useState<{
    data: Game[];
    loadingState: 'success' | 'error' | 'loading';
  }>({
    data: [],
    loadingState: 'success',
  });

  useEffect(() => {
    setState({
      ...state,
      loadingState: 'loading',
    });
    fetch('/api/games')
      .then((x) => x.json())
      .then((res) => {
        setState({
          ...state,
          data: res,
          loadingState: 'success',
        });
      })
      .catch((err) => {
        setState({
          ...state,
          loadingState: 'error',
        });
      });
  }, []);
  return (
    <>
      <Header title="Board Games " />
      <div className="container">
        <div className="games-layout">
          {state.loadingState === 'loading'
            ? 'Loading'
            : state.loadingState === 'error'
            ? '<div>Error retrieving data</div>'
            : state.data.map((x) => (
                <Link to={`/game/${x.id}`}>
                  <Card key={x.id} className="game-card">
                    <CardActionArea>
                      <CardMedia
                        className="game-card-media"
                        image="https://media.giphy.com/media/12xMvwvQXJNx0k/giphy.gif"
                        title={x.name}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          {x.name}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                          {x.description}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                          className="game-rating"
                        >
                          <strong>Rating:</strong> {formatRating(x.rating)}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Link>
              ))}
        </div>
      </div>
      <Routes>
        <Route path="/game/:id" element={<StoreFeatureGameDetail />} />
      </Routes>
    </>
  );
}

export default App;
