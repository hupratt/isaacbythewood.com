import React, { useEffect } from "react";
import Head from "next/head";
import PropTypes from "prop-types";
import styled from "styled-components";

import { strings } from "../site.config";

const Page = props => {
  const baseTitle = strings.title;
  const defaultDescription = strings.description;

  useEffect(() => {
    window.scrollTo = 0;
  }, []);

  return (
    <>
      <Head>
        <title>
          {props.title ? `${props.title} — ${baseTitle}` : baseTitle}
        </title>
        <meta
          name="description"
          content={props.description ? props.description : defaultDescription}
        />
      </Head>
      <Main>{props.children}</Main>
    </>
  );
};

Page.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ])
};

export default Page;

const Main = styled.main`
  grid-area: main;
`;