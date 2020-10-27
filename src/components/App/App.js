import React from 'react';
import styles from './App.scss';
import List from '../List/List';

class App extends React.Component {
  render() {
    return (

      <main className={styles.component}>
        <h1 className={styles.title}>My first React app</h1>
        <h2 className={styles.subtitle}>Hello word!</h2>
        <List title={['Things to do ', <sup>soon!</sup>]}
          image={'https://i.postimg.cc/6pLP9t9Q/space-1.png'}>
          {/* <p>I'm planning on doing all these things sooner, rather than later!</p> */}
        </List>

      </main>

    )
  }
}

export default App;
