import { CheckIcon } from '@heroicons/react/20/solid';

const perks = [
  {
    name: 'Choferes verificados',
    description:
      'Los mejores choferes estan en Buenos Aires Transfer',
  },
  {
    name: 'Seguimiento de viajes',
    description: 'La seguridad es prioridada para nosotros.',
  },
  {
    name: 'Refrigerio en todos los viajes',
    description:
      'Trabaamos con primeras marcas como Coca cola, Sprite, Milka y Havanna',
  },
  {
    name: 'Translado de equipaje',
    description:
      'Nuestros choferes se encargan de cargar y descargar tus valijas',
  },
];

export default function Perks() {
  return (
    <div className="dark:bg-dark-bg py-24 pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div>
            <h2 className="text-base font-semibold leading-7 dark:text-dark-accent text-indigo-600">
              Todo lo que necesitas
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight dark:text-dark-txt text-gray-900 sm:text-4xl">
              En un viaje
            </p>
            <p className="mt-6 text-base leading-7 text-gray-600 dark:text-dark-txt-secondary">
              Atención las 24 horas del día los 7 días de la semana.
            </p>
          </div>
          <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:gap-y-16">
            {perks.map((perk) => (
              <div key={perk.name} className="relative pl-9">
                <dt className="font-semibold dark:text-dark-txt text-gray-900">
                  <CheckIcon
                    className="absolute top-1 left-0 h-5 w-5 text-forest-green-300"
                    aria-hidden="true"
                  />
                  {perk.name}
                </dt>
                <dd className="mt-2 dark:text-dark-txt-secondary">{perk.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
