"use client"

import React from 'react'

export type SideBarProps = {
  docs: any[]
};

export default function SideBar(props: SideBarProps) {
  const { docs } = props
  console.log("🚀 ~ file: index.tsx:11 ~ SideBar ~ docs:", docs)


  return (
    <div>SideBar</div>
  )
}
