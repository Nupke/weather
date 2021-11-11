import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.background.default,
    },
    Links: {
      display: 'flex',
      flexDirection: 'row',
      '& .MuiTypography-root': {
        textDecoration: 'none',
        color: theme.palette.text.primary,
        marginRight: theme.typography.pxToRem(20),
        padding: 20,
      },
      '& a': {
        color: theme.palette.primary.main,
        textDecoration: 'none',
      },
    },
  }),
);
