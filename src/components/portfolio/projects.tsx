import { Link2 } from "lucide-react";
const products = [
  {
    id: 1,
    name: "makeQR",
    description:
      "Create custom QR codes with colors, logos, and unique styles. Built for simple, reliable QR creation.",
    url: "https://www.makeqr.site/",
  },
  {
    id: 2,
    name: "Kochi devfest 2025",
    description:
      "The official website for Google DevFest Kochi 2025, a premier developer conference.",
    url: "https://www.devfestkochi.in/",
  },
  {
    id: 3,
    name: "Discord Echo Bot",
    description:
      "Show your live Discord status, coding activity, and Spotify presence on the web with a self-hosted API.",
    url: "https://github.com/aravinnndddd/Discord-Echo",
  },
];
export function Projects() {
  return (
    <div>
      {products.map((product) => (
        <div
          key={product.id}
          className="w-full h-40 bg-yellow-400 mb-4 rough-border border-2 border-yellow-500/20 shadow-sm transition hover:scale-[1.02] cursor-pointer p-5"
        >
          <div className="flex gap-1">
            {" "}
            <a
              href={product.url}
              target="_blank"
              className="underline font-bold"
            >
              {product.name}
            </a>{" "}
            <Link2 />
          </div>
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  );
}
