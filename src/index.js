import React, { PureComponent } from 'react';
import ResizableAndMovable from 'react-resizable-and-movable';

const styles = {
  overlay: {
    position: 'fixed',
    top: '0px',
    left: '0px',
    width: '100%',
    height: '100%',
    zIndex: 10000,
  },
};

export default class Window extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isDragging: false,
      isResizing: false,
    };
    this.onResizeStart = this.onResizeStart.bind(this);
    this.onResizeStop = this.onResizeStop.bind(this);
    this.onDragStart = this.onDragStart.bind(this);
    this.onDragStop = this.onDragStop.bind(this);
  }

  onResizeStart() {
    this.setState({ isResizing: true });
  }

  onResizeStop() {
    this.setState({ isResizing: false });
  }

  onDragStart() {
    this.setState({ isDragging: true });
  }

  onDragStop() {
    this.setState({ isDragging: false });
  }

  render() {
    if (!this.props.isOpen) return null;
    return (
      <div
        style={{
          pointerEvents: this.state.isDragging || this.state.isResizing ? 'auto' : 'none',
          ...styles.overlay,
        }}
      >
        <ResizableAndMovable
          x={this.props.x}
          y={this.props.y}
          width={this.props.width}
          height={this.props.height}
          minWidth={this.props.minWidth}
          minHeight={this.props.minHeight}
          maxWidth={this.props.maxWidth}
          maxHeight={this.props.maxheight}
          style={{
            pointerEvents: 'auto',
            ...this.props.style,
          }}
          bounds="parent"
          className={this.props.className}
          onDragStart={this.onDragStart}
          onDragStop={this.onDragStop}
          onResizeStart={this.onResizeStart}
          onResizeStop={this.onResizeStop}
          canUpdateSizeByParent
        >
          {this.props.children}
        </ResizableAndMovable>
      </div>
    );
  }
}
