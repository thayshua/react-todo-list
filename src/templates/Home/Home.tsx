import React from 'react';
import { useNavigate } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import './Home.css';
import { ItemList } from '../../components/ItemList';
import { TodoStatus } from '../../components/StatusBox/type';
import { getTodoList, loadTodoList, setTodoList, updateListItemStatus } from '../../services/TodoListService';

function Home() {
  const todoList = loadTodoList();
  setTodoList(todoList);

  const [itemList, setItemList] = React.useState(getTodoList());
  const handleItemList = (id: number, newStatus: TodoStatus) => {
    updateListItemStatus(id, newStatus);
    setItemList(getTodoList());
  };

  const navigate = useNavigate();
  const navigateToEditPage = () => {
    navigate('/edit');
  };

  return (
    <div className="Home">
      <section className="todo-list">
        <IconButton
          aria-label="edit"
          size="small"
          className="editicon"
          onClick={navigateToEditPage}
        >
          <EditIcon fontSize="small"/>
        </IconButton>
        <ItemList itemList={itemList} onSelectItem={handleItemList}>TODO List</ItemList>
        {/* modal */}
      </section>
    </div>
  );
}

export default Home;
