import { TodoItem } from "../components/ItemList/type";
import { TodoStatus } from "../components/StatusBox/type";
import { itemListData } from "../data/itemListData";
import { getLocalStorageItem, setLocalStorageItem } from "./LocalStorageService";

const TodoListKey = 'todoList';

export const saveTodoItem = (todoDescription: string) => {
  const todoList = getTodoList();
  
  if (todoList === undefined || todoList === null || todoList.length <= 0) {
    return [];
  }

  const lastItem = todoList[todoList.length - 1];
  const newItemId = (lastItem !== undefined && lastItem.id > 0) ? lastItem.id + 1 : 1;
  const newTodoList = [
    ...todoList, {
      id: newItemId,
      detail: todoDescription,
      status: TodoStatus.New
    } as TodoItem
  ];
  setLocalStorageItem(TodoListKey, JSON.stringify(newTodoList));
};

export const deleteTodoItem = (deletedItemId: number) => {
  const todoList = getTodoList();

  if (todoList.length >= 1) {
    const result = todoList.filter(item => item.id !== deletedItemId);
    setLocalStorageItem(TodoListKey, JSON.stringify(result));
  }
};

export const getTodoList = (): TodoItem[] => {
  const todoList = getLocalStorageItem(TodoListKey);
  return todoList === undefined || todoList === null
    ? []
    : JSON.parse(todoList);
};

export const setTodoList = (list: TodoItem[]) => {
  setLocalStorageItem(TodoListKey, JSON.stringify(list));
}

export const updateListItemStatus = (id: number, newStatus: TodoStatus) => {
  const todoList = getTodoList();
  const updatedList = todoList.map(item => ({
    ...item,
    status: (item.id === id) ? newStatus : item.status,
  }));
  setTodoList(updatedList);
}

export const loadTodoList = (): TodoItem[] => {
  const todoList = getTodoList();
  console.log('todo list', todoList);
  return (todoList === undefined || todoList === null)
    ? itemListData
    : todoList;
}

// const sortTodoList = (todoList: TodoItem[]) =>
//   (todoList.length > 0)
//   ? todoList.sort((a, b) => a.id - b.id)
//   : [];
