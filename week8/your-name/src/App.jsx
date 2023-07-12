import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpand: false
    };
  }

  handleExpand = () => {
    this.setState({ isExpand: !this.state.isExpand });
  }

  render() {
    return (
      <div>
        <h1>Conditional Rendering</h1>
        {this.state.isExpand ? (
          <div>
            <button onClick={this.handleExpand}>Đóng giới thiệu</button>
            <br />
            <strong>Giới thiệu</strong>
            <p>React là thư viện JavaScript phổ biến nhất để xây dựng giao diện 
              người dùng (UI). Nó cho tốc độ phản hồi tuyệt vời khi user nhập liệu 
              bằng cách sử dụng phương pháp mới để render trang web.</p>
          </div>
        ) : (
          <button onClick={this.handleExpand}>Xem giới thiệu</button>
        )}
      </div>
    );
  }
}

export default App;