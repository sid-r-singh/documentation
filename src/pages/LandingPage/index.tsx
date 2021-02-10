import React from "react";
import styled from "styled-components";
import { useWindowSize } from "../../hooks/useWindowSize";
import Layout from "@theme/Layout";

import "react-toastify/dist/ReactToastify.css";
import GiveItATryView from "./components/GiveItATriyView";
import HeaderView from "./components/HeaderView";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

const LandingPage: React.FC = () => {
  const windowSize = useWindowSize();
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title={`Home`} description={siteConfig.customFields.description}>
      <Container>
        <HeaderView />
        <GiveItATryView />
      </Container>
    </Layout>
  );
};

export default LandingPage;

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;
