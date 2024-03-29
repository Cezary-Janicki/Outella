# 1 Components

## 1.1 Bestsellers

Components that displays the 3 "bestseller" dresses on the main page

## 1.2 ClientOnly

Component used to check if the site has mounted properly to avoid hydration errors

## 1.3 DressesTypes

Component that displays 5 images that all directly link to the product gallery

## 1.4 EmblaCarousel

Embla carousel is the image carousel that is displayed in the page, it utilizes a 3rd party repository to display the lightbox

### 1.4.1 Image Carousel

Component imports

- AiOutlineLeft, AiOutlineRight => icons used for left and right arrows

#### Embla Stuff

##### 1.4.1.1 Props:

- slides => number of slides (number of photos that embla should display)
- id => ID of a current page for embla to know which pictures to take from the database

##### 1.4.1.2 Functions ( and consts with arrow functions):

- onThumbClick => this triggers on clicking a thumbnail, if the click is allowed it scrolls main viewport to the clicked thumbnail
- onSelect => this function makes the thumbnails scroll and it lights up the active one

##### 1.4.1.3 Consts:

- [dress, setDress] => useState that is utilized to store and rewrite current displayed product data
- [selctedIndex, setSelectedIndex] => use state that saves current selected index, utilized to properly sync/link embla with the lightbox
- [mainViewportRef, embla] => reference for embla main viewport, (not sure what it does it's an embla thing)
- [thumbViewportRef, emblaThumbs] => again some embla thing that is needed for the carousel to work, it's a thumbnail ref this time

#### 1.4.2 Lightbox Stuff

##### 1.4.2.1 Functions (and consts with arrow functions):

- currentIndex => this is a basic useEffect function. embla?.selectedScrollSnap is a function that returns current index from embla. Every time this index is changed useEffect updates the lightbox index accordingly
- lightboxIndex useEffect => this useEffect checks for changes in lightboxIndex and updates the embla index accordingly
- pictureSources => this is a function that generates an array of all picture sources that are avilable for embla carousel to be passed as a prop in lightbox
- scrollPrev/scrollNext => hook based solution for scrolling buttons with embla\

##### 1.4.2.2 Consts:

- [open, setOpen] => useState that manages the open/closed state of the lightbox
- [lightboxIndex, setLightboxIndex] => useState that keeps track of index that lightbox should display the picture of. This also is later linked with embla selectedIndex using useEffect

##### 1.4.2.3 Lightbox component Props:

- close => action that is triggered upon closing the component
- slides => array of all paths that components needs to display
- index => index at which the lightbox should be opened
- styles => basic styles for the component
- on => this forces the lightboxIndex useState to update on view so that embla carousel can scroll in the background
- plugins => any additional plugins used with the component
- zoom => setting for the zoom plugin

#### 1.4.3 Image Component

##### 1.4.3.1 Props:

- src => dymanic image path so that all images can be displayed via a loop
- placeholder => type of a placeholder effect utilized for the image
- blurDataURL => path for a smaller resolution picture of a dress to be blurred and displayed before a regular image could be downloaded
- onClick => onClick effect that opens the lightbox

### Thumbnails

Component that displays thumbnails as buttons with images, nothing special here

## 1.5 Footer

Component responsible for displaying the footer

## 1.6 FormikFiltering

Component that utilizies query strings along with formik to fitler the results according to users needs <br />

### 1.6.1 Props:

- products => Array with all of the products/dresses information
- galleryItems => Array with all of the dresses types
- dressColors => Array with all of the dresses colors

### 1.6.2 Functions / consts:

- getTypeCount => takes all items as an input and a dress type, counts how many items there are of a selected type
- getColorCount => takes all items as an input and a dress color, counts how many items there are of a selected color
- getFilteredTypes => takes currently displayed items and applies a filter, only items of a chosen type are selected, filtered items are returned as an array
- getFilteredColors => takes currently displayed items and applies a filter, only items of a chosen color are selected, filtered items are returned as an array
- autoSave => automatically saves formik filtering filed results 500ms after making a change so that no select button is needed, function is triggered automatically with useEffect
- hasMounted/setHasMounted => useState used to properly check if the page has already mounted so that a hydration issue can be avoided
- prices => array of prices that is fed into the formik filterring price field
- initialValues => array of initial values for formik Filtering

## 1.7 GalleryPicture

Now mostly defunct component that used to display a set of 3 buttons that changed the image gallery picture size and/or formatting
The component consists of 3 wrappers, buttons and logic to track their open/closed state

- small => it displayed images of smaller size than curently
- large => the wrapper used currently
- description => displayed a product to the left and information about it to the right, like on allegro/ebay

## 1.8 GradientUnderline

The Pink gradient underline utilized to devide content from footer

## 1.9 Head

It's a head

## 1.11 Navbar

Displays the proper navbar component according tot he device width

## 1.12 OutsideAlerter

Detects clicks outside the div for the mobile onClick overlay in product page dress pictures to work

## 1.13 ScrollUpButton

A small button that always scrolls user to the top of the page

## 1.14 Size Selector

Now not utilized component that allowed for changing product page image size on toggle

## 1.15 Title

The logo utilized on the top of the page

## 1.16 WidthCheck

Basic component that checks the width of the screen and creates booleans that can be used to create responsive desing with emotion

## 1.17 Wrappers

### 1.17.1 BodyWrapper

Wrapper for the body of a page it consists of a head, navbar, footer, scroll up button and it's children are wrapped in <main> component which has a fixed width

### 1.17.2 BodyWrapperNoMain

Wrapper for the body of a page it consists of a head, navbar, footer, scroll up button and it's children are not wrapped in <main> component and do not have a fixed width

### 1.17.3 FormikFilteringWrapper

This is formik filtering wrapper it allows responsive desing for the Formik Filtering Component Sticky on desktop and in sidebar on mobile.
Wrapper utilizes breakpoint from WidthCheck component to check whick version to display(mobile or desktop). Mobile version utilized useState to open and close the hamburger menu.

- isOpen - value of the useState either true(menu open) or false (menu closed)
- setIsOpen- function utilized to set the value of useState

### 1.17.4 ImageWrapper

Basic wrapper used for all of the images

### 1.17.5 ProductGalleryWrapper

Wrapper for the whole product gallery that hides the navbar button so that hamburger menu can be used with formik

# 2 Content

Footer content is stored here. Can't store it on a sever due to file formatting. Server is Json only and non compatible with any formating such as one used in markdown files

# 3 Libraries

## 3.1 posts

Used for generating and managment/processing for the footer

## 3.2 products

Used for data managment/processing for the products/dresses

### Functions

- GetSortedProductsData => fetch product data via global context
- getPhotoCount => get the number of photos in a folder for a selected product
- getAllProductIds => fetches all of the product ids from a server
- getProductCount => returns a number of products with a selected type

# 4 Pages

## 4.1 Index

The main/index page nothing special

## 4.2 Faq

Faq page with a few test accordion questions

## 4.3 Product gallery

### 4.3.1 Functions

- queryFilter => filters and updates(using setItem) item (products/dresses) data according to the filters stored in query params with router

### 4.3.1 Consts

- [scroll, setScroll] => useState utilized for the Product Gallery Wrapper to change enable sticky positioning with mui ( when it isn't done this way there are bugs/glitches)
- [item, setItem] => useState utilized for storing and updating the product/dresses information
- galleryItems => creates and array of all dress styles/types
- dressColors => creates an array of all dress colors
- router => used to initialize router

## 4.4 posts/[id]

This is a template for generating footer pages

## 4.5 posts/products/[id]

This is a template for generating dress/product pages

### 4.5.1 Functions

- getStaticPaths =>
- getStaticProps =>

### 4.5.2 Consts

- slides => this is generating the number of slides that embla carousel needs to display

# 5 Misc files
