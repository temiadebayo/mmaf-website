import { notFound } from 'next/navigation';
import Link from 'next/link';
import { pillarsData } from '@/lib/data';
import * as Icons from 'lucide-react';

export default function PillarDetailPage({ params }: { params: { id: string } }) {
  const pillar = pillarsData.find((p) => p.id === params.id);

  if (!pillar) {
    notFound();
  }

  const IconComponent = (Icons as any)[pillar.icon] || Icons.Heart;

  return (
    <>
      <section className="bg-gradient-to-br from-red-50 to-orange-50 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <IconComponent className="w-24 h-24 text-red-600" />
          </div>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
            {pillar.title}
          </h1>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">{pillar.subtitle}</h2>
          <p className="text-xl text-gray-600 italic">{pillar.meaning}</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-xl text-gray-700 mb-12">{pillar.description}</p>
          
          <h3 className="text-3xl font-bold mb-6">Flagship Initiatives</h3>
          <ul className="space-y-4">
            {pillar.initiatives.map((initiative, index) => (
              <li key={index} className="bg-gray-50 p-4 rounded-lg">
                {initiative}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-3xl font-bold mb-8 text-center">Key Outputs</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pillar.outputs.map((output, index) => (
              <div key={index} className="bg-red-50 p-6 rounded-xl border-l-4 border-red-600">
                <p className="font-semibold">{output}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

