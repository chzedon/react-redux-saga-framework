import React, { useEffect, useRef } from "react";

import { Remarkable } from "remarkable";
import styles from "./index.module.less";

const me = new Remarkable();

function Home() {

  const refDiv = useRef(null)

  const [mse, setMe] = React.useState("## Welcome!!");
  const [index, setIndex] = React.useState([]);
  useEffect(() => {
    refDiv.current && setIndex(new Array(parseInt((refDiv.current.offsetHeight - 24) / 24)).fill(0))
  }, []);
  return (
    <>
      <div className={styles.markdown}>
        <div ref={refDiv} className={styles.left}>
          <div className={styles.index}>
            {
              index.map((item, index) => (
                <p>{index + 1}</p>
              ))
            }
          </div>
          <textarea
            defaultValue={mse}
            onChange={e => {
              setMe(e.target.value);
            }}
          />
        </div>
        <div className={styles.yulan} dangerouslySetInnerHTML={{ __html: me.render(mse) }} />
      </div>
    </>
  );
}

export default Home