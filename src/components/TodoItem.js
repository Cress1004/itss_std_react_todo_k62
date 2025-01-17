import React from 'react';
/* 
  【TodoItemコンポーネント】
　・Todoアイテムを表示する
　・チェックボックスにチェックが入っているか管理する
　・チェックボックスにチェックが入っているかアイテムをグレーアウトする
*/
function TodoItem({item, onCheck}) {
  const handleChange = () => {
    onCheck(item);
  }

  return (
    <label className="panel-block">
      <input type="checkbox" 
             checked={item.done}
             onChange={handleChange}/>
        <p className={item.done ? 'has-text-grey-light' : ''}>{item.text}</p>
    </label>
  );
}

export default TodoItem;