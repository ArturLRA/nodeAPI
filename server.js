import fastify from 'fastify'
import cors from '@fastify/cors'

const server = fastify();

server.register(cors, {
    origin: '*',
    methods: ['GET', 'POST']
})

const banco = [
    {
        email: 'padaria@gmail.com',
        senha: '1234'
    }
];

server.post('/Login', (request) => {
    const usuario = request.body;

    for (const userBanco of banco) {
        if (userBanco.email === usuario.email 
            && usuario.senha === userBanco.senha) {
                return {mensagem:'pode entrar'};
            } else {
                return {mensagem:'umas informações tão erradas aí'};
            }
    }

    return 'Olá Mundo';
});

server.get('/Login', () => {
    return 'Olá Mundo'
});

server.listen({
    port: 3333
});