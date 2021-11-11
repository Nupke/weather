import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => {
  const rem = theme.typography.pxToRem;
  return createStyles({
    btnWrapper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      margin: rem(8),
      '& .MuiTypography-root': {
        fontSize: rem(16),
        fontWeight: 500,
      },
    },

    btnRowWrapper: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      margin: rem(8),
      '& .MuiTypography-root': {
        fontSize: rem(20),
        fontWeight: 500,
      },
      '& svg': {
        width: rem(30),
        height: rem(30),
        color: theme.palette.text.primary,
      },
    },
    root: {
      padding: 5,
      '& svg': {
        width: rem(48),
        height: rem(48),
        color: theme.palette.text.primary,
      },
    },
  });
});
