import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Mantenemos tus datos protejidos',
    description:
      'No compartimos tu información',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Viajes Privados',
    description:
      'Tu privacidad nos importa.',
    icon: LockClosedIcon,
  },
  {
    name: 'Servicio 24 hrs.',
    description:
      'Contactanos de nuevo en cualquier momento que necesites, tenemos atencion las 24/7.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Conductores verificados',
    description:
      'Ponemos tu seguridad ante todo.',
    icon: FingerPrintIcon,
  },
];

export default function Features() {
  return (
    <div className=" py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight dark:text-dark-txt text-gray-900 sm:text-4xl">
            Sabemos lo que hacemos
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-dark-txt-secondary">
          Buenos Aires Transfer es la empresa que estabas buscando. Desde 1990 se encuentra ofreciendo el mejor servicio a todos nuestros distinguidos clientes, quienes siguen eligiendo a esta empresa por la seguridad y el confort que les ofrece.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900 dark:text-dark-txt">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600 dark:text-dark-txt-secondary">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
