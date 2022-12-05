import Head from "next/head";
import Image from "next/image";
import Footer from "../comps/footer";
import Navbar from "../comps/navbar";
import styles from "../styles/Home.module.css";
import Link from "next/Link";

export default function Home() {
  return (
    <div>
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
          crossOrigin="anonymous"
        />
      </Head>
      <div className="container">
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <p className={styles.text}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <Link href="/ninjas">See Ninja Listing</Link>
      </div>
    </div>
  );
}
