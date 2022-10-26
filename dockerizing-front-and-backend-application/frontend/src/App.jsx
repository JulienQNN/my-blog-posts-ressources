import logo from './logo.svg';
import styles from './App.module.css';
import { createSignal } from 'solid-js';
import axios from 'axios';

function App() {
  const [data, setData] = createSignal();

  axios.get('http://localhost:5000').then((res) => {
    console.log(res.data);
    setData(res.data);
  });

  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt='logo' />
        <p>{data}</p>
      </header>
    </div>
  );
}

export default App;
