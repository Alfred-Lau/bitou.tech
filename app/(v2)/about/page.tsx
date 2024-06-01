"use client";

import React from "react";

import Nav from "../components/nav";

export default function Product() {
  return (
    <>
      <Nav textColor="#000" bgColor="#fff"></Nav>
      <div className="container-v2 min-h-[calc(100vh-400px)] mt-[60px]">
        {/* profile  & mission*/}
        <div className="flex justify-center items-center h-[80vh]">
          <div className="flex flex-col items-center">
            <h1 className="text-4xl font-bold">About Us</h1>
            <p className="text-center mt-4">
              We are a team of developers who are passionate about creating
              tools to help other developers. Our mission is to create products
              that are easy to use and help developers be more productive.
            </p>
          </div>
        </div>
        {/* developer */}
        <div>
          <div className="flex justify-center items-center h-[80vh]">
            <div className="flex flex-col items-center">
              <h1 className="text-4xl font-bold">Our Team</h1>
              <p className="text-center mt-4">
                We are a team of developers who are passionate about creating
                tools to help other developers. Our mission is to create
                products that are easy to use and help developers be more
                productive.
              </p>
            </div>
          </div>
        </div>
        {/* product */}

        <div>开发的产品</div>
        {/* contact */}

        <div>
          {/* 如何联系开发者   */}
          <div className="flex">
            <div>how to contact</div>
            <div>
              <div>github 地址</div>
              <div>blog 地址</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
