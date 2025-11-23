"use client";
import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import {
  TextField,
  Button,
  Typography,
  Box,
  Snackbar,
  Alert,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

const BookingSchema = Yup.object().shape({
  name: Yup.string()
    .required("Enter name")
    .min(3, "Name must be at least 3 characters")
    .max(50, "Name is too long"),
  email: Yup.string().email("Invalid email").required("Enter email"),
  date: Yup.date().required("Select a date"),
  comment: Yup.string().max(500, "Comment is too long"),
});

export default function CamperForm() {
  const [open, setOpen] = React.useState(false);

  return (
    <Box
      maxWidth={641}
      borderRadius="10px"
      sx={{ padding: "44px 57px", border: "1px solid #dadde1" }}
      width="100%"
    >
      <Typography variant="h3" sx={{ marginBottom: 1 }}>
        Book your campervan now
      </Typography>

      <Typography
        variant="body2"
        color="textSecondary"
        sx={{ marginBottom: 3 }}
      >
        Stay connected! We are always ready to help you.
      </Typography>

      <Formik
        initialValues={{ name: "", email: "", date: null, comment: "" }}
        validationSchema={BookingSchema}
        onSubmit={(values, { resetForm }) => {
          console.log("Submitted:", values);
          setOpen(true);
          resetForm();
        }}
      >
        {({ errors, touched, handleChange, setFieldValue, values }) => (
          <Form>
            <Box display="flex" flexDirection="column" gap="14px">
              <TextField
                name="name"
                label="Name *"
                onChange={handleChange}
                error={touched.name && Boolean(errors.name)}
                helperText={touched.name && errors.name}
                fullWidth
              />

              <TextField
                name="email"
                label="Email *"
                onChange={handleChange}
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
                fullWidth
              />

              <DatePicker
                label="Booking date *"
                value={values.date}
                onChange={(value) => setFieldValue("date", value)}
                minDate={dayjs()}
                showDaysOutsideCurrentMonth
                slotProps={{
                  textField: {
                    error: touched.date && Boolean(errors.date),
                    helperText: touched.date && errors.date,
                  },
                }}
              />

              <TextField
                name="comment"
                label="Comment"
                multiline
                minRows={3}
                onChange={handleChange}
                fullWidth
              />

              <Box display="flex" justifyContent="center" marginTop="10px">
                <Button
                  variant="contained"
                  type="submit"
                  size="medium"
                  sx={{
                    width: "100%",
                    maxWidth: "166px",
                  }}
                >
                  Send
                </Button>
              </Box>
            </Box>
          </Form>
        )}
      </Formik>

      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={() => setOpen(false)}
      >
        <Alert severity="success" variant="filled">
          Booking successful!
        </Alert>
      </Snackbar>
    </Box>
  );
}
