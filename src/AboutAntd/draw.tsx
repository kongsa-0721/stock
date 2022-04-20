import { Drawer, Button } from 'antd';
import React from 'react';
import styled from 'styled-components'

const DiD = styled.div`
width: 400px;
  position: relative;
  height: 200px;
  padding: 48px;
  overflow: hidden;
  text-align: center;
  background: #a29898;
  border: 1px solid #ebedf0;
  border-radius: 2px;
  .ant-drawer-body{

    &::-webkit-scrollbar {
      width: 16px;
    }
    &::-webkit-scrollbar-thumb {
      border: 5px solid transparent;
      background-clip: content-box;
      border-radius: 9999px;
      background-color: rgba(139, 143, 163, 0.2);
    }
    &::-webkit-scrollbar-thumb:hover {
      background-color: rgba(139, 143, 163, 0.36);
    }
  }
`
class Draw extends React.Component {
  state = { visible: false };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <DiD>
        Render in this
        <div style={{ marginTop: 16 }}>
          <Button type="primary" onClick={this.showDrawer}>
            Open
          </Button>
        </div>
        <Drawer
          title="Basic Drawer"
          placement="right"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
          getContainer={false}
          style={{ position: 'absolute' }}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Drawer>
      </DiD>
    );
  }
}

export default Draw;