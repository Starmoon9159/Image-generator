const download = require('image-downloader');
const axios = require('axios')


var intervalID = setInterval(function() {

        axios.get('https://api.waifu.pics/nsfw/waifu').then((response) => {
            console.log(`${response.data.url}`)
            const options = {
                url: `${response.data.url}`,
                dest: '../../nsfw-images/',
            }
            download.image(options)
                .then(({ filename }) => {
                    console.log('Saved to', filename); // saved to /path/to/dest/image.jpg
                })
                .catch((err) => console.error(err));
        }
        )
    
    
    
}, 3000);


