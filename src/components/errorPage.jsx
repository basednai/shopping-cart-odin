import { Link } from "react-router-dom";
import styles from "/src/assets/styles/home.module.css";

export default function ErrorPage() {
  return (
    <>
      <Link to="shop">
        <div className={styles.center}>
        Uh-oh, you&apos;re lost, go back home!
        </div>
      </Link>
    </>
  );
}


