import { CheckIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';

const steps = [
  {
    name: 'Te recogemos en cualquier punto de AMBA.',
    description:
      'Te avisamos 10 minutos antes de llegar al punto de encuentro.',
    href: '/zones',
    status: 'current',
  },
  {
    name: 'Cargamos todas tus valijas sin costo adicional.',
    description:
      "Nuestros choferes estan siempre dispuestos a colaborar con tus valijas.",
    href: '/',
    status: 'upcoming',
  },
  {
    name: 'Llegamos a destino de manera puntual',
    description:
      'Puntualidad y confort son nuestros valores.',
    href: '/',
    status: 'upcoming',
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Roadmap() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
      <div className="mx-auto max-w-3xl">
        {/* Content goes here */}
        <nav aria-label="Progress">
          <ol className="overflow-hidden">
            {steps.map((step, stepIdx) => (
              <li
                key={step.name}
                className={classNames(stepIdx !== steps.length - 1 ? 'pb-10' : '', 'relative')}
              >
                {step.status === 'complete' ? (
                  <>
                    {stepIdx !== steps.length - 1 ? (
                      <div
                        className="absolute left-4 top-4 -ml-px mt-0.5 h-full w-0.5 bg-indigo-600"
                        aria-hidden="true"
                      />
                    ) : null}
                    <Link href={step.href} className="group relative flex items-start">
                      <span className="flex h-9 items-center">
                        <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 group-hover:bg-indigo-800">
                          <CheckIcon className="h-5 w-5 text-white" aria-hidden="true" />
                        </span>
                      </span>
                      <span className="ml-4 flex min-w-0 flex-col">
                        <span className="text-sm font-medium dark:text-dark-txt">{step.name}</span>
                        <span className="text-sm text-gray-500 dark:text-dark-txt-secondary">
                          {step.description}
                        </span>
                      </span>
                    </Link>
                  </>
                ) : step.status === 'current' ? (
                  <>
                    {stepIdx !== steps.length - 1 ? (
                      <div
                        className="absolute left-4 top-4 -ml-px mt-0.5 h-full w-0.5 bg-gray-300"
                        aria-hidden="true"
                      />
                    ) : null}
                    <Link
                      href={step.href}
                      className="group relative flex items-start"
                      aria-current="step"
                    >
                      <span className="flex h-9 items-center" aria-hidden="true">
                        <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 dark:border-dark-accent border-indigo-600 bg-white">
                          <span className="h-2.5 w-2.5 rounded-full dark:bg-dark-accent bg-indigo-600" />
                        </span>
                      </span>
                      <span className="ml-4 flex min-w-0 flex-col">
                        <span className="text-sm font-medium darrk:text-dark-accent dark:text-dark-accent text-indigo-600">
                          {step.name}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-dark-txt-secondary">
                          {step.description}
                        </span>
                      </span>
                    </Link>
                  </>
                ) : (
                  <>
                    {stepIdx !== steps.length - 1 ? (
                      <div
                        className="absolute left-4 top-4 -ml-px mt-0.5 h-full w-0.5 bg-gray-300"
                        aria-hidden="true"
                      />
                    ) : null}
                    <Link href={step.href} className="group relative flex items-start">
                      <span className="flex h-9 items-center" aria-hidden="true">
                        <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-300 bg-white group-hover:border-gray-400">
                          <span className="h-2.5 w-2.5 rounded-full bg-transparent group-hover:bg-gray-300" />
                        </span>
                      </span>
                      <span className="ml-4 flex min-w-0 flex-col">
                        <span className="text-sm font-medium text-gray-500 dark:text-dark-txt">
                          {step.name}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-dark-txt-secondary">
                          {step.description}
                        </span>
                      </span>
                    </Link>
                  </>
                )}
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </div>
  );
}
