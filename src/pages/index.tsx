import type { NextPage } from 'next'

import Image from 'next/image'

import { Main, Card, Text } from '@Components/index'

import styled from 'styled-components'

import Head from 'next/head'

const MainText = styled(Text)`
  color: #1f3251;
  font-size: 18px;
  font-weight: 700;
  padding-left: var(--padding-left-1);
  padding-right: var(--padding-right-1);
`;

const SubText = styled(Text)`
  color: #7b879d;
  font-size: 15px;
  font-weight: 400;
  padding-left: var(--padding-left-1);
  padding-right: var(--padding-right-1);
  margin-bottom: 20px;
`;

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>QR Code Scanner</title>
        <meta name="description" content="QR Code Scanner" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <Card>
          <section className="internContainer">
            <section>
              <Image src='/image-qr-code.png' alt='QR Code' width={576} height={576} layout="intrinsic" className='image' />
            </section>
            <section>
              <MainText>Improve your front-end skills by building projects</MainText>
            </section>
            <section>
              <SubText>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</SubText>
            </section>
          </section>
          </Card>
      </Main>
    </div>
  )
}

export default Home
