import Head from 'next/head';
import Layout from '@/hocs/Layout';

const SeoList = {
  title: 'Buenos Aires Transfer',
  description:'transportes vip',
  href: '/',
  url: 'https://buenosairestransfer.com',
  keywords: 'transporte, vip, remises, viajes',
  robots: 'all',
  author: 'Franco',
  publisher: 'Pandiani',
  image:'',
  twitterHandle: '@Buenosairestrasnfer',
};

export default function Terms() {
  return (
    <div className="dark:bg-dark-bg">
      <Head>
        <title>{SeoList.title}</title>
        <meta name="description" content={SeoList.description} />

        <meta name="keywords" content={SeoList.keywords} />
        <link rel="canonical" href={SeoList.href} />
        <meta name="robots" content={SeoList.robots} />
        <meta name="author" content={SeoList.author} />
        <meta name="publisher" content={SeoList.publisher} />

        {/* Social Media Tags */}
        <meta property="og:title" content={SeoList.title} />
        <meta property="og:description" content={SeoList.description} />
        <meta property="og:url" content={SeoList.url} />
        <meta property="og:image" content={SeoList.image} />
        <meta property="og:image:width" content="1370" />
        <meta property="og:image:height" content="849" />
        <meta property="og:image:alt" content="Buenos Aires Transfer Thumbnail Image" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content={SeoList.title} />
        <meta name="twitter:description" content={SeoList.description} />
        <meta name="twitter:image" content={SeoList.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={SeoList.twitterHandle} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="text-center">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
      <p className="dark:text-dark-txt mt-1 text-3xl font-extrabold text-gray-900 sm:text-4xl sm:tracking-tight lg:text-5xl font-worksans-bold">
            Terminos y Condiciones</p>
      <div className="pb-10" />
      Los Servicios Digitales pueden contener enlaces hacia sitios, productos y/o servicios de terceros, no obstante,
      el Administrador no administra ni controla esos sitios, productos y/o servicios y no es responsable de sus contenidos
      ni de cualquier daño y perjuicio que tales contenidos, productos y servicios pudieran causar, por lo que se recomienda
      la lectura de los Términos y Condiciones de cada uno de ellos.
      Asimismo, los Servicios Digitales utilizan información provista directamente por los Usuarios, información suministrada por terceros
      e información cedida al Administrador por otros Organismos en los términos de lo dispuesto por la Ley de Protección de Datos Personales
      Ley 25.326,modificatorias y complementarias. En este último caso, El Administrador no es responsable por los daños y/o perjuicios que pudieran generarse por errores en la información cedida por dichos Organismos.
    </div>
    </div>
    </div>
  );
}

Terms.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
