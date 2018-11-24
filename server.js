const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const wdService = require('./wikidata-service');

const app = new Koa();

app.use(bodyParser());

app.use(async ctx => {
    switch (ctx.request.method.toUpperCase()) {
        case 'GET':
            ctx.body = 'Wikidata Service is up and running!';
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

app.listen(3000);