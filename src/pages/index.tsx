import Head from "next/head";
import { NextPage } from "next";
import Hero from "@/components/Hero/Hero";
import Form from "@/components/Form/Form";
import Layout from "@/components/Layout/Layout";

const Home: NextPage = () => (
	<Layout>
		<Hero />
		<Form />
	</Layout>
);

export default Home;

