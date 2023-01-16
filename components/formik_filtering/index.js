/** @jsxImportSource @emotion/react */

//React components
import { css } from "@emotion/react";
import React from "react";
import router, { useRouter } from "next/router";
import PropTypes from "prop-types";
//Formik and mui
import { Formik, Form, Field, useFormikContext } from "formik";
import { Grid } from "@material-ui/core";
import {
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Input,
  Button,
} from "@mui/material";
import debounce from "just-debounce-it";
import { useEffect, useState } from "react";
function Formik_Filtering({
  products,
  galleryItems,
  dressColors,
  queryFilter,
  setIsOpen,
}) {
  function getTypeCount(items, type) {
    let count = 0;
    const products = items;
    {
      products.map((dress) =>
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
      products.map((dress) =>
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
  const prices = [
    "100",
    "120",
    "140",
    "160",
    "180",
    "200",
    "220",
    "240",
    "260",
    "280",
    "300",
  ];
  const initialValues = {
    style: query.style || "all",
    color: query.color || "all",
    minPrice: query.minPrice || "",
    maxPrice: query.maxPrice || "",
  };

  // This function filters dress colors/types so that when filters are applied only colors/types that match the filters are shown
  const filteredTypes = galleryItems.filter(
    (item) => getTypeCount(products, item) > 0
  );

  const filteredColors = dressColors.filter(
    (item) => getColorCount(products, item) > 0
  );

  const AutoSave = () => {
    const formik = useFormikContext();
    let debounceMs = 500; // time it takes for the request to be sent
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const debouncedSubmit = React.useCallback(
      //use callback caches the debounce function between re-renders
      debounce(() => formik.submitForm(), debounceMs),
      [debounceMs, formik.submitForm]
    );
    // debounce makes sure that the submitForm gets triggered only once and after the debounceMs period
    // additional arguments trigger the debouncedSubmit to reload tbh im not sure it is needed
    React.useEffect(() => {
      if (formik.values !== formik.initialValues && formik.dirty)
        debouncedSubmit();
    }, [debouncedSubmit, formik.dirty, formik.initialValues, formik.values]);

    return null;
  };
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);

  return (
    <>
      {hasMounted === true ? (
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
          {() => (
            <Form>
              {/* <Paper */}
              <div
                css={css`
                  display: flex;
                  margin: auto;
                  padding: 3vh;
                  // box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
                `}
                elevation={0}
              >
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={3}>
                    <FormControl fullWidth variant="outlined">
                      <InputLabel id="search-style">Styl</InputLabel>
                      <Field
                        name="style"
                        as={Select}
                        labelid="search-style"
                        label="Style"
                        css={css`
                          background-color: white;
                        `}
                      >
                        <MenuItem value="all">
                          <em>Wszystkie style</em>
                        </MenuItem>
                        {filteredTypes.map((item, index) => (
                          <MenuItem key={index} value={item}>
                            {`${item}  (${getTypeCount(products, item)})`}
                          </MenuItem>
                        ))}
                      </Field>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={3}>
                    <FormControl fullWidth variant="outlined">
                      <InputLabel id="search-color">Kolor</InputLabel>
                      <Field
                        name="color"
                        as={Select}
                        labelid="search-color"
                        label="Color"
                        css={css`
                          background-color: white;
                        `}
                      >
                        <MenuItem value="all">
                          <em>Wszystkie Kolory</em>
                        </MenuItem>
                        {filteredColors.map((item, index) => (
                          <MenuItem key={index} value={item}>
                            {`${item}  (${getColorCount(products, item)})`}
                          </MenuItem>
                        ))}
                      </Field>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={2}>
                    <FormControl fullWidth variant="outlined">
                      <InputLabel id="search-minPrice">Cena od</InputLabel>

                      {/* <OutlinedInput
                        id="outlined-adornment-amount"
                        label="Amount"
                      /> */}
                      <Field
                        as={Select}
                        name="minPrice"
                        size="Large"
                        labelid="search-minPrice"
                        label="MinPrice"
                        css={css`
                          background-color: white;
                        `}
                      >
                        <MenuItem value="">
                          <em>Wszystkie ceny</em>
                        </MenuItem>
                        {prices.map((item, index) => (
                          <MenuItem key={index} value={item}>
                            {`${item}`}
                          </MenuItem>
                        ))}
                      </Field>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={2}>
                    <FormControl fullWidth variant="outlined">
                      <InputLabel id="search-maxPrice">Cena do</InputLabel>
                      <Field
                        as={Select}
                        name="maxPrice"
                        labelid="search-maxPrice"
                        label="MaxPrice"
                        css={css`
                          background-color: white;
                        `}
                      >
                        <MenuItem value="">
                          <em>Wszystkie ceny</em>
                        </MenuItem>
                        {prices.map((item, index) => (
                          <MenuItem key={index} value={item}>
                            {`${item}`}
                          </MenuItem>
                        ))}
                      </Field>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    {/* <Button
                      type="submit"
                      variant="contained"
                      fullWidth
                      onClick={() => {
                        queryFilter();
                        setIsOpen("false");
                      }}
                    >
                      Search
                    </Button> */}
                    <div
                      css={css`
                        display: flex;
                      `}
                    >
                      <Button
                        css={css`
                          justify-content: flex-end;
                          margin-left: auto;
                        `}
                        // type="reset"
                        onClick={() =>
                          router.replace({
                            query: {
                              style: "all",
                              color: "all",
                              minPrice: "",
                              maxPrice: "",
                            },
                          })
                        }
                      >
                        Wyczyść filtry
                      </Button>
                    </div>
                  </Grid>
                </Grid>
              </div>
              {/* </Paper> */}
              {/* <MyAutoSavingComponent /> */}
              <AutoSave />
            </Form>
          )}
        </Formik>
      ) : null}
    </>
  );
}
Formik_Filtering.propTypes = {
  galleryItems: PropTypes.array,
  dressColors: PropTypes.array,
  products: PropTypes.array,
  queryFilter: PropTypes.func,
  setIsOpen: PropTypes.func,
};

export default Formik_Filtering;
