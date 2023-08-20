import React from "react";
import DashboardWrapper from "../../components/app/DashboardWrapper";
import Statistics from "../../components/app/Statistics";
import FloatingButton from "../../components/FloatingButton";

import {
  Ticker,
  EconomicCalendar,
  TechnicalAnalysis,
} from "react-ts-tradingview-widgets";
import { Container, SimpleGrid } from "@chakra-ui/react";
import WithAuth from "../../HOCs/WithAuth";
// import * as TradingView from "react-tradingview-embed";

function Index() {
  return (
    <div>
      <DashboardWrapper>
        <Statistics />

        <Container
          maxW="7xl"
          mx={"auto"}
          pt={5}
          px={{ base: 2, sm: 12, md: 17 }}
        >
          <Ticker colorTheme="dark"></Ticker>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 5, lg: 8 }}>
            <EconomicCalendar
              colorTheme="dark"
              height={400}
              width="100%"
            ></EconomicCalendar>

            <TechnicalAnalysis
              colorTheme="dark"
              width="100%"
            ></TechnicalAnalysis>
          </SimpleGrid>
        </Container>
      </DashboardWrapper>

      {/* <TradingView.Ticker widgetProps={{ theme: "dark" }} /> */}

      {/* <FloatingButton /> */}
    </div>
  );
}

export default Index;
