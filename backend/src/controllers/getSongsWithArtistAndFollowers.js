const { Model, where } = require('sequelize');
const { Song, User, Follow } = require('../models')
const Sequelize = require('sequelize');
const getSongsWithArtistAndFollowers  = async (req, res) => {
    try {
        const songId = req.query.id;
        if (!songId) {
            return res.status(400).json({
                message: 'Missing song ID',
            });
        }

       const song = await Song.findAll({
        attributes: {
            include: [
                [Sequelize.fn('COUNT', Sequelize.col('Artist->Followers.id')), 'followerCount'],
            ],
        },
        include: [
            {
                model: User,
                as: 'Artist',
                attributes: ['id', 'userName', 'imagePath'],
                include: [
                    {
                        model: Follow,
                        as: 'Followers',
                        attributes: [],
                    },
                ],
            },
        ],
        where: { id: songId },
        group: ['Song.id', 'Artist.id'],
       })
       res.status(200).json(song);
    } catch (error) {
        console.error('Cannot get song data: ', error);
        res.status(500).json({
            message: 'cannot get data',
            error: error.message,
        });
    }
}


module.exports = { getSongsWithArtistAndFollowers };