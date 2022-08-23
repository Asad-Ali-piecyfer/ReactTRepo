import * as React from "react";

import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";

import Container from "@mui/material/Container";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { CardHeader, TableCell, TableRow } from "@mui/material";
import Grid from "@mui/material/Grid";
import CustomTableElement from "../elements/custom.table.element";
import useNavigation from "../../hooks/useNavigation";
import { useDispatch, useSelector } from "react-redux";
import { UtilHelper } from "../../helpers/util.helper";
import { deleteProductData } from "../../actions/productAction";
const ProductAllComponent = () => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products.products);

  const { push } = useNavigation();

  const deleteProduct = (id) => {
    dispatch(deleteProductData(id));
  };

  let tableColumns = [
    "Name",
    "Description",
    "Price",
    "Inventory Date",
    "Action",
  ];

  return (
    <Container style={{ height: "100%", width: "100%", position: "relative" }}>
      <CssBaseline />

      <Box>
        <Grid sx={{ mt: 3, mb: 2 }} display="flex" flexDirection="row-reverse">
          <Grid item paddingRight="20px">
            <Button
              type="button"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={() => {
                push(`product`);
              }}
            >
              Add Product
            </Button>
          </Grid>
        </Grid>

        <CardHeader title="Products" />
        <CustomTableElement columns={tableColumns}>
          {products?.map((row, index) => (
            <TableRow
              className="sessionRow"
              key={row.id}
              sx={{
                "&:last-child td, &:last-child th": {
                  border: 0,
                },
              }}
            >
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.description}</TableCell>
              <TableCell>{row.price}</TableCell>
              <TableCell>{UtilHelper.formatDate(row.inventoryDate)}</TableCell>
              <TableCell>
                <Button
                  type="button"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={() => {
                    push(`product/${row.id}`);
                  }}
                >
                  Edit
                </Button>
                <Button
                  type="button"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={() => {
                    deleteProduct(row.id);
                  }}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </CustomTableElement>
      </Box>
    </Container>
  );
};

export default ProductAllComponent;
