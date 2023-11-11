  import './style.css';
  import React from 'react';
  import { TodoItem } from './type';
  import Box from '@mui/material/Box';
  import Modal from '@mui/material/Modal';
import { TodoStatus } from '../StatusBox/type';

  interface Props {
    itemList: TodoItem[];
    onSelectItem: (id: number, value: TodoStatus) => void;
    children: any
  }

  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };

  export const ItemList = ({ itemList, onSelectItem, children }: Props) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = (id: number) => {
      setSelectedId(id);
      return setOpen(true)
    };
    const handleClose = () => setOpen(false);

    const [selectedId, setSelectedId] = React.useState(0);

    const [selectedItem] = React.useState('');
    const handleSelectedItem = (value: TodoStatus) => {
      setOpen(false);
      onSelectItem(selectedId, value);
    };

    return (
      <div>
        {children}
        <ul className='item-list'>
          {itemList.map((item) => (
            <li key={item.id} onClick={() => handleOpen(item.id)}>
              <div className={'status-box -' + item.status}></div>
              {item.detail}
            </li>
          ))}
        </ul>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style} className="modal-box">
            <div className="option" onClick={() => handleSelectedItem(TodoStatus.Done)}>
              <div className="status-box -done"></div>
              <span className="label">Completed</span>
            </div>
            <div className="option" onClick={() => handleSelectedItem(TodoStatus.InProgress)}>
              <div className="status-box -inprogress"></div>
              <span className="label">In Progress</span>
            </div>
            <div className="option" onClick={() => handleSelectedItem(TodoStatus.Cancelled)}>
              <div className="status-box -cancelled"></div>
              <span className="label">Cancelled</span>
            </div>
            <div className="option" onClick={() => handleSelectedItem(TodoStatus.New)}>
              <div className="status-box -new"></div>
              <span className="label">Reset</span>
            </div>
          </Box>
        </Modal>
        <span>{selectedItem}</span>
      </div>
    );
  };