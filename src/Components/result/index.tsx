import  { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

  const BasicModal = ({ open, setOpen, selectedVotes }: {
    open: boolean,
    setOpen: Function,
    selectedVotes: string[]
  }) => {

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const uniqueVotes = new Set(selectedVotes);
  const getUniqueVotes = [...uniqueVotes]

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className='modal-box'>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          <button 
            onClick={handleClose} 
            className='close-modal'
            style={{color: 'red', position: 'absolute', top:'10px', right:'15px', fontSize:'30px', border:'none', background: 'transparent', cursor: 'pointer'}}
          >
            &times;
          </button>
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Voted Names:
          </Typography>
          <ul>
            {getUniqueVotes?.map((votes, index) => (
              <li key={index}>{votes}</li>
            ))}
          </ul>
        </Box>
      </Modal>
    </div>
  );
}

export default BasicModal;
 
