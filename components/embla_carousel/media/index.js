import leon1 from "../../../public/horizontal/leon1.jpg"
import leon2 from "../../../public/horizontal/leon2.jpg"
import leon3 from "../../../public/horizontal/leon3.jpg"
import leon4 from "../../../public/horizontal/leon4.jpg"
import leon5 from "../../../public/horizontal/leon5.jpg"
import leon6 from "../../../public/vertical/leon6.jpg"
import leon7 from "../../../public/vertical/leon7.jpg"
import leon8 from "../../../public/vertical/leon8.jpg"

export const media=[leon4,leon5];
export const mediaByIndex = index => media[index % media.length];

console.log(mediaByIndex(1)[1]) 


//The function returns an array
//  {
//   src: '/_next/static/media/leon2.88e94874.jpg',
//   height: 2016,
//   width: 1120,
//   blurDataURL: '/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fleon2.88e94874.jpg&w=8&q=70'
// }


// I want to add variable images to embla carousel just like the images from main page
// Number of slides is kept in the md file 
// we should import getStortedProductsData and write a simmilar map as in bla.js page
// the map should be located where the image map is 
// each product should have it's own directory and all images in that dir should be automatically imported
// then a map needs to be written to make an array of images for embla to use
// how many slides information should be passed into the posts/products/[id].js



/*
I want to add variable images to the image carousel in the product page just like in the main product gallery
In order to do this i need to pass both image link and how many slides should be displayed
Both number of pictures and picture link are stored in the md file, however the picture dirs will need to be changed for easier access

To load the into the file a map should be used that uses the stored picture count information and all of the pictures should be automaticaly imported using requireContext(example below)
To stop images from repeating we can overload the media const with images, and modulate how many slides we show in order for images not to repeat.
   (the image count value in md file that should be passed posts/products/[id].js as SLIDE_COUNT) ↑
To do this all of the products would need to have the same generic import names dress1, dress2 ect.

*/

/* 
Sample import code from stackoverflow https://stackoverflow.com/questions/42118296/dynamically-import-images-from-a-directory-using-webpack


function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}
const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));
<img src={images['doggy.png']} />


*/