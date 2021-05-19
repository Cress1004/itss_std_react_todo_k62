import React from 'react';
/* 
  【inputコンポーネント】
　・新しいTodoを作成するINPUTフィールドを作成するコンポーネント
　・Enterをクリックされたら入力された文字を使って新しいTodoを作成する
*/
function Input( {onSubmit} ) {

  const [text, setText] = React.useState('');
  
  const handleChange = e => setText(e.target.value);
  
  const handleKeyDown = e => {
    if(e.keyCode === 13) {
      onSubmit(e);
      setText('');
    }
  }
  
  return (
    <div className="panel-block">
      <input className="input"
        type="text"
        placeholder="Enter to add"
        value={text}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        />
    </div>
  );
}

export default Input;
