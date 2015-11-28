function persist(jsonObj, channel) {
    var stream = require('stream');

    function StringifyStream(){
        stream.Transform.call(this);

        this._readableState.objectMode = false;
        this._writableState.objectMode = true;
    }

    require('util').inherits(StringifyStream, stream.Transform);

    StringifyStream.prototype._transform = function(obj, encoding, cb){
        this.push(JSON.stringify(obj));
        cb();
    };

    var readStream = new stream.Readable({ objectMode: true });
    readStream.push(jsonObj);
    readStream.push(null);

    var strfy = new StringifyStream();
    var output = require("fs").createWriteStream(channel + '.json');

    readStream.pipe(strfy).pipe(output);
}
