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
  useColorModeValue,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import helpers from "../helpers";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../context/auth";
import Image from "next/image";
import { logo } from "../assets/list";
import { useRouter } from "next/router";

function forgotPassword() {
  const [isLoading, setIsLoading] = useState(false);
  const Router = useRouter();

  const notify = (msg, type) =>
    toast(msg, {
      type,
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: true,
    });

  const formik = useFormik({
    initialValues: {
      email: "",
    },

    onSubmit: async (values) => {
      setIsLoading(true);
      try {
        // code goes here
        console.log(values.email);
        const res = await helpers.forgotPassword(values.email).then((data) => {
          console.log(data);
          if (data?.name === "AxiosError") {
            notify("Error: Invalid email address", "error");
          } else {
            Router.push("/verify");
          }
        });
      } catch (error) {
        alert(error);
      } finally {
        setIsLoading(false);
      }
    },
  });
  return (
    <Flex 
    minH={"100vh"}
    align={"center"}
    justify={"center"}
    bg={useColorModeValue("#0B0E11", "gray.800")}>
      <ToastContainer />
      <Flex w="full" h="100vh" justifyContent="center" alignItems="center">
        <Box w={{ base: "fit-content", md: "400px" }} h="300px" p={"12px 25px"}>
         

          <Text
            textTransform="uppercase"
            letterSpacing="3px"
            color="yellow.500"
            textAlign="center"
            my={10}
          >
            Forgot password
          </Text>

          <form onSubmit={formik.handleSubmit}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel fontWeight="normal" color={"white"}>Email address</FormLabel>
                <Input
                  type="email"
                  p={"6"}
                  id="email"
                  name="email"
                  rounded={'lg'}
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
              </FormControl>

              <Button
                colorScheme={"yellow"}
                rounded={'lg'}
                fontWeight="normal"
                type="submit"
                mt={6}
                p={6}
                isLoading={isLoading}
                // h={10}
              >
                Forgot password
              </Button>
            </Stack>
          </form>
        </Box>
      </Flex>
    </Flex>
  );
}

export default forgotPassword;
