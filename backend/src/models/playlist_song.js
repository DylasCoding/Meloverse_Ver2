"use strict";

const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Playlist_Song = sequelize.define('Playlist_Song', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    playlistID: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    songID: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    timeAdded: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
}, {
    tableName: 'Playlist_Songs',
    timestamps: false,
});

Playlist_Song.associate = (models) => {
    // Định nghĩa quan hệ ở đây nếu cần
};

module.exports = Playlist_Song;
