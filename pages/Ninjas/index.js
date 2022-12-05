import styles from "../../styles/Ninjas.module.css";
import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { ninjas: data },
  };
};

const ninjas = ({ ninjas }) => {
  console.log("ninjas", ninjas);
  return (
    <>
      <h1>All Ninjas</h1>
      {ninjas &&
        ninjas.map((ninja) => (
          <div key={ninja.id}>
            <Link href={"/Ninjas/" + ninja.id} className={styles.single}>
              <h3>{ninja.name}</h3>
            </Link>
          </div>
        ))}
    </>
  );
};

export default ninjas;
<h1>Ninja Index page</h1>;
