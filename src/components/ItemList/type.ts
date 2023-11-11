import { TodoStatus } from '../StatusBox/type';

export interface TodoItem {
    id: number,
    detail: string,
    status: TodoStatus
}
