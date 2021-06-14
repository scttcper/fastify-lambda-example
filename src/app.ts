import fastify from 'fastify';
import fastifyCors from 'fastify-cors';

const app = fastify();
app.register(fastifyCors);
app.get('/', (_request, reply) => {
  reply.send({ hello: 'world' });
});

// called directly
if (require.main === module) {
  app.listen(3000, err => {
    if (err) {
      console.error(err);
    }

    console.log('server listening on 3000');
  });
}

export default app;
