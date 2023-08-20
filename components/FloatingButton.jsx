import React from "react";
import styles from "../styles/floating.module.scss";
import { telegram } from "../assets/list";

import { SiTelegram } from "react-icons/si";

import Image from "next/image";
import { Box } from "@chakra-ui/layout";

function FloatingButton() {
  return (
    <Box as="a" href="https://t.me/MAX_PROFITFX" className={styles.btn}>
      <SiTelegram size={50} color="#47A9DA"/>
    </Box>
  );
}

export default FloatingButton;
