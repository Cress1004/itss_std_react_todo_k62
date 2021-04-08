import React, { useState } from 'react';
/* 
  【TodoItemコンポーネント】
　・Todoアイテムを表示する
　・チェックボックスにチェックが入っているか管理する
　・チェックボックスにチェックが入っているかアイテムをグレーアウトする
*/
function TodoItem({item}) {
  const [cssClass, setCssClass] = React.useState("");
  
  const handleClick = () => setCssClass(cssClass=="" ? "has-text-grey-light" : "");

  return (
    <label className="panel-block">
      <input type="checkbox" onClick={handleClick}/>
        <p className={cssClass}>{item.text}</p>
    </label>
  );
}

export default TodoItem;