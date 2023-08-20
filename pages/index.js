import React from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  useBreakpointValue,
} from "@chakra-ui/react";

import Head from "next/head";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import { ImBasecamp } from "react-icons/im";
import helpers from "../helpers";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../context/auth";
import Image from "next/image";
import { logo } from "../assets/list";

export default function Login() {
  const [isLoading, setIsLoading] = React.useState(false);
  const authContext = React.useContext(AuthContext);
  const router = useRouter();

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
      password: "",
    },

    onSubmit: async (values) => {
      setIsLoading(true);
      try {
        const res = await helpers.login(values).then((data) => {
          if (data.name === "AxiosError") {
            notify("Wrong email or password", "error");
          } else {
            notify("Authentication successful!", "success");
            authContext.setUserAuthInfo(data.data.token);
            console.log("saving credentials...", data.data.data);
            authContext.setUserDetails(data.data.data);
            router.push("/app");
          }
        });
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    },
  });

  return (
    <>
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("#0B0E11", "gray.800")}
      >
        <ToastContainer />

        <Stack
          spacing={4}
          mx={"auto"}
          w={{ base: "100%", md: "550px" }}
          py={12}
          px={6}
          // bg="red"
        >
         
          <Box
            rounded={"0"}
            // bg={useColorModeValue("white", "gray.700")}
            // boxShadow={"lg"}
            w={{ base: "100%", md: "100%" }}
            p={8}
          >
            <form onSubmit={formik.handleSubmit}>
              <Text
                textTransform="uppercase"
                letterSpacing="3px"
                color="yellow.500"
                textAlign="center"
                mb={10}
              >
                IQ Value Investments Admin Login
              </Text>
              <Stack spacing={4}>
                <FormControl id="email">
                  <FormLabel fontWeight="normal" color="white">
                    Email address
                  </FormLabel>
                  <Input
                    type="email"
                    p={"6"}
                    id="email"
                    name="email"
                    // rounded={0}
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    color="white"
                    borderColor={"gray.700"}
                  />
                </FormControl>
                <FormControl id="password">
                  <FormLabel fontWeight="normal" color="white">
                    Password
                  </FormLabel>
                  <Input
                    type="password"
                    p={6}
                    id="password"
                    name="password"
                    // rounded={0}
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    color="white"
                    borderColor={"gray.700"}
                  />
                </FormControl>
                <Stack spacing={10}>
                  <Button
                    colorScheme={"yellow"}
                    // rounded={0}
                    fontWeight="normal"
                    type="submit"
                    mt={6}
                    p={6}
                    isLoading={isLoading}
                    // h={10}
                  >
                    Log in
                  </Button>
                </Stack>
                <br />
                <Link
                  color={"yellow.400"}
                  _hover={{ textDecoration: "none" }}
                  href="/forgot-password"
                >
                  Forgot password?
                </Link>
              </Stack>
            </form>
          </Box>
        </Stack>
      </Flex>
    </>
  );
}
