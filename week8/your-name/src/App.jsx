import React from 'react';

const App = () => {
  const [isExpand, setIsExpand] = React.useState(false);


  const handleExpand = () => {
    setIsExpand(!isExpand )
  };
    return (
      <div>
        <h1>Conditional Rendering</h1>
        {isExpand ? (
          <div>
            <button onClick={handleExpand}>Đóng giới thiệu</button>
            <br />
            <strong>Giới thiệu</strong>
            <p>React là thư viện JavaScript phổ biến nhất để xây dựng giao diện 
              người dùng (UI). Nó cho tốc độ phản hồi tuyệt vời khi user nhập liệu 
              bằng cách sử dụng phương pháp mới để render trang web.</p>
          </div>
        ) : (
          <button onClick={handleExpand}>Xem giới thiệu</button>
        )}
      </div>
    );
  }


export default App;