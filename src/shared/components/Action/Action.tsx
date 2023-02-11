import { MoreHoriz } from '@mui/icons-material';
import { Popover, Typography } from '@mui/material';
import { useState } from 'react';

interface ActionProps<T extends Record<string, unknown>> {
  row: T[];
  handleEdit: () => void;
  handleRemove: () => void;
}

const Action = <T extends Record<string, unknown>>(props: ActionProps<T>) => {
  const { handleEdit, handleRemove } = props;
  const [anchorEl, setAnchorEl] = useState<Element | null>();
  const open = Boolean(anchorEl);
  const idPopover = open ? 'simple-popover' : undefined;

  const handleClick = (event: React.SyntheticEvent) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
        <button onClick={handleEdit} className="w-full text-left pl-3 py-3 hover:bg-actionHover">
          <Typography>Edit</Typography>
        </button>
        <button
          onClick={handleRemove}
          className="w-full text-left pl-3 py-3 hover:bg-actionHover text-red"
        >
          <Typography>Remove</Typography>
        </button>
      </Popover>
    </>
  );
};

export default Action;
