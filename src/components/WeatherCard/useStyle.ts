import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => {
  const rem = theme.typography.pxToRem;
  return createStyles({
    root: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: rem(24),
    },

    contentWrapper: {
      display: 'flex',
      flexDirection: 'row',
      minWidth: rem(100),
      justifyContent: 'center',
    },
  });
});
