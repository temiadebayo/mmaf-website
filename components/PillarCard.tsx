import Link from 'next/link';
import * as Icons from 'lucide-react';

interface PillarCardProps {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  href: string;
  pillarId?: string;
}

const getPillarColor = (pillarId?: string) => {
  switch (pillarId) {
    case 'sadaqqah':
      return {
        border: 'border-sadaqqah',
        icon: 'text-sadaqqah',
        hover: 'hover:border-sadaqqah/80',
        bg: 'bg-sadaqqah/5'
      };
    case 'lafiya':
      return {
        border: 'border-lafiya',
        icon: 'text-lafiya',
        hover: 'hover:border-lafiya/80',
        bg: 'bg-lafiya/5'
      };
    case 'ilimi':
      return {
        border: 'border-ilimi',
        icon: 'text-ilimi',
        hover: 'hover:border-ilimi/80',
        bg: 'bg-ilimi/5'
      };
    case 'anoora':
      return {
        border: 'border-anoora',
        icon: 'text-anoora',
        hover: 'hover:border-anoora/80',
        bg: 'bg-gray-50'
      };
    default:
      return {
        border: 'border-brand-black',
        icon: 'text-brand-black',
        hover: 'hover:border-brand-black',
        bg: 'bg-gray-50'
      };
  }
};

export default function PillarCard({ title, subtitle, description, icon, href, pillarId }: PillarCardProps) {
  const IconComponent = (Icons as any)[icon] || Icons.Heart;
  const colors = getPillarColor(pillarId);
  
  return (
    <Link href={href}>
      <div className={`bg-white border-2 ${colors.border} rounded-xl p-8 hover:shadow-2xl transition-all h-full ${colors.hover} group`}>
        <div className={`mb-4 inline-flex p-3 rounded-lg ${colors.bg}`}>
          <IconComponent className={`w-12 h-12 ${colors.icon}`} />
        </div>
        <h3 className="text-2xl font-bold mb-2 group-hover:scale-105 transition-transform">{title}</h3>
        <h4 className="text-lg font-semibold text-gray-600 mb-4">{subtitle}</h4>
        <p className="text-gray-700">{description}</p>
      </div>
    </Link>
  );
}

