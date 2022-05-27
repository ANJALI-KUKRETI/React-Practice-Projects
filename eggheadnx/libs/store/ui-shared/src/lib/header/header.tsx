import { makeStyles, Theme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

// const useStyles = makeStyles((theme: Theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     flexGrow: 1,
//   },
// }));
/* eslint-disable-next-line */
export interface HeaderProps {}

export function Header(props: HeaderProps) {
  // const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">Board Game Hoard</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
