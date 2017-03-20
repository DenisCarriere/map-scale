const test = require('tape');
const mapScale = require('./');

test('map-scale', t => {
    t.equal(mapScale(2), '1:150M');
    t.equal(mapScale(9), '1:1M');
    t.equal(mapScale(10), '1:500K');
    t.equal(mapScale(10.5), '1:375K');
    t.equal(mapScale(10.1), '1:475K');
    t.equal(mapScale(10.75), '1:312K');
    t.end();
});
