import PillarCard from '@/components/PillarCard';
import { pillarsData } from '@/lib/data';

export default function PillarsPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-red-50 to-orange-50 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
            MMAF Pillars
          </h1>
          <p className="text-xl text-gray-700">
            Four interconnected pillars transforming lives
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillarsData.map((pillar) => (
              <PillarCard
                key={pillar.id}
                title={pillar.title}
                subtitle={pillar.subtitle}
                description={pillar.description}
                icon={pillar.icon}
                href={`/pillars/${pillar.id}`}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

