import Head from 'next/head';
import Banner from '../components/Banner';
import Header from '../components/Header';
import ProductFeed from '../components/ProductFeed';

export default function Home({ products }) {
  return (
    <div className='bg-gray-100'>
      <Head>
        <title>Amazon 2.0</title>
      </Head>

      {/* {Header}  */}
      <Header />

      {/* {Main Container} */}
      <main className='max-w-7xl mx-auto'>
        {/* {Banner} */}
        <Banner />

        {/* {Product Feed} */}
        <ProductFeed products={products} />
      </main>
    </div>
  );
}

// Fetches product from the server
export async function getServerSideProps(context) {
  const products = await fetch("https://fakestoreapi.com/products").then(
      (res) => res.json()
  );

  return {
    props: {
      products,
    },
  };
}
