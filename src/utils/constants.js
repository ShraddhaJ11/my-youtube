const GOOGLE_API_KEY = 'AIzaSyCfXXzU7wimn1HnC_vecAn1ss7SsODDyUs';
// 'AIzaSyA4i6zOV2ioetNMfRROwA76TaP5CISAMHQ';

export const YOUTUBE_VIDEO_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${GOOGLE_API_KEY}`;