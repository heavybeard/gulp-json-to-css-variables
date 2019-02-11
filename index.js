const jsonToCssVariables = require('json-to-css-variables');

/**
 * Transform JSON to CSS
 */
module.exports = () => {
    const Transform = require('stream').Transform;
    let transformStream = new Transform({ objectMode: true });

    transformStream._transform = (file, encoding, callback) => {
        file.path = `${file.path.substr(0, file.path.lastIndexOf('.json'))}.css`;
        file.contents = Buffer.from(
            jsonToCssVariables(JSON.parse(file.contents.toString()), { unit: '', pretty: true, element: ':root' }),
            encoding,
        );
        callback(null, file);
    };

    return transformStream;
};
