import React from "react";
import { Spinner, Flex } from "@chakra-ui/react";

function Loading({ loading }) {
  return (
    <>
      {
        <Flex
          h="100vh"
          w="full"
          justifyContent="center"
          alignItems="center"
          bg="gray.800"
        >
          <Spinner color="white" fontSize={26} />
        </Flex>
      }
    </>
  );
}

export default Loading;
