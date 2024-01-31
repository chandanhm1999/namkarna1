import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Featured from '@/components/Featured'
import PizzaList from '@/components/pizzaList'
import NameCard from '@/components/namingvideo'
import MapCard from '@/components/mapCard'

export default function Home() {
  return (
    <div className={styles.continer}>
      <Head>
        <title>namkarna</title>
        <meta name="description" content="Namkarna" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/img/photo/papu.jpg" />
      </Head>
      <NameCard />
      <PizzaList />
      <Featured />
      <MapCard />
    </div>
  )
}
