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