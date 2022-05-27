import './app.scss';
import { getAllGames } from '../fake-api';
import { Header } from '@.//store/ui-shared';
import { formatRating } from '@.//store/util-formatters';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import { Route, Routes, Link } from 'react-router-dom';

import { StoreFeatureGameDetail } from '@.//store/feature-game-detail';

export function App() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="games-layout">
          {getAllGames().map((x) => (
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
