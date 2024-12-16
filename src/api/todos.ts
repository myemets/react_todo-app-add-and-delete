import { Todo } from '../types/Todo';
import { client } from '../utilities/fetchClient';

export const USER_ID = 1548;

export const getTodos = () => {
  return client.get<Todo[]>(`/todos?userId=${USER_ID}`);
};

export const deletePost = (postId: number) => {
  return client.delete(`/todos/${postId}`);
};
