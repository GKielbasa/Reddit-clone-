//index.tsx to wszystko co jest wyrenderowane na screenie (homepage), kardza strona dodana do folderu ppages bedzie dodana do route 

import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>Hello React world !</div>
  )
}
