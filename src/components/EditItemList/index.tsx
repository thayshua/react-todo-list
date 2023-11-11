import './style.css';
import React from 'react';
import { TodoItem } from './type';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { IconButton } from '@mui/material';

interface Props {
  editItemList: TodoItem[];
  onDeleteItem: (id: number) => void;
  children: any
}

export const EditItemList = ({ editItemList, onDeleteItem, children }: Props) => {
  return (
    <>
      {children}
      <ul className='edit-item-list'>
        {editItemList.map((item) => (
          <li key={item.id}>
            <IconButton
              aria-label='delete'
              size='small'
              onClick={() => onDeleteItem(item.id)}
            >
              <HighlightOffIcon fontSize='small'></HighlightOffIcon>
            </IconButton>
            {item.detail}
          </li>
        ))}
      </ul>
    </>
  );
};