import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import DashboardWrapper from "../../components/app/DashboardWrapper";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Text,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Box,
} from "@chakra-ui/react";
import helpers from "../../helpers";

function History() {
  const [transactions, setTransactions] = useState([]);
  const [userID, setUserID] = useState("");
  const [loading, setLoading] = useState(true);

  const { query } = useRouter();
  // setUserID(query._id);

  useEffect(() => {
    async function getTx() {
      await helpers
        .getTransactions(query._id)
        .then((data) => setTransactions(data?.data?.data.withdrawals))
        .then(() => setLoading(false));
    }

    getTx();
  }, []);

  return (
    <div>
      <DashboardWrapper>
        <Text fontSize="2xl" mb={4} color="white">
          Transaction History
        </Text>

        {loading ? (
          <Text textAlign="center" color="white" my={6}>
            Fetching data...
          </Text>
        ) : (
          <Box h={"fit-content"}>
            <TableContainer>
              <Table variant="striped">
                <Thead bgColor="blackAlpha.400" borderBottom={0}>
                  <Tr borderBottom={0}>
                    <Th
                      textTransform="capitalize"
                      fontFamily="inherit"
                      // fontSize="1rem"
                      color="white"
                      fontWeight="normal"
                    >
                      Amount
                    </Th>
                    <Th
                      textTransform="capitalize"
                      fontFamily="inherit"
                      // fontSize="1rem"
                      color="white"
                      fontWeight="normal"
                    >
                      Status
                    </Th>
                    <Th
                      textTransform="capitalize"
                      fontFamily="inherit"
                      // fontSize="1rem"
                      color="white"
                      fontWeight="normal"
                    >
                      {" "}
                      Payment Method
                    </Th>
                    <Th
                      textTransform="capitalize"
                      fontFamily="inherit"
                      // fontSize="1rem"
                      color="white"
                      fontWeight="normal"
                    >
                      {" "}
                      Wallet Address
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {transactions?.map((tx) => {
                    return (
                      <Tr key={Math.random()}>
                        <Td>${tx?.amount}</Td>
                        <Td>pending</Td>
                        <Td>{tx?.method}</Td>
                        <Td>{tx?.address}</Td>
                      </Tr>
                    );
                  })}
                </Tbody>
              </Table>
            </TableContainer>
          </Box>
        )}
      </DashboardWrapper>
    </div>
  );
}

export default History;
