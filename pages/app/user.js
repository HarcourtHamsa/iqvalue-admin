import { useRouter } from "next/router";
import React from "react";
import DashboardWrapper from "../../components/app/DashboardWrapper";
import FloatingButton from "../../components/FloatingButton";
import {
  Stack,
  Button,
  Box,
  FormLabel,
  FormControl,
  Flex,
  useColorModeValue,
  Input,
  HStack,
  Select,
  Avatar,
} from "@chakra-ui/react";
import { ToastContainer, toast } from "react-toastify";
import { useFormik } from "formik";
import "react-toastify/dist/ReactToastify.css";
import helpers from "../../helpers";

function User() {
  const { query } = useRouter();
  console.log(query);

  const [isLoading, setIsLoading] = React.useState(false);
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
      email: query.email,
      _id: query._id,
      firstName: query.firstName,
      lastName: query.lastName,
      amountDeposited: query.amountDeposited,
      balance: query.balance,
      profit: query.profit,
      referalBonus: query.referalBonus,
      verified: query.verified,
      isDisabled: query.isDisabled,
    },

    onSubmit: async (values) => {
      setIsLoading(true);

      try {
        console.log(values);
        const res = await helpers
          .updateUser(values, query.email)
          .then((data) => {
            if (data.name === "AxiosError") {
              notify("Oops something went wrong", "error");
            } else {
              notify("Success: Changes updated!", "success");
              router.push("/app/users");
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
    <div>
      <DashboardWrapper>
        <Flex
          minH={"100vh"}
          align={"center"}
          justify={"center"}
          bg={useColorModeValue("transparent", "gray.800")}
        >
          <ToastContainer />

          <Stack spacing={4} mx={"auto"} w={"lg"} py={3} px={2}>
            <Stack align={"center"} mb={"-10"}>
              <Avatar size={"lg"} />
            </Stack>
            <Box
              rounded={"0"}
              bg={useColorModeValue("white", "gray.700")}
              // boxShadow={"lg"}
              w={{ base: "100%", md: "100%" }}
              p={8}
            >
              <form onSubmit={formik.handleSubmit}>
                <Stack spacing={4}>
                  <FormControl id="email">
                    <FormLabel fontWeight="normal">
                      Identification Number
                    </FormLabel>
                    <Input
                      type="text"
                      p={"6"}
                      id="_id"
                      name="_id"
                      onChange={formik.handleChange}
                      value={formik.values._id}
                      disabled
                    />
                  </FormControl>
                  <HStack>
                    <Box>
                      <FormControl id="firstName" isRequired>
                        <FormLabel>First Name</FormLabel>
                        <Input
                          type="text"
                          p={"6"}
                          id="firstName"
                          name="firstName"
                          onChange={formik.handleChange}
                          value={formik.values.firstName}
                        />
                      </FormControl>
                    </Box>
                    <Box>
                      <FormControl id="lastName">
                        <FormLabel>Last Name</FormLabel>
                        <Input
                          type="text"
                          p={"6"}
                          id="lastName"
                          name="lastName"
                          onChange={formik.handleChange}
                          value={formik.values.lastName}
                        />
                      </FormControl>
                    </Box>
                  </HStack>

                  <FormControl id="email">
                    <FormLabel fontWeight="normal">Email address</FormLabel>
                    <Input
                      type="email"
                      p={"6"}
                      id="email"
                      name="email"
                      onChange={formik.handleChange}
                      value={formik.values.email}
                    />
                  </FormControl>
                  <HStack>
                    <Box>
                      <FormControl id="firstName" isRequired>
                        <FormLabel>Deposited</FormLabel>
                        <Input
                          type="text"
                          p={"6"}
                          id="amountDeposited"
                          name="amountDeposited"
                          onChange={formik.handleChange}
                          value={formik.values.amountDeposited}
                        />
                      </FormControl>
                    </Box>
                    <Box>
                      <FormControl id="lastName">
                        <FormLabel>Balance</FormLabel>
                        <Input
                          type="text"
                          p={"6"}
                          id="balance"
                          name="balance"
                          onChange={formik.handleChange}
                          value={formik.values.balance}
                        />
                      </FormControl>
                    </Box>
                  </HStack>
                  <HStack>
                    <Box>
                      <FormControl id="firstName" isRequired>
                        <FormLabel>Profit</FormLabel>
                        <Input
                          type="text"
                          p={"6"}
                          id="profit"
                          name="profit"
                          onChange={formik.handleChange}
                          value={formik.values.profit}
                        />
                      </FormControl>
                    </Box>
                    <Box>
                      <FormControl id="lastName">
                        <FormLabel>Ref. Bonus</FormLabel>
                        <Input
                          type="text"
                          p={"6"}
                          id="referalBonus"
                          name="referalBonus"
                          onChange={formik.handleChange}
                          value={formik.values.referalBonus}
                        />
                      </FormControl>
                    </Box>
                  </HStack>
                  <FormControl id="password">
                    <FormLabel fontWeight="normal">Verified</FormLabel>
                    <Select
                      placeholder="Select option"
                      id="verified"
                      name="verified"
                    >
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </Select>
                  </FormControl>
                  <Stack spacing={10}>
                    <Button
                      colorScheme={"yellow"}
                      fontWeight="normal"
                      type="submit"
                      mt={6}
                      p={6}
                      isLoading={isLoading}
                      rounded={0}
                      // h={10}
                    >
                      Save Changes
                    </Button>
                  </Stack>
                </Stack>
              </form>
            </Box>
          </Stack>
        </Flex>
      </DashboardWrapper>

      {/* <FloatingButton /> */}
    </div>
  );
}

export default User;
