import React from "react";
import DashboardWrapper from "../../components/app/DashboardWrapper";
import FloatingButton from "../../components/FloatingButton";
import {
  Box,
  SimpleGrid,
  Stack,
  Stat,
  useColorModeValue,
  StatLabel,
  StatNumber,
  Divider,
  VStack,
  Text,
  Heading,
  Button,
} from "@chakra-ui/react";
import WithAuth from "../../HOCs/WithAuth";
function Settings() {
  return (
    <div>
      <DashboardWrapper>
        <Box maxW="7xl" mx={"auto"} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
          <Text
            fontSize={{ base: "2xl", sm: "4xl", md: "2xl" }}
            lineHeight={"110%"}
            fontWeight="black"
          >
            Basic info
          </Text>
          <Text color={"gray.600"} mb={2}>
            Personal info and options to manage it.
          </Text>
          <Box
          // px={{ base: 2, md: 4 }}
          // py={"5"}
          // shadow={"xl"}
          //   border={"1px solid"}
          // borderColor={useColorModeValue("gray.800", "gray.500")}
          // rounded={"lg"}
          // bg="white"
          >
            <Stack
              p={3}
              py={3}
              justifyContent={{
                base: "flex-start",
                md: "space-between",
              }}
              direction={{
                base: "row",
                md: "row",
              }}
              alignItems={{ md: "center" }}
            >
              <Text color={"gray.600"}>First Name</Text>
              <Text> Hamsa</Text>
            </Stack>

            <Stack
              p={3}
              py={3}
              justifyContent={{
                base: "flex-start",
                md: "space-between",
              }}
              direction={{
                base: "row",
                md: "row",
              }}
              alignItems={{ md: "center" }}
            >
              <Text color={"gray.600"}>Last Name</Text>
              <Text>Harcourt </Text>
            </Stack>

            <Stack
              p={3}
              py={3}
              justifyContent={{
                base: "flex-start",
                md: "space-between",
              }}
              direction={{
                base: "row",
                md: "row",
              }}
              alignItems={{ md: "center" }}
            >
              <Text color={"gray.600"}>Email</Text>
              <Text>elvis@gmail.com</Text>
            </Stack>

            <Stack
              p={3}
              py={3}
              justifyContent={{
                base: "flex-start",
                md: "space-between",
              }}
              direction={{
                base: "row",
                md: "row",
              }}
              alignItems={{ md: "center" }}
            >
              <Text color={"gray.600"}>Country</Text>
              <Text>Australia</Text>
            </Stack>
          </Box>
        </Box>
      </DashboardWrapper>

      <FloatingButton />
    </div>
  );
}

export default (Settings);
