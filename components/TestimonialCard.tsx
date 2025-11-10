import * as Icons from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  location: string;
  quote: string;
  icon: string;
}

export default function TestimonialCard({ name, role, location, quote, icon }: TestimonialCardProps) {
  const IconComponent = (Icons as any)[icon] || Icons.UserCircle;
  
  return (
    <div className="bg-white rounded-xl p-8 shadow-lg">
      <p className="text-gray-700 italic mb-6">&ldquo;{quote}&rdquo;</p>
      <div className="flex items-center space-x-4">
        <IconComponent className="w-12 h-12 text-gray-400" />
        <div>
          <p className="font-bold">{name}</p>
          <p className="text-sm text-gray-600">{role}</p>
          <p className="text-sm text-gray-500">{location}</p>
        </div>
      </div>
    </div>
  );
}

