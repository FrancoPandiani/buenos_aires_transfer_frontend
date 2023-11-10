const features = [
  {
    name: 'Innovación',
    description:
      'Innovamos todo el tiempo para darte un servicio personalizado.',
  },
  {
    name: 'Conocimiento',
    description:
      'Nuestros choferes estan preparados para elejir los mejores caminos siempre y en todo momento.',
  },
  {
    name: 'Cuidado',
    description:
      'Priorizamos siempre la vida.',
  },
];

export default function OurValues() {
  return (
    <div className="dark:bg-dark-bg py-8 pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight dark:text-dark-txt text-gray-900 sm:text-4xl">
            Nuestros Valores
          </h2>
          {/* <p className="mt-6 text-lg leading-8 text-gray-600">
            Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum
            cupiditate veritatis in accusamus quisquam.
          </p> */}
        </div>
        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.name}>
              <dt className="font-semibold dark:text-dark-txt text-gray-900">{feature.name}</dt>
              <dd className="mt-1 text-gray-600 dark:text-dark-txt-secondary">
                {feature.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
