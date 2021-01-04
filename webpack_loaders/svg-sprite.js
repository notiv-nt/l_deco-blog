const glob = require('glob');
const fs = require('fs');
const path = require('path');
const SVGO = require('svgo-sync');
const mkdir = require('mkdir-p');
const _ = require('lodash');


const outputFilename = 'sprite.svg';
const outputSpriteStart = '<svg style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs>';
const outputSpriteEnd = '</defs></svg>';


module.exports = function svgSprite(opts) {
    let _opts = opts || {};
    let prefix = _.isUndefined(_opts.prefix)
        ? 'icon-'
        : _opts.prefix;

    let sourcePath = _opts.source;
    let files = glob.sync('**/*.svg', { cwd: sourcePath });
    let sprites = [];

    let svgo = new SVGO({
        plugins: [
            { removeUselessDefs: true },
            { cleanupIDs: true },
            { removeDimensions: true }
        ]
    });

    files.forEach(function(fileName) {
        let parsed = path.parse(fileName);
        let fileContent = fs.readFileSync(path.join(sourcePath, fileName), 'utf8');
        let optimizedSvg = svgo.optimizeSync(fileContent.toString());

        sprites.push(optimizedSvg.data.replace(/<svg/, `<svg id="${prefix}${parsed.name}"`));
    });

    // isArray
    if (_.isArray(_opts.dest)) {
        _opts.dest.forEach((p) => {
            mkdir.sync(p);
            fs.writeFileSync(path.join(p, outputFilename), outputSpriteStart + sprites.join(' ') + outputSpriteEnd);
        });
    }

    // plain string
    else {
        mkdir.sync(_opts.dest);
        fs.writeFileSync(path.join(_opts.dest, outputFilename), outputSpriteStart + sprites.join(' ') + outputSpriteEnd);
    }
};
