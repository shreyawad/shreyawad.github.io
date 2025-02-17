import { ChevronRight } from "lucide-react";

export const Breadcrumbs = ({ items }: { items: { label: string; href: string }[] }) => {
  return (
    <nav aria-label="Breadcrumb" className="py-2">
      <ol className="flex items-center gap-2 text-sm text-gray-600">
        {items.map((item, index) => (
          <li key={item.href} className="flex items-center">
            {index > 0 && <ChevronRight className="w-4 h-4 mx-2" />}
            <a href={item.href} className="hover:text-primary transition-colors">
              {item.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}; 