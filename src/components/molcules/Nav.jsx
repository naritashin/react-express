import React from 'react';

export default class Nav extends React.Component {
  render() {
    const styles = {
      nav: {

      },
      navList: {
        display: 'inline-block',
        width: '33.33%',
        margin: '0 auto',
        textAlign: 'center'
      },
      link: {
        display: 'block',
        border: '1px solid #888',
        borderTop: 'none',
        borderBottom: 'none',
        lineHeight: '21px',
        color: '#333',
        textDecoration: 'none'
      }
    };

    return (
      <nav>
        <ul>
          <li style={ styles.navList } className={ this.props.current === 'top' ? 'current' : '' }><a style={ styles.link } href="/">TOP</a></li>
          <li style={ styles.navList } className={ this.props.current === 'about' ? 'current' : '' }><a style={ styles.link } href="/about">ABOUT</a></li>
          <li style={ styles.navList } className={ this.props.current === 'link' ? 'current' : '' }><a style={ styles.link } href="/link">LINK</a></li>
        </ul>
      </nav>
    )
  }
}
