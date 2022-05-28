import { useEffect, useState } from 'react';
import styles from './store-feature-game-detail.module.scss';
import { useParams } from 'react-router-dom';
import { formatRating } from '@.//store/util-formatters';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Game } from '@.//api/util-interfaces';

/* eslint-disable-next-line */
export interface StoreFeatureGameDetailProps {}

export function StoreFeatureGameDetail(props: StoreFeatureGameDetailProps) {
  const [state, setState] = useState<{
    data: Game | null;
    loadingState: 'success' | 'error' | 'loading';
  }>({
    data: null,
    loadingState: 'success',
  });
  const params = useParams();
  useEffect(() => {
    setState({
      ...state,
      loadingState: 'loading',
    });
    fetch(`/api/games/${params['id']}`)
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
    <div className="container">
      {state.loadingState === 'loading' ? (
        'Loading'
      ) : state.loadingState === 'error' ? (
        '<div>Error retrieving data</div>'
      ) : state.data == null ? (
        ''
      ) : (
        <Card>
          <CardActionArea>
            <CardContent>
              <Typography>{params['id']}</Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                className="game-rating"
              >
                <strong>Rating:</strong>
                {formatRating(state.data.rating)}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      )}
    </div>
  );
}

export default StoreFeatureGameDetail;
