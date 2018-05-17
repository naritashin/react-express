import React from 'react';
import Nav from 'components/molcules/Nav';

class Header extends React.Component {
  render() {
    const styles = {
      header: {
        width: '100%',
        border: '1px solid #ccc',
        background: '#eee'
      },
      title: {
        fontSize: 20,
        lineHeight: '50px',
        color: '#333',
        textAlign: 'center'
      }
    };

    return (
      <header style={ styles.header }>
        <h1 style={ styles.title }>{ this.props.title }</h1>
        <Nav current={ this.props.current } />
      </header>
    )
  }
}

module.exports = Header;
