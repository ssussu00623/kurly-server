import express from 'express';
import cors from 'cors';
import path from 'path';
import registerRouter from './router/registerRouter.js';
import uploadRouter from './router/uploadRouter.js';
import mainRouter from './router/mainRouter.js';
import memberRouter from './router/memberRouter.js';
import cartRouter from './router/cartRouter.js';
import orderRouter from './router/orderRouter.js';
import paymentsRouter from './router/paymentsRouter.js';
import reviewRouter from './router/reviewRouter.js';
import inquireRouter from './router/inquireRouter.js';

const server = express();
const port = 9000;

server.use(express.json());
server.use(express.urlencoded());
server.use(cors());
server.use('/upload_files', express.static(path.join("upload_files")));

server.get('/test', (req, res) => {
    res.send('<h1>화면에 잘 보이는지 테스트 해보세요.</h1>')
});

server.use('/product', registerRouter);
server.use('/upload', uploadRouter);


server.use('/member', memberRouter);

server.use('/main', mainRouter);

server.use('/cart', cartRouter);

server.use('/sandbox-dev/api/v1/payments', paymentsRouter);

server.use('/order', orderRouter);

server.use('/review', reviewRouter);

server.use('/inquire', inquireRouter)

server.listen(port, () => {
    console.log('start ----->>', port);
});  