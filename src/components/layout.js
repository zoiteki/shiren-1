import React from 'react';
import styled from '@emotion/styled';

import ThemeProvider from './theme/themeProvider';
import Sidebar from './sidebar';
import RightSidebar from './rightSidebar';
import config from '../../config.js';

const Wrapper = styled('div')`
  display: flex;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.background};

  .sideBarUL li a {
    color: ${({ theme }) => theme.colors.text};
    white-space: nowrap;
  }

  .sideBarUL .item > a:hover {
    background-color: #C1D7F9;
    color: #fff !important;

    /* background: #F8F8F8 */
  }

  @media only screen and (max-width: 767px) {
    display: block;
  }
`;

const Content = styled('main')`
  display: flex;
  flex-grow: 1;
  /* margin: 0px 88px; */
  margin: 0px 20px;
  /* padding-top: 3rem; */
  padding-top: 1rem;
  background: ${({ theme }) => theme.colors.background};

  table tr {
    background: ${({ theme }) => theme.colors.background};
  }

  @media only screen and (max-width: 1023px) {
    padding-left: 0;
    margin: 0 10px;
    padding-top: 3rem;
  }
`;

const MaxWidth = styled('div')`
  /* @media only screen and (max-width: 50rem) { */
    width: 100%;
    position: relative;
  /* } */
`;

const LeftSideBarWidth = styled('div')`
  /* width: 298px; */
  width: auto;
`;

const RightSideBarWidth = styled('div')`
  /* width: 224px; */
  width: auto;
`;

const Layout = ({ children, location, tableOfContents }) => (
  <ThemeProvider location={location}>
    <Wrapper>
      <LeftSideBarWidth className={'hiddenMobile'}>
        <Sidebar location={location} />
      </LeftSideBarWidth>
      {config.sidebar.title ? (
        <div
          className={'sidebarTitle sideBarShow'}
          dangerouslySetInnerHTML={{ __html: config.sidebar.title }}
        />
      ) : null}
      <Content>
        <MaxWidth>{children}</MaxWidth>
      </Content>
      <RightSideBarWidth className={'hiddenMobile'}>
        <RightSidebar 
          location={location} 
          tableOfContents={tableOfContents}
          allowedDepths={config.rightSidebar?.allowedDepths || [1, 2, 3]}
        />
      </RightSideBarWidth>
    </Wrapper>
  </ThemeProvider>
);

export default Layout;
