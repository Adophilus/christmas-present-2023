import * as styles from './styles.css.ts'
import { motion } from 'framer-motion';

export default function HomePage() {
  return (
    <motion.div className={styles.container}>
      <motion.h1 className={styles.greeting} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        Merry Christmas!
      </motion.h1>
      <motion.span className={styles.snowflake} animate={{ y: [0, 20, 0] }}>
        ❄️
      </motion.span>
    </motion.div>
  )
}
