# Clone the repository or follow this instructions :

1. Create your frontend application in an empty folder :

```shell
# I use Vite because I like the vitesse
npx degit solidjs/templates/js frontend
```

1. Install the dependencies in the "frontend" folder :

```shell
pnpm i && pnpm i axios
```

1. Modify your App.jsx file :

```js
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
```

---

2. Create a "backend" folder at the root of your project.

3. Init Express in your "backend" folder :

```shell
# I keep the default configuration and use "index.js" file as entry point
pnpm init && pnpm i cors && pnpm i express --save
```

> My express application name is "backend" because I'm lazy, just remember that your backend folder need to be named "backend" for this tutorial !

3. Create a index.js file in the "backend" folder :

```js
// Content of your "index.js" file
const express = require('express');
const cors = require('cors');
const app = express();

app.use(
  cors({
    origin: ['http://localhost'],
  })
);

app.get('/', (req, res) => {
  res.status(200).send('Free 1337');
});

app.listen(5000, () => {
  console.log('Server listening on port 5000 🍯');
});
```

To verify everything is working correctly start your Express and Solid applications in two different CLI:

```shell
# In your backend folder
node index.js

# In your frontend folder
pnpm run dev
```

A this point our project is ready to be Dockerised !

Your `http://localhost:3000` should return the Solid Logo and "Free 1337".
