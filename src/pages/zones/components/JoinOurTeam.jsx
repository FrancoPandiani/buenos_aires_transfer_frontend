import { Disclosure } from '@headlessui/react';
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline';

const positions = [
  {
    question: 'Customer Success',
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: 'Data Engineer',
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: 'Ethical Hacker',
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: 'Blockchain Engineer',
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: 'Information Technology',
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: 'Marketing',
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: 'Human Resources',
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: 'Sales',
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: 'Social Media',
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  // More questions...
];

export default function JoinOurTeam() {
  return (
    <div className="dark:bg-dark-bg">
      <div className="mx-auto max-w-7xl px-6 py-24  lg:px-8">
        <div className="mx-auto max-w-4xl divide-y dark:divide-dark-border divide-gray-900/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight dark:text-dark-txt text-gray-900">
            Se parte de Buenos Aires Transfer
          </h2>
        </div>
        <p className="italic text-md dark:text-dark-txt text-gray-900 mt-12 mx-auto max-w-4xl">
        Desde 2010 ampliamos la flota de vehículos VIP, y en 2016 incorporamos unidades 
        con SMART TV para traslado de únicos con productos delicados. Nos especializamos en la logistica 
        integral de contingentes para eventos corporativos y deportivos, con atencion personalizada. 
        </p>
      </div>
    </div>
  );
}
