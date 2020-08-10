import * as Express from 'express';
import * as Cors from 'cors';
import Peers from 'peers-server';
import * as Path from 'path';

const WEB_DIR = Path.resolve(__dirname, '..', 'web');
const port = process.env.PORT || 3000;
const app = Express();

app.use(Cors());
app.use(Express.static(WEB_DIR));

app.get(/.*/, function (req: Express.Request, res: Express.Response) {
  res.sendFile(Path.resolve(WEB_DIR, 'index.html'));
});

// setup peers
const server = app.listen(port, () => console.log('server started at', port));
const peers = new Peers(server);
peers.setLogLevel('info');
peers.start();
