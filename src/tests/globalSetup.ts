import app from '../app';

export default async () => {
   global.__TEST_SERVER__ = app.listen();
};