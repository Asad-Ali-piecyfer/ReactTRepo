import * as React from "react";

import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import { useParams } from "react-router-dom";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useForm } from "react-hook-form";
import InputElement from "../elements/input.element";
import { VALIDATION_CONFIG } from "../../config/validation.config";
import DatePickerElement from "../elements/datePicker.element";
import { Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  addProductToList,
  updateProductData,
} from "../../actions/productAction";
import useNavigation from "../../hooks/useNavigation";
import { UtilHelper } from "../../helpers/util.helper";
import { useEffect } from "react";

const ProductComponent = () => {
  const {
    control,
    watch,
    handleSubmit,
    setValue,
    formState: { errors, isValid },
  } = useForm({ mode: "all" });

  const dispatch = useDispatch();

  const products = useSelector((state) => state.products.products);

  const { push } = useNavigation();

  let { id } = useParams();

  useEffect(() => {
    if (id) {
      getProductsData();
    }
  }, []);

  const getProductsData = () => {
    const productData = products.find((product) => product.id === id);
    console.log({ productData });
    if (productData) {
      Object.entries(productData).map((data) => {
        if (data[0] !== "id") {
          setValue(data[0], data[1], { shouldValidate: true });
        }
      });
    } else {
      push("/");
    }
  };

  const onSubmit = async (data, event) => {
    event.preventDefault();
    if (id) {
      dispatch(updateProductData(id, { ...data }));
      push(`/`);
    } else {
      dispatch(addProductToList({ ...data, id: UtilHelper.uuid() }));
      push(`/`);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          {id ? "Update Product" : "Add Product"}
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          sx={{ mt: 1 }}
        >
          <InputElement
            name="name"
            label="Product Name"
            required
            rules={{
              required: VALIDATION_CONFIG.required,
              minLength: VALIDATION_CONFIG.minLengthName,
            }}
            control={control}
            errors={errors}
          />
          <InputElement
            name="description"
            label="Product Description"
            type="text"
            multiline
            minRows={3}
            maxRows={5}
            required
            rules={{
              required: VALIDATION_CONFIG.required,
              minLength: VALIDATION_CONFIG.minLengthText,
              maxLength: VALIDATION_CONFIG.maxLengthShortText,
            }}
            control={control}
            errors={errors}
          />
          <InputElement
            name="price"
            label="Product Price"
            type="number"
            required
            rules={{
              required: VALIDATION_CONFIG.required,
              min: VALIDATION_CONFIG.minAmount,
              pattern: VALIDATION_CONFIG.numeric,
            }}
            control={control}
            errors={errors}
          />
          <Grid marginTop={"1rem"}>
            <DatePickerElement
              name="inventoryDate"
              label="Inventory date"
              required
              rules={{
                required: VALIDATION_CONFIG.required,
              }}
              control={control}
              errors={errors}
              disablePast
            />
          </Grid>
          <Button
            disabled={!isValid}
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            {id ? "Update" : "Add"}
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default ProductComponent;
