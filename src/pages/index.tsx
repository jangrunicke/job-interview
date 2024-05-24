import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Job interview</title>
        <meta name="description" content="Jobinterview" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center ">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight">
            Job interview
          </h1>
        </div>
      </main>
    </>
  );
}
