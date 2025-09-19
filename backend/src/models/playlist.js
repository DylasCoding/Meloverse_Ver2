"use strict";

const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Playlist = sequelize.define('Playlist', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    listenerID: DataTypes.STRING,
    title: DataTypes.STRING,
    imagePath: DataTypes.TEXT,
    timeCreated: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
}, {
    tableName: 'Playlists',
    timestamps: false,
});

Playlist.associate = (models) => {
    // Định nghĩa quan hệ ở đây nếu cần
};

module.exports = Playlist;
