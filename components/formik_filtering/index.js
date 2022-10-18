import React from 'react'
import { useRouter } from "next/router";
import { useState,useEffect } from 'react';
import axios from 'axios';
//Formik and mui
import styles from "components/formik_filtering/formik_filtering.module.css"
// import styles from "./formik_filtering.module.css"
import { Formik,Form,Field } from "formik";
import {Paper, Grid, makeStyles} from "@material-ui/core"
import {InputLabel,MenuItem,FormControl,Select, SelectChangeEvent} from "@mui/material"
import { getSortedProductsData } from '../../lib/products';
import { getProductCount } from '../../lib/products';

// const useStyles= makeStyles((theme)=>({
//   paper:{
//     margin: "auto",
//     maxWidth: 500,
//     padding: theme.spacing(3)
//     }
// }))


export default function Formik_Filtering({galleryItems}) {
// console.log("product count", getProductCount("Maxi"))  
    //STYLES
    // const styles= useStyles()

    //DATA FETCHING FROM A SERVER
    const products = getSortedProductsData()
    //ROUTER
    const {query}= useRouter()
    const initialValues = {
      style: query.style || "all",
      model: query.model || "all",
      minPrice: query.minPrice || "all",
      maxPrice: query.maxPrice || "all",

    }
  const prices=[90,100,120,140,160,180,200]


  return (
    <>

        <Formik initialValues={initialValues} onSubmit={()=>{}}>
        {({values})=>(
          <Form>
            <Paper class={styles.paper} elevation={5}>
              <Grid container spacing={3}>
              <Grid item xs={12} sm={5}> 
                <FormControl fullWidth>
                 <InputLabel id="search-style">Styl</InputLabel>
                 <Field 
                 as={Select}
                 name = "style" 
                 labelId="search-style"
                 label="Style"
                 >
                    <MenuItem value="all">
                      <em>Wszystkie style</em>
                    </MenuItem>
                   {galleryItems.map(item =>(
                    <MenuItem value={item}>
                        {item}  {`(${getProductCount(item)})`}
                 
                    </MenuItem>
                   ))} 
                  </Field>
                 {/* </Select> */}
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={5}> Kolor </Grid>
              <Grid item xs={12} sm={5}>                 
              <FormControl fullWidth>
                 <InputLabel id="search-minPrice">Minimalna cena</InputLabel>
                 <Field 
                 as={Select}
                 name = "minPrice" 
                 labelId="search-minPrice"
                 label="MinPrice"
                 >
                    <MenuItem value="all">
                      <em>Brak ceny minimalnej</em>
                    </MenuItem>
                   {prices.map(price =>(
                    <MenuItem value={price}>
                      {price}  
                 
                    </MenuItem>
                   ))} 
                  </Field>
                 {/* </Select> */}
                </FormControl></Grid>
              <Grid item xs={12} sm={5}> Maksymanla cena</Grid>
              </Grid>
            </Paper>
          </Form>
        )}
        </Formik>
    </>
  )
}
