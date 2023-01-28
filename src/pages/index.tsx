import Head from 'next/head'
// import { Inter } from '@next/font/google'
import { NextPage } from 'next'
import WithSubnavigation from '@/components/NavBar/NavBar';
import Hero from '@/components/Hero/Hero';
import Form from '@/components/Form/Form';
import Layout from '@/components/Layout/Layout';
// const inter = Inter({ subsets: ['latin'] })

const Home: NextPage = () => {


    return (
        <Layout>
            {/* <WithSubnavigation /> */}
            {/* <p>aa</p> */}
            <Hero />
            <Form />
        </Layout>
    )
}

export default Home;