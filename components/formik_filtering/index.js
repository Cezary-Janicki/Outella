import React from "react";
import router, { useRouter } from "next/router";
//Formik and mui
import styles from "./formik_filtering.module.css";
import { Formik, Form, Field } from "formik";
import { Paper, Grid } from "@material-ui/core";
import {
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  SelectChangeEvent,
  listItemClasses,
  Input,
  Button,
} from "@mui/material";
import { getProductCount } from "../../lib/products";

// function getCount(style){
//   const count=getProductCount(style)
//   return (count)
// } //this function doesnt work properly there is an issue with context there is a placeholder for now

export default function Formik_Filtering({
  products,
  galleryItems,
  dressColors,
  queryFilter,
}) {
  function getTypeCount(items, type) {
    let count = 0;
    const products = items;
    {
      products.map((dress, index) =>
        dress.tags.style === type &&
        (query.minPrice < dress.price || query.minPrice === "") &&
        (query.maxPrice > dress.price || query.maxPrice === "")
          ? count++
          : count
      );
    }
    return count;
  }

  function getColorCount(items, chosenColor) {
    let count = 0;
    const products = items;
    {
      products.map((dress, index) =>
        dress.tags.color === chosenColor &&
        (query.style === dress.tags.style || query.style === "all") &&
        (query.minPrice < dress.price || query.minPrice === "") &&
        (query.maxPrice > dress.price || query.maxPrice === "")
          ? count++
          : count
      );
    }
    return count;
  }

  //ROUTER
  const { query } = useRouter();

  const initialValues = {
    style: query.style || "all",
    color: query.color || "all",
    minPrice: query.minPrice || "",
    maxPrice: query.maxPrice || "",
  };

  return (
    <Formik
      enableReinitialize // Pass this to re-render on initialValues change
      initialValues={initialValues}
      onSubmit={(values) => {
        router.replace(
          {
            pathname: "/product_gallery",
            query: { ...values },
          },
          undefined,
          { shallow: true }
        );
      }}
    >
      {({ values }) => (
        <Form>
          <Paper className={styles.paper} elevation={5}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel id="search-style">Styl</InputLabel>
                  <Field
                    name="style"
                    as={Select}
                    labelId="search-style"
                    label="Style"
                  >
                    <MenuItem value="all">
                      <em>Wszystkie style</em>
                    </MenuItem>
                    {galleryItems.map((item, index) => (
                      <MenuItem key={index} value={item}>
                        {`${item}  (${getTypeCount(products, item)})`}
                      </MenuItem>
                    ))}
                  </Field>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel id="search-color">Kolor</InputLabel>
                  <Field
                    name="color"
                    as={Select}
                    labelId="search-color"
                    label="Color"
                  >
                    <MenuItem value="all">
                      <em>Wszystkie Kolory</em>
                    </MenuItem>
                    {dressColors.map((item, index) => (
                      <MenuItem key={index} value={item}>
                        {`${item}  (${getColorCount(products, item)})`}
                      </MenuItem>
                    ))}
                  </Field>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel id="search-minPrice">
                    <>Minimalna cena</>
                  </InputLabel>
                  <Field
                    as={Input}
                    name="minPrice"
                    labelId="search-minPrice"
                    label="MinPrice"
                  ></Field>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel id="search-maxPrice">Maksymalna cena</InputLabel>
                  <Field
                    as={Input}
                    name="maxPrice"
                    labelId="search-maxPrice"
                    label="MaxPrice"
                  ></Field>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  onClick={queryFilter}
                >
                  Search with on Click
                </Button>
                {/* <button onClick={() => window.location.reload(false)}>Click to reload!</button> */}
                <Button type="submit" variant="contained" fullWidth>
                  Search without on Click
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Form>
      )}
    </Formik>
  );
}
