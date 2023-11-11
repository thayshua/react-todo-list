import { TodoItem } from '../components/ItemList/type';
import { TodoStatus } from '../components/StatusBox/type';

export const itemListData: TodoItem[] = [
  {
    id: 1,
    detail: 'Item 1',
    status: TodoStatus.New
  },
  {
    id: 2,
    detail: 'Item 2',
    status: TodoStatus.InProgress
  },
  {
    id: 3,
    detail: 'Item 3',
    status: TodoStatus.Cancelled
  },
  {
    id: 4,
    detail: 'Item 4',
    status: TodoStatus.Done
  },
];