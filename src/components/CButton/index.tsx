import React from 'react';
import { Box, IconButton, IconButtonProps, Typography } from '@material-ui/core';

import { useStyles } from './useStyles';

export interface CIconButtonProps extends IconButtonProps {
  title: string;
  subTitle?: string;
  icon: React.ReactNode;
  direction?: 'row' | 'column';
}

export const CIconButton: React.FC<CIconButtonProps> = ({
  title,
  subTitle,
  icon,
  direction = 'column',
  ...props
}: CIconButtonProps) => {
  const classes = useStyles();
  return (
    <Box className={direction === 'row' ? classes.btnRowWrapper : classes.btnWrapper}>
      <Typography>{title}</Typography>
      {direction === 'row' && icon}
      {direction === 'column' && (
        <IconButton classes={{ root: classes.root }} {...props}>
          {icon}
        </IconButton>
      )}
      {subTitle && <Typography>{subTitle}</Typography>}
    </Box>
  );
};
