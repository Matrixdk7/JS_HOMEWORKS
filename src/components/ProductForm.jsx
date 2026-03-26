import React from "react";
import { useFormik } from "formik";
import validationSchema from "./validation.js";
import FormField from "./FormField.jsx";
import { Button, Form, Row, Col } from "react-bootstrap";
import "./ProductForm.scss";
import PropTypes from "prop-types";

const ProductForm = ({ onAddProduct }) => {

    const productForm = useFormik({
        initialValues: {
            name: "",
            description: "",
            price: "",
            discountPrice: "",
            category: "",
            brand: "",
            article: "",
            count: "",
            mainImageUrl: "",
            secondaryImageUrl: "",
            active: false,
            inStock: false,
            onMainPage: false,
        },
        validationSchema,
        validateOnMount: true,
        onSubmit: (values) => {
            onAddProduct({ ...values, id: Date.now() });
            productForm.resetForm();
        },
    });

    const { handleSubmit, handleReset, values, handleChange } = productForm;

    return (
        <div className="form-container p-3 border rounded bg-light">
            <h3 className="mb-3">Add product</h3>
            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col md={6}>
                        <FormField label="Name" name="name" formik={productForm} />
                        <FormField label="Description" name="description" formik={productForm} />
                        <FormField label="Price" name="price" type="number" formik={productForm} />
                        <FormField label="Discount Price" name="discountPrice" type="number" formik={productForm} />
                        <FormField label="Category" name="category" formik={productForm} />
                        <FormField label="Brand" name="brand" formik={productForm} />
                    </Col>
                    <Col md={6}>
                        <FormField label="Article / SKU" name="article" formik={productForm} />
                        <FormField label="Count" name="count" type="number" formik={productForm} />
                        <FormField label="Main Image URL" name="mainImageUrl" formik={productForm} />
                        <FormField label="Second Photo URL" name="secondaryImageUrl" formik={productForm} />

                        <Form.Check
                            type="checkbox"
                            label="Active"
                            name="active"
                            checked={values.active}
                            onChange={handleChange}
                            className="mb-2"
                        />
                        <Form.Check
                            type="checkbox"
                            label="In Stock"
                            name="inStock"
                            checked={values.inStock}
                            onChange={handleChange}
                            className="mb-2"
                        />
                        <Form.Check
                            type="checkbox"
                            label="On Main Page"
                            name="onMainPage"
                            checked={values.onMainPage}
                            onChange={handleChange}
                            className="mb-3"
                        />
                    </Col>
                </Row>
                <Button type="submit" variant="primary" className="me-2">
                    Create Product
                </Button>
                <Button type="button" variant="secondary" onClick={handleReset}>
                    Clear Form
                </Button>
            </Form>
        </div>
    );
};

ProductForm.propTypes = {
    onAddProduct: PropTypes.func.isRequired,
};

export default ProductForm;