import * as React from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  img :{
    width: '500px',
    height: '400px',
  },
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({imgsrc, indexx, images}) {
  const [open, setOpen] = React.useState(false);

  const [currentIndex, setCurrentIndex] = React.useState(indexx-1);

  const handleOpen = () => setOpen(true);
 
  const handleClose = () => setOpen(false);  

  function nextImg(indexx) {
    setCurrentIndex((indexx+1)%images.length);
  }

  function prevImg(indexx) {
    setCurrentIndex((indexx-1+images.length)%images.length);
  }


  return (
    <div>
      <Button onClick={() => handleOpen(indexx)} data-toggle="tooltip" data-placement="top" title={images[currentIndex].spot}><img src={imgsrc} className='image-show' width="400px" height="300px" alt="" /></Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >

        <Box sx={style} className='model-view'>
            
            <button className="splButtons" onClick={() => prevImg(currentIndex)}>&lt;</button>
            
            <img src={images[currentIndex].src} alt="image" height="100px" width="100px"/>
            
            <button className="splButtons" onClick={() => nextImg(currentIndex)}>&gt;</button>

            <div className='title'>{images[currentIndex].spot}</div>
        </Box>

      </Modal>
    </div>
  );
}

