import React from 'react'
import { useRouter } from "next/router";

//Formik and mui
import styles from "./formik_filtering.module.css"
import { Formik,Form,Field } from "formik";
import {Paper, Grid} from "@material-ui/core"
import {InputLabel,MenuItem,FormControl,Select, SelectChangeEvent} from "@mui/material"
import { getProductCount } from '../../lib/products';


function getCount(style){
  const count=getProductCount(style)
  return (count)
}
export default function Formik_Filtering({galleryItems}) {

    //DATA FETCHING FROM A SERVER

    //ROUTER
    const { query }= useRouter();
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
        {({values}) => (
          <Form>
            <Paper className={styles.paper} elevation={5}>
              <Grid container spacing={3}>
              <Grid item xs={12} sm={5}> 
                <FormControl fullWidth variant="outlined">
                 <InputLabel id="search-style"><>Styl</></InputLabel>
                 <Field 
                 name = "style" 
                 as={Select}
                 labelId="search-style"
                 label="Style"
                 >
                    <MenuItem value="all">
                      <em>Wszystkie style</em>
                    </MenuItem>
                   {galleryItems.map((item,index) =>(
                   
                    <MenuItem key={index} value={item}>
                        {/* { `${item}  (${getCount(item)})` } */} 
                        {item}
                    </MenuItem>
                   ))} 
                  </Field>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={5}> Kolor </Grid>
              <Grid item xs={12} sm={5}>                 
              <FormControl fullWidth variant="outlined">
                 <InputLabel id="search-minPrice"><>Minimalna cena</></InputLabel>
                 <Field 
                 as={Select}
                 name = "minPrice" 
                 labelId="search-minPrice"
                 label="MinPrice"
                 >
                    <MenuItem value="all">
                      <em>Brak ceny minimalnej</em>
                    </MenuItem>
                   {prices.map((price, key) =>(
                    <MenuItem value={price} key={key}>{price}</MenuItem>
                   ))} 
                  </Field>
                </FormControl></Grid>
              <Grid item xs={12} sm={5}>  
              <FormControl fullWidth variant="outlined">
                 <InputLabel id="search-maxPrice">Maksymalna cena</InputLabel>
                 <Field 
                 as={Select}
                 name = "maxPrice" 
                 labelId="search-maxPrice"
                 label="MaxPrice"
                 >
                    <MenuItem value="all">
                      <em>Brak ceny maksymalnej</em>
                    </MenuItem>
                   {prices.map((price, key) =>(
                    <MenuItem value={price} key={key}>{price}</MenuItem>
                   ))} 
                  </Field>
                </FormControl></Grid>
              </Grid>
            </Paper>
          </Form>
        )}
        </Formik>

        {/* <ReactQueryDevtools initialIsOpen={false} /> */}

    </>
  )
}
