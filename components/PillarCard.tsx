import Link from 'next/link';
import * as Icons from 'lucide-react';

interface PillarCardProps {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  href: string;
}

export default function PillarCard({ title, subtitle, description, icon, href }: PillarCardProps) {
  const IconComponent = (Icons as any)[icon] || Icons.Heart;
  
  return (
    <Link href={href}>
      <div className="bg-white border-2 border-red-500 rounded-xl p-8 hover:shadow-2xl transition-all h-full">
        <div className="mb-4">
          <IconComponent className="w-12 h-12 text-red-600" />
        </div>
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <h4 className="text-lg font-semibold text-gray-600 mb-4">{subtitle}</h4>
        <p className="text-gray-700">{description}</p>
      </div>
    </Link>
  );
}

