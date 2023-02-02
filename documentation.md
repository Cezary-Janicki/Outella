# Components

## Bestsellers

Components that displays the 3 "bestseller" dresses on the main page

## ClientOnly

Component used to check if the site has mounted properly to avoid hydration errors

## DressesTypes

Component that displays 5 images that all directly link to the product gallery

## EmblaCarousel

Embla carousel is the image carousel that is displayed in the page, it utilizes a 3rd party repository to display the lightbox

## Footer

Component responsible for displaying the footer

## FormikFiltering

Component that utilizies query strings along with formik to fitler the results according to users needs

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
