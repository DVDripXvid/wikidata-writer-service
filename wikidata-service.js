const authConfig = {
    username: 'Zakar95',
    password: '1d5TGG0R0rgP_7',
    bot: false,
};
const wdEdit = require('wikidata-edit')(authConfig);

const propertyIds = {
    performer: 'P175',
    partOf: 'P361',
    instanceOf: 'P31',
    genre: 'P136',
    releaseDate: 'P577',
    spotifyTrackId: 'P2207',
    spotifyAlbumId: 'P2205',
    spotifyArtistId: 'P1902',
};

const classIds = {
    human: 'Q5',
    song: 'Q7366',
    studioAlbum: 'Q208569',
    album: 'Q482994',
};

function setSpotifyIdForEntity(entityId, spotifyId) {
    return wdEdit.claim.add(entityId, propertyIds.spotifyTrackId, spotifyId);
}

async function createSongEntity(song) {
    const entity = convertSongToEntity(song);
    console.log(entity);
    const response = await wdEdit.entity.create(entity);
    return setSpotifyIdForEntity(response.entity.id, song.spotifyId);
}

function convertSongToEntity(song) {
    const reject = (msg) => { throw new Error(msg); };
    const label = song.name || reject('name is required');
    const desc = `Song from ${song.artists ? song.artists.join(' and ') : reject('artists are required')}`
    const spotifyId = song.spotifyId || reject('spotify id is required');
    const entity = {
        labels: { en: label },
        descriptions: { en: desc },
        claims: {
            [propertyIds.instanceOf]: [classIds.song],
            // [propertyIds.spotifyTrackId]: [spotifyId],
        }
    };
    return entity;
}

module.exports = {
    setSpotifyIdForEntity,
    createSongEntity,
};