import React, { useState } from "react";
import {
  Flex,
  Box,
  Text,
  Stack,
  FormControl,
  Button,
  FormLabel,
  Input,
  Alert,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import helpers from "../helpers";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../context/auth";
import Image from "next/image";
import { logo } from "../assets/list";

function Verify() {
  return (
    <div>
      <Flex w="full" h="100vh" justifyContent="center" alignItems="center">
        <Box w={{ base: "fit-content", md: "400px" }} h="300px" p={"12px 25px"}>
          <Stack align={"center"}>
            <Image src={logo} alt="" />
          </Stack>

          <Text
            my={10}
            textAlign="center"
            letterSpacing="3px"
            color="yellow.400"
          >
            RESET PASSWORD
          </Text>

          <Box textAlign="center">
            <Text>
              We sent an email to you. Just click on the link in that email to
              reset your password. If you don&apos;t see it, you may need to check
              your spam folder
            </Text>
          </Box>
        </Box>
      </Flex>
    </div>
  );
}

export default Verify;
