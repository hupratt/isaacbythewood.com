import React from "react";
import App, { Container } from "next/app";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import { theme } from "../site.config";
import Mouse from "../components/mouse";
import Grid from "../components/grid";
import Sidebar from "../components/sidebar";

class MyApp extends App {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps)
      pageProps = await Component.getInitialProps(ctx);
    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <ThemeProvider theme={theme}>
          <>
            <GlobalStyle />
            <Mouse />
            <Sidebar />
            <TransitionGroup component={null}>
              <CSSTransition
                key={this.props.router.route}
                appear
                timeout={250}
                classNames="transition"
              >
                <Transition>
                  <Grid>
                    <Component {...pageProps} />
                  </Grid>
                </Transition>
              </CSSTransition>
            </TransitionGroup>
          </>
        </ThemeProvider>
      </Container>
    );
  }
}

export default MyApp;

// NOTE: Prevent renderblocking of Google WebFonts CSS by importing it here
const GlobalStyle = createGlobalStyle`
  body {
    font-family:
      -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial,
      sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    color: white;
    background-color: ${props => props.theme.colors.primary};
    min-height: 100vh;
    width: 100%;
    padding: 0;
    margin: 0;
    overflow-x: hidden;
    text-shadow: rgba(0, 0, 0, .01) 0 0 1px;
    text-rendering: optimizeLegibility;
    user-select: none;
  }

  body,
  a {
    cursor: none;
  }
`;

const Transition = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  transition-duration: 250ms;
  transition-property: opacity;

  &.transition-enter {
    opacity: 0;
  }
  &.transition-enter-active {
    opacity: 1;
  }
  &.transition-enter-done {
    opacity: 1;
  }
  &.transition-exit {
    opacity: 1;
  }
  &.transition-exit-active {
    opacity: 0;
  }
`;
