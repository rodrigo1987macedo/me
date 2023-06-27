import { Spacer } from "@nextui-org/react"
import { GetStaticProps } from "next"
import Head from "next/head"
import { getAllPosts, PostProps } from "utils/mdx"
import { Customers } from "../components/Customers"
import { Hero } from "../components/Hero"
import { LatestBlogPosts } from "../components/LatestBlogPosts"
import { Quote } from "../components/Quote"

interface HomeProps {
  posts: PostProps[]
}

export default function Home({ posts }: HomeProps) {
  return (
    <>
      <Head>
        <title>Web developer | Rodrigo Macedo</title>
        <link rel="canonical" href="https://macedomauriz.com" />
        <meta
          name="description"
          content="
Hi, I'm Rodrigo, I work in frontend, design, and backend development. Interested in Python, Typescript, Node, Go, DevOps culture, SEO, Linux and NeoVim."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Spacer y={5} />
      <Quote />
      <Spacer y={5} />
      <LatestBlogPosts posts={posts} />
      <Spacer y={5} />
      <Customers />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return { props: { posts: getAllPosts() } }
}
