import Link from "next/link";
import { useEffect } from "react";
import { Router, useRouter } from "next/router";

const Notfound = () => {
  const Router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      //   Router.go(1);
      Router.push("/");
    }, 3000);
  }, []);
  return (
    <div className="not-found">
      <h1>Oooops...</h1>
      <h2>Page not found</h2>
      <p>
        {" "}
        Go back to the <Link href="/">Homepage</Link>
      </p>
    </div>
  );
};

export default Notfound;
