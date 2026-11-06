import Image from "next/image";
import { type ContentBlock } from "@/content/pages";
import { cn } from "@/lib/utils";

export function ProseContent({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div className="prose-dental">
      {blocks.map((block, index) => {
        if (block.type === "heading") {
          const Tag = block.level === 3 ? "h3" : "h2";
          return <Tag key={index}>{block.text}</Tag>;
        }
        if (block.type === "p") {
          return <p key={index}>{block.text}</p>;
        }
        if (block.type === "list") {
          return (
            <ul key={index}>
              {block.items.map((item, itemIndex) => (
                <li key={itemIndex}>{item}</li>
              ))}
            </ul>
          );
        }
        if (block.type === "video") {
          return (
            <div
              key={index}
              className="my-8 aspect-video overflow-hidden rounded-2xl border border-spruce/10 bg-spruce/5"
            >
              <iframe
                src={block.src}
                title={block.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
                className="size-full"
              />
            </div>
          );
        }
        return (
          <figure key={index} className={cn("my-8", index === 0 && "mt-0")}>
            <div className="overflow-hidden rounded-2xl border border-spruce/10 bg-white/60 p-2">
              <Image
                src={block.src}
                alt={block.alt || block.caption || ""}
                width={900}
                height={650}
                sizes="(max-width: 768px) 100vw, 700px"
                className="mx-auto h-auto max-h-[460px] w-auto rounded-xl object-contain"
              />
            </div>
            {block.caption ? (
              <figcaption className="mt-3 text-center text-[0.72rem] text-stone">
                {block.caption}
              </figcaption>
            ) : null}
          </figure>
        );
      })}
    </div>
  );
}
