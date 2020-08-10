import * as Express from 'express';
import * as Cors from 'cors';
import Peers from 'peers-server';
import * as Path from 'path';

const WEB_DIR = Path.resolve(
  __dirname,
  '..',
  process.env.NODE_ENV === 'development' ? 'web_dev' : 'web'
);
const port = process.env.PORT || 3000;
const app = Express();

app.use(Cors());
app.use(Express.static(WEB_DIR));

// setup peers
const server = app
  .use((_, res) => res.sendFile('index.html', { root: Path.resolve(WEB_DIR) }))
  .listen(port, () => console.log('server started at', port));

const peers = new Peers(server);
peers.setLogLevel('info');
peers.start();
