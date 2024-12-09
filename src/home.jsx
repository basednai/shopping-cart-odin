import { Link } from "react-router-dom";
import styles from "/src/assets/styles/home.module.css";

function Home() {
  return (
    <>
      <Link to="shop">
        <div className={styles.center}>
          <div className={styles.content}>
            <img src="/shop.svg" alt="shop" className={styles.img} />
          </div>
        </div>
      </Link>
    </>
  );
}

export default Home;
