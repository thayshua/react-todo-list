import React from 'react';
import './Edit.css';
import TextField from '@mui/material/TextField';
import { IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import HomeIcon from '@mui/icons-material/Home';
import { EditItemList } from '../../components/EditItemList';
import { deleteTodoItem, getTodoList, loadTodoList, saveTodoItem } from '../../services/TodoListService';
import { useNavigate } from 'react-router-dom';

function Edit() {
  const todoList = loadTodoList();
  const [itemList, setItemList] = React.useState(todoList);

  const deleteItemFromList = (id: number) => {
    deleteTodoItem(id);
    setItemList(getTodoList());
  }

  const [newTodoItem, setNewTodoItem] = React.useState('');

  const addItem = () => {
    saveTodoItem(newTodoItem);
    setItemList(getTodoList());
  }

  const navigate = useNavigate();
  const navigateToHomePage = () => {
    navigate('/');
  }

  return (
    <div className="edit">
      <section className="todolist">
        <h1 className="title">
          <span className="text">Edit TODO List</span>
          <IconButton
            onClick={navigateToHomePage}
            className="homebutton"
          >
            <HomeIcon fontSize="small"></HomeIcon>
          </IconButton>
        </h1>
        
        <form className="add">
          <TextField
            id="todoItem"
            label="TODO"
            variant="standard"
            value={newTodoItem}
            onChange={e => setNewTodoItem(e.target.value)}
          />
          <IconButton
            className="button"
            onClick={addItem}
            disabled={newTodoItem === ''}
            type="submit"
          >
            <AddIcon fontSize="small"></AddIcon>
          </IconButton>
        </form>
        <EditItemList
          editItemList={itemList}
          onDeleteItem={deleteItemFromList}
        >
        </EditItemList>
        {/* modal */}
      </section>
    </div>
  );
}

export default Edit;
