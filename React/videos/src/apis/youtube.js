import axios from 'axios';

const KEY = 'AIzaSyDZCA4INNO9FAAhxOHIrOXUMWvHVOoSo78';

export default axios.create({
  baseUrl: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,
  },
});
