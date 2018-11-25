const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const cors = require('@koa/cors');
const serve = require('koa-static');
const wdService = require('./wikidata-service');

const port = process.env.PORT || 3000;
const app = new Koa();
const wwwPath = './public'

app.use(cors());
app.use(serve(wwwPath));
app.use(bodyParser());

app.use(async (ctx, next) => {
    switch (ctx.request.method.toUpperCase()) {
        case 'OPTIONS':
            ctx.body = 'Ok';
            break;
        case 'GET':
            await next();
            break;
        case 'PUT':
            const body = ctx.request.body;
            if (!body || !body.entityId || !body.spotifyId) {
                ctx.throw(400, 'Body must contain entityId and spotifyId');
                return;
            }
            try {
                console.log('Trying to set spotifyId for entity: ' + body.entityId);
                await wdService.setSpotifyIdForEntity(body.entityId, body.spotifyId);
                ctx.body = 'Ok';
                console.log('Success');
            } catch (error) {
                console.warn('Failed');
                ctx.throw(400, error);
            }
            break;
        case 'POST':
            try {
                console.log('Trying to create song entity');
                await wdService.createSongEntity(ctx.request.body);
                ctx.body = 'Ok';
                console.log('Success');
            } catch (error) {
                console.warn('Failed');
                ctx.throw(400, error);
            }
            break;
        default:
            ctx.throw(406, 'Method not supported: ' + ctx.request.method);
    }
});

app.use(async (ctx, next) => {
    ctx.path = '/';
    await next();
});
app.use(serve(wwwPath));

app.listen(port);
console.log('Koa server is listening on port: ' + port);