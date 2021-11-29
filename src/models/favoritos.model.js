const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
    nome_anime: String,
    poster: String,
    id_original: String,
    start: Date,
    end: Date,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuarios',
        require: true,
    },
},{
    timestamps:true
}); 

const favoritos = mongoose.model('Favoritos', DataSchema);

module.exports = favoritos;