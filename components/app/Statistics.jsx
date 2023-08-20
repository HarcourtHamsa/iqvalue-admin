import {
  Box,
  chakra,
  Flex,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { BsSafe2Fill, BsServer, BsPeopleFill, BsCoin } from "react-icons/bs";
import { FiServer } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import helpers from "../../helpers";
import React from "react";

function StatsCard(props) {
  const { title, stat, icon } = props;
  return (
    <Stat
      px={{ base: 2, md: 4 }}
      py={"5"}
      // shadow={"xl"}
      //   border={"1px solid"}
      // borderColor={useColorModeValue("gray.800", "gray.500")}
      rounded={"md"}
      bg="facebook.500"
      color="white"
      borderWidth={1}
      borderColor="gray.700"
    >
      <Flex justifyContent={"space-between"}>
        <Box pl={{ base: 2, md: 4 }}>
          <StatLabel fontWeight={"medium"} isTruncated>
            {title}
          </StatLabel>
          <StatNumber fontSize={"2xl"} fontWeight={"medium"}>
            {stat}
          </StatNumber>
        </Box>
        <Box
          my={"auto"}
          color={useColorModeValue("gray.800", "gray.200")}
          alignContent={"center"}
        >
          {icon}
        </Box>
      </Flex>
    </Stat>
  );
}

export default function Statistics() {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    async function fetchUsers() {
      await helpers
        .getAllUsers()
        .then((data) => setUsers(data.data))
        .catch((error) => console.log(error));
    }

    fetchUsers();
  }, []);

  return (
    <Box maxW="7xl" mx={"auto"} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
        <StatsCard
          title={"Total Users"}
          stat={`${users?.length}`}
          icon={<BsPeopleFill size={"3em"} color="white" />}
        />
        <StatsCard
          title={"Total Amount Invested"}
          stat={`$0`}
          icon={<BsCoin size={"3em"} color="white" />}
        />
        <StatsCard
          title={"Total Verified"}
          stat={`0`}
          icon={<BsSafe2Fill size={"3em"} color="white" />}
        />
      </SimpleGrid>
    </Box>
  );
}
