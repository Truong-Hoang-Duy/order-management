import { MoreHoriz } from '@mui/icons-material';
import { Popover, Typography } from '@mui/material';
import { useState } from 'react';

interface ActionProps<T extends Record<string, unknown>> {
  row: T[];
}

const Action = <T extends Record<string, unknown>>(props: ActionProps<T>) => {
  const [anchorEl, setAnchorEl] = useState<Element | null>();
  const open = Boolean(anchorEl);

  const handleClick = (event: React.SyntheticEvent) => {
    console.log(event.currentTarget);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const idPopover = open ? 'simple-popover' : undefined;

  return (
    <>
      <button className="" onClick={handleClick}>
        <MoreHoriz />
      </button>
      <Popover
        id={idPopover}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <button className="w-full text-left pl-3 py-3 hover:bg-actionHover">
          <Typography>Edit</Typography>
        </button>
        <button className="w-full text-left pl-3 py-3 hover:bg-actionHover">
          <Typography>Remove</Typography>
        </button>
      </Popover>
    </>
  );
};

export default Action;
