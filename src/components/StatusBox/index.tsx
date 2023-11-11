import './style.css';
import React from 'react';
import { TodoStatus } from './type';

interface Props {
  name: string;
  detail: string;
  status: TodoStatus
}

export const StatusBox = ({ status }: Props) => (
  <div className={"status-box -" + status}>
  </div>
);
