import React, { useState } from "react";
import DashboardWrapper from "../../components/app/DashboardWrapper";
import FloatingButton from "../../components/FloatingButton";
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
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Spinner,
} from "@chakra-ui/react";
import helpers from "../../helpers";
import { useRouter } from "next/router";

function Users() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = React.useState([]);
  const router = useRouter();

  const deleteUser = async (email) => {
    await helpers
      .deleteUser(email)
      .then(() => router.push("/app"))
      .catch((error) => console.log(error));
  };

  const blockUser = async (email) => {
    console.log("blocking email", email);
    await helpers
      .blockUser(email)
      .then(() => router.push("/app"))
      .catch((error) => console.log(error));
  };

  const unblockUser = async (email) => {
    console.log("unblocking email", email);
    await helpers
      .unblockUser(email)
      .then(() => router.push("/app"))
      .catch((error) => console.log(error));
  };

  React.useEffect(() => {
    setLoading(true);

    async function fetchUsers() {
      await helpers
        .getAllUsers()
        .then((data) => {
          setLoading(false);
          setUsers(data.data);
        })
        .catch((error) => console.log(error));
    }

    fetchUsers();
  }, []);
  return (
    <div>
      <DashboardWrapper>
        <Text fontSize="2xl" mb={4} color="white">
          Users Information
        </Text>

        {loading ? (
          <Text textAlign="center" color="white" my={6}>
            Fetching data...
          </Text>
        ) : (
          <TableContainer>
            <Table variant="striped" color="black" rounded={6}>
              <Thead bg="whiteAlpha.50" color="white">
                <Tr>
                  <Th
                    color="white"
                    textTransform={"capitalize"}
                    fontFamily="inherit"
                    fontWeight={"normal"}
                  >
                    First Name
                  </Th>
                  <Th
                    color="white"
                    textTransform={"capitalize"}
                    fontFamily="inherit"
                    fontWeight={"normal"}
                  >
                    Last Name
                  </Th>
                  <Th
                    color="white"
                    textTransform={"capitalize"}
                    fontFamily="inherit"
                    fontWeight={"normal"}
                  >
                    Email
                  </Th>
                  <Th
                    isNumeric
                    color="white"
                    textTransform={"capitalize"}
                    fontFamily="inherit"
                    fontWeight={"normal"}
                  >
                    Invested
                  </Th>
                  <Th
                    isNumeric
                    color="white"
                    textTransform={"capitalize"}
                    fontFamily="inherit"
                    fontWeight={"normal"}
                  >
                    Balance
                  </Th>
                  <Th
                    color="white"
                    textTransform={"capitalize"}
                    fontFamily="inherit"
                    fontWeight={"normal"}
                  >
                    Edit
                  </Th>
                  <Th
                    color="white"
                    textTransform={"capitalize"}
                    fontFamily="inherit"
                    fontWeight={"normal"}
                  >
                    Tx
                  </Th>
                  <Th
                    color="white"
                    textTransform={"capitalize"}
                    fontFamily="inherit"
                    fontWeight={"normal"}
                  >
                    Delete
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                {users?.map((user) => {
                  console.log(user.isDisabled);
                  return (
                    <Tr key={Math.random()}>
                      <Td>{user?.firstName}</Td>
                      <Td>{user?.lastName}</Td>
                      <Td>{user?.email}</Td>
                      <Td isNumeric>{user?.amountDeposited}</Td>
                      <Td isNumeric>{user?.balance}</Td>
                      <Td>
                        <Button
                          bg={"yellow.400"}
                          color={"black"}
                          fontWeight="normal"
                          onClick={() => {
                            router.push(
                              {
                                pathname: `/app/user`,
                                query: {
                                  ...user,
                                },
                              },
                              "app/user/"
                            );
                          }}
                          size="sm"
                          mt={0}
                        >
                          Edit
                        </Button>
                      </Td>
                      <Td>
                        <Button
                          bg={"yellow.400"}
                          color={"black"}
                          fontWeight="normal"
                          onClick={() => {
                            router.push(
                              {
                                pathname: `/app/history`,
                                query: {
                                  ...user,
                                },
                              },
                              "app/history"
                            );
                          }}
                          size="sm"
                          mt={0}
                        >
                          Tx
                        </Button>
                      </Td>
                      <Td>
                        <Button
                          colorScheme={"yellow"}
                          variant="ghost"
                          // rounded={0}
                          // color={"red"}
                          fontWeight="normal"
                          size="sm"
                          onClick={() =>
                            new Boolean(user?.isDisabled) == true
                              ? unblockUser(user?.email)
                              : blockUser(user?.email)
                          }
                          mt={0}
                        >
                          {new Boolean(user?.isDisabled) == true
                            ? "Unblock"
                            : "Block"}
                        </Button>
                        <Button
                          colorScheme={"red"}
                          variant="ghost"
                          // rounded={0}
                          // color={"red"}
                          fontWeight="normal"
                          size="sm"
                          onClick={() => deleteUser(user?.email)}
                          mt={0}
                        >
                          Delete
                        </Button>
                      </Td>
                    </Tr>
                  );
                })}
              </Tbody>
            </Table>
          </TableContainer>
        )}
      </DashboardWrapper>

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Notification</ModalHeader>
          <ModalCloseButton />
          <ModalBody>You are about to delete a user's record</ModalBody>
          <ModalFooter>
            <Button
              onClick={onClose}
              colorScheme="green"
              mr={2}
              fontWeight="normal"
            >
              Continue
            </Button>
            <Button onClick={onClose} colorScheme="red" fontWeight="normal">
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* <FloatingButton /> */}
    </div>
  );
}

export default Users;
