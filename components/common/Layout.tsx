import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import styled from "styled-components";

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <ViewHeight>
    <header>

     
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>{' '}
        |{' '}
        <Link href="/about">
          <a>About</a>
        </Link>{' '}
        |{' '}
        <Link href="/users">
          <a>Users List</a>
        </Link>{' '}
        | <a href="/api/users">Users API</a>
      </nav>
    </header>
    {children}
   

    </ViewHeight>

  </div>

)

export default Layout


// Just for testing (setting height to 100vh)

const ViewHeight =  styled.div`
height: 100vh;
background-color: black;
`