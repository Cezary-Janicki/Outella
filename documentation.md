# Components

## Bestsellers

Components that displays the 3 "bestseller" dresses on the main page

## ClientOnly

Component used to check if the site has mounted properly to avoid hydration errors

## DressesTypes

Component that displays 5 images that all directly link to the product gallery

## EmblaCarousel

Embla carousel is the image carousel that is displayed in the page, it utilizes a 3rd party repository to display the lightbox

### Image Carousel

Component imports

- AiOutlineLeft, AiOutlineRight => icons used for left and right arrows

#### Embla Stuff

##### Props:

- slides => number of slides (number of photos that embla should display)
- id => ID of a current page for embla to know which pictures to take from the database

##### Functions ( and consts with arrow functions):

- onThumbClick => this triggers on clicking a thumbnail, if the click is allowed it scrolls main viewport to the clicked thumbnail
- onSelect => this function makes the thumbnails scroll and it lights up the active one

##### Consts:

- [dress, setDress] => useState that is utilized to store and rewrite current displayed product data
- [selctedIndex, setSelectedIndex] => use state that saves current selected index, utilized to properly sync/link embla with the lightbox
- [mainViewportRef, embla] => reference for embla main viewport, (not sure what it does it's an embla thing)
- [thumbViewportRef, emblaThumbs] => again some embla thing that is needed for the carousel to work, it's a thumbnail ref this time

#### Lightbox Stuff

##### Functions (and consts with arrow functions):

- currentIndex => this is a basic useEffect function. embla?.selectedScrollSnap is a function that returns current index from embla. Every time this index is changed useEffect updates the lightbox index accordingly
- lightboxIndex useEffect => this useEffect checks for changes in lightboxIndex and updates the embla index accordingly
- pictureSources => this is a function that generates an array of all picture sources that are avilable for embla carousel to be passed as a prop in lightbox
- scrollPrev/scrollNext => hook based solution for scrolling buttons with embla\

##### Consts:

- [open, setOpen] => useState that manages the open/closed state of the lightbox
- [lightboxIndex, setLightboxIndex] => useState that keeps track of index that lightbox should display the picture of. This also is later linked with embla selectedIndex using useEffect

##### Lightbox component Props:

- close => action that is triggered upon closing the component
- slides => array of all paths that components needs to display
- index => index at which the lightbox should be opened
- styles => basic styles for the component
- on => this forces the lightboxIndex useState to update on view so that embla carousel can scroll in the background
- plugins => any additional plugins used with the component
- zoom => setting for the zoom plugin

#### Image Component

Props:

- src => dymanic image path so that all images can be displayed via a loop
- placeholder => type of a placeholder effect utilized for the image
- blurDataURL => path for a smaller resolution picture of a dress to be blurred and displayed before a regular image could be downloaded
- onClick => onClick effect that opens the lightbox

### Thumbnails

## Footer

Component responsible for displaying the footer

## FormikFiltering

Component that utilizies query strings along with formik to fitler the results according to users needs <br />

##### Props:

- products => Array with all of the products/dresses information
- galleryItems => Array with all of the dresses types
- dressColors => Array with all of the dresses colors

##### Functions / consts:

- getTypeCount => takes all items as an input and a dress type, counts how many items there are of a selected type
- getColorCount => takes all items as an input and a dress color, counts how many items there are of a selected color
- getFilteredTypes => takes currently displayed items and applies a filter, only items of a chosen type are selected, filtered items are returned as an array
- getFilteredColors => takes currently displayed items and applies a filter, only items of a chosen color are selected, filtered items are returned as an array
- autoSave => automatically saves formik filtering filed results 500ms after making a change so that no select button is needed, function is triggered automatically with useEffect
- hasMounted/setHasMounted => useState used to properly check if the page has already mounted so that a hydration issue can be avoided
- prices => array of prices that is fed into the formik filterring price field
- initialValues => array of initial values for formik Filtering

## GalleryPicture

## GradientUnderline

The Pink gradient underline utilized to devide content from footer

## Head

It's a head

## Navbar

Displays the proper navbar component according tot he device width

## OutsideAlerter

Detects clicks outside the div for the mobile onClick overlay in product page dress pictures to work

## ScrollUpButton

A small button that always scrolls user to the top of the page

## Size Selector

Now not utilized component that allowed for changing product page image size on toggle

## Title

The logo utilized on the top of the page

## WidthCheck

Basic component that checks the width of the screen and creates booleans that can be used to create responsive desing with emotion

## Wrappers

### BodyWrapper

Wrapper for the body of a page it consists of a head, navbar, footer, scroll up button and it's children are wrapped in <main> component which has a fixed width

### BodyWrapperNoMain

Wrapper for the body of a page it consists of a head, navbar, footer, scroll up button and it's children are not wrapped in <main> component and do not have a fixed width

### FormikFilteringWrapper

This is formik filtering wrapper it allows responsive desing for the Formik Filtering Component Sticky on desktop and in sidebar on mobile.
Wrapper utilizes breakpoint from WidthCheck component to check whick version to display(mobile or desktop). Mobile version utilized useState to open and close the hamburger menu.

- isOpen - value of the useState either true(menu open) or false (menu closed)
- setIsOpen- function utilized to set the value of useState

### ImageWrapper

Basic wrapper used for all of the images

### ProductGalleryWrapper

Wrapper for the whole product gallery that hides the navbar button so that hamburger menu can be used with formik
