const mapScale = require('./');
const Benchmark = require('benchmark');
const suite = new Benchmark.Suite('map-scale');

/**
 * Benchmark Results
 *
 * zoom 10.5 x 760,212 ops/sec ±0.85% (88 runs sampled)
 * zoom 10 x 760,213 ops/sec ±1.21% (87 runs sampled)
 */
suite
    .add('zoom 10.5', () => mapScale(10.5))
    .add('zoom 10', () => mapScale(10))
    .on('cycle', e => console.log(String(e.target)))
    .on('complete', () => {})
    .run();
