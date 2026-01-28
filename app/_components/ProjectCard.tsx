import BaseImage from "@/components/BaseImage";
import BaseLink from "@/components/BaseLink";

type ProjectCardProps = {
  title: string;
  description: string;
  snapshot: string;
  tech: string[];
  link: string;
};

export default function ProjectCard({
  title,
  description,
  snapshot,
  tech,
  link,
}: ProjectCardProps) {
  return (
    <BaseLink
      href={link}
      className="group min-h-[520px] flex flex-col justify-between relative overflow-hidden rounded-2xl bg-zinc-900/60 border border-white/10 shadow-xl"
    >
      <div className="relative h-70 w-full overflow-hidden">
        <BaseImage
          width={600}
          height={400}
          src={snapshot}
          alt={title}
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-white">{title}</h3>

        <p className="mt-3 text-zinc-400 leading-relaxed text-sm">
          {description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {tech.map((item) => (
            <span
              key={item}
              className="text-xs px-3 py-1 rounded-full bg-white/5 text-zinc-300 border border-white/10"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </BaseLink>
  );
}
