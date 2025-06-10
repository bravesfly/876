import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import './home.css'
import HomePageClient from "./HomePageClient";
export const metadata: Metadata = {
  title: 'The Best Way To Get Auto Parts | Spark Auto Part Assistant',
};
export default function Home() {
  return (
    <HomePageClient />
  );
}