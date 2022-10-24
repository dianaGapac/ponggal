import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Ponggal Kitchen</title>
				<meta data-n-head='1' charset='utf-8' />
				<meta name="google-site-verification" content="JiVncws0s2sB__pjVyXA5LMI3JuYz8DWzMQuSwVPjh8" />
				<meta
					data-n-head='1'
					data-hid='description'
					name='description'
					content='Restaurant in Manila, Ponggal Kitchen, Ponggal, Sulit kainan sa maynila, best restaurant in manila, sulit restaurant in manila, small business, small resto, resto-bar in manila'
				/>
				<meta
					data-n-head='1'
					data-hid='apple-mobile-web-app-capable'
					name='apple-mobile-web-app-capable'
					content='yes'
				/>

				<meta
					data-n-head='1'
					data-hid='mobile-web-app-capable'
					name='mobile-web-app-capable'
					content='yes'
				/>

				<meta
					data-n-head='1'
					data-hid='og:title'
					property='og:title'
					content='Ponggal Kitchen'
				/>

				{/* <meta
					data-n-head='1'
					data-hid='og:url'
					property='og:url'
					content='https://diana-gapac.ml/'
				/> */}

				<meta
					data-n-head='1'
					data-hid='og:description'
					property='og:description'
					content='Ponggal Kitchen, best resto in Manila, sulit resto in Manila'
				/>

				<meta
					data-n-head='1'
					data-hid='og:site_name'
					property='og:site_name'
					content='Ponggal Kitchen'
				/>
			</Head>

			<main className={styles.main}>Ponggal Kitchen</main>
		</div>
	);
}
