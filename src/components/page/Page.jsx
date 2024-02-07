import { Container } from "@mui/material";
import React from "react";

const Page = (props) => {
  const { children, ...other } = props;
  return (
    <Container maxWidth={false} {...other}>
      {children}
    </Container>
  );
};

export default Page;
