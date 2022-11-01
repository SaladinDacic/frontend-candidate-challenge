import { EditableTodo } from "../App";

export function getEditing(id: string, editingList: any): { edit: boolean } {
  return (
    editingList.filter((todo: EditableTodo) => {
      return todo.id === id;
    })[0] || false
  );
}
