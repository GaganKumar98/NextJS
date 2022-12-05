import Link from "next/link";
import Image from "next/Image";
import Head from "next/head";

const Navbar = () => {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keyboard" content="ninjas" />
      </Head>
      <nav>
        <div className="logo">
          {/* <img src="/vercel.svg" /> */}
          <Image src="/vercel.svg" width={128} height={77} />
        </div>
        {/* <h1> Nav List</h1> */}
        <Link href="/">Home</Link>
        &nbsp;
        <Link href="/about">About</Link>
        &nbsp;
        <Link href="/Ninjas">Ninjas Listing</Link>
      </nav>
    </>
  );
};

export default Navbar;
