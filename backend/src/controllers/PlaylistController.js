const { title } = require('process');
const { User, Song, Playlist } = require('../models');

exports.creatPlaylist = async (req, res) => {
    try {
        const { listenerID } = req.body;

        const playlist = await Playlist.create({ 
            listenerID,
            title: "Your Playlist #" + Math.floor(Math.random() * 10000),
        });

        res.status(200).json({ message: 'Playlist created successfully', playlist });
    } catch (error) {
        res.status(500).json({ error: 'Failed to create playlist', details: error.message });
    }
};



