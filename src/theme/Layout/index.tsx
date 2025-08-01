import React from 'react';
import Layout from '@theme-original/Layout';

export default function LayoutWrapper(props) {
  return (
    <Layout {...props}>
      <div className="main-content-wrapper"> 
                {props.children}
      </div>
    </Layout>
  );
}