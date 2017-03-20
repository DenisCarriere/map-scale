var humanize = require('humanize-plus');

/**
 * Human readable Map Scale based on zoom level
 *
 * @name mapScale
 * @param {number} zoom Map zoom level
 * @returns {string} Human readable map scale
 * @example
 * var mapScale = require('map-scale')
 * mapScale(10)
 * //=1:500K
 *
 * mapScale(10.5)
 * //=1:375K
 */
module.exports = function (zoom) {
    // Input validation
    if (zoom < 0) throw new Error('zoom must be greater than 0');
    if (zoom > 29) throw new Error('zoom must be less than 29');
    var lookup = {
        0: 600000000,
        1: 300000000,
        2: 150000000,
        3: 75000000,
        4: 35000000,
        5: 20000000,
        6: 10000000,
        7: 5000000,
        8: 2500000,
        9: 1000000,
        10: 500000,
        11: 250000,
        12: 150000,
        13: 75000,
        14: 35000,
        15: 20000,
        16: 10000,
        17: 5000,
        18: 2500,
        19: 1000,
        20: 500,
        21: 300,
        22: 150,
        23: 70,
        24: 35,
        25: 20,
        26: 10,
        27: 5,
        28: 2.5,
        29: 1,
        30: 1
    };
    // Handle zooms with decimals
    var basezoom = Math.floor(zoom);
    var difference = (lookup[basezoom] - lookup[basezoom + 1]) * (zoom % 1);
    var value = lookup[basezoom] - difference;

    // Humanize scale
    var compact = humanize.compactInteger(value, 0);
    return '1:' + compact.toUpperCase();
};
