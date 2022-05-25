import leon1 from "/public/horizontal/leon1.jpg"
import leon2 from "/public/horizontal/leon2.jpg"
import leon3 from "/public/horizontal/leon3.jpg"
import leon4 from "/public/horizontal/leon4.jpg"
import leon5 from "/public/horizontal/leon5.jpg"
import leon6 from "/public/vertical/leon6.jpg"
import leon7 from "/public/vertical/leon7.jpg"
import leon8 from "/public/vertical/leon8.jpg"

export const media=[leon4,leon5];
export const mediaByIndex = index => media[index % media.length];

// console.log(mediaByIndex(1)[1]) 






/*
I want to add variable images to the image carousel in the product page just like in the main product gallery
In order to do this i need to pass both image link and how many slides should be displayed
Both number of pictures and picture link are stored in the md file

*/
/*
There is a better way to pass images into image_carousel component than dynamically improting images to this file. Code that is responsible for generating pictures looks like this 

 {slides.map((d, index) => (
          <div className={styles.embla_slide} key={index}>
            <Image
              className={styles.embla_slide_img}
              src={mediaByIndex(index)} 
              // src={`/../public/products/${d.id}/${d.picture1}`}
              alt="dress"
              layout="responsive"
              
              />
          </div>
        ))}

To better plug pictures into it we can get rid of the mediaByIndex function that relies on importing single pictures, and plug pictures directly in the src part of the image component.
In order to do this we need to use props to get all of the file names and contents from content folder for each dress as we are doing it in and [id].js type file.
Then we can use a map to display pictures from the appropirate folder one by one.

*/
/*
Best way to plug in this data would be the useContext function. The function would need to be called along getStaticProps so that the data can be saved and then recalled in  [id].js
The getSortedPostsData in bla.js returns all of the data we need for pictures to work. We get all of the meta data along with the file id. 
We can use the useContext hook just to pass data into our function. We dont need to write any additional hooks to process it in any way. However all of the data is in one file.
Map need to be used just like one in bla.js d.<desired value index name> ect ect 
example one the internet : https://www.simplenextjs.com/posts/next-context
*/


// OLD COMMENTS 



