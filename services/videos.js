const Db = require('../lib/db');

class VideosService {

    constructor(){
        this.collection = 'videos';
        this.db = new Db();
    }

   async getVideos( {tags} ) {
        const videos = await this.Db.getAll(this.collection, tags);
        return videos || [];
    }

    async getVideo( {videoId} ) {
        const video = await this.Db.getAll(this.collection, videoId);
        return video || {};
    }

    async createVideo( {video} ) {
        const createVideoId = await this.Db.create(this.collection, video);
        return createVideoId;
    }

    async updateVideo( {videoId, video} ) {
        const updateVideoId = await this.Db.create(this.collection, videoId, video);
        return updateVideoId;
    }

    async deleteVideo( {videoId} ) {
        const deleteVideoId  = await this.Db.create(this.collection, videoId);
        return deleteVideoId;
    }
    
}

module.exports = VideosService;