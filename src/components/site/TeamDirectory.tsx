"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { team, teamGroups, type TeamMember, type TeamGroup } from "@/content/team";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function TeamDirectory() {
  const [selected, setSelected] = useState<TeamMember | null>(null);

  return (
    <>
      <Tabs defaultValue="doctors" className="gap-8">
        <TabsList className="mx-auto w-full max-w-2xl justify-start sm:justify-center">
          {teamGroups.map((group) => (
            <TabsTrigger key={group.id} value={group.id}>
              {group.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {teamGroups.map((group) => {
          const members = team.filter((member) => member.group === group.id);
          return (
            <TabsContent key={group.id} value={group.id}>
              <p className="mb-6 text-center text-[0.82rem] text-stone">
                {group.blurb}
              </p>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                {members.map((member) => (
                  <TeamCard
                    key={member.id}
                    member={member}
                    group={group.id}
                    onSelect={() => setSelected(member)}
                  />
                ))}
              </div>
            </TabsContent>
          );
        })}
      </Tabs>

      <Dialog
        open={selected !== null}
        onOpenChange={(open) => {
          if (!open) setSelected(null);
        }}
      >
        <DialogContent className="max-w-xl">
          {selected ? (
            <div>
              <div className="flex items-center gap-4 pr-10">
                <div className="relative size-20 shrink-0 overflow-hidden rounded-2xl border border-spruce/10 bg-bone">
                  <Image
                    src={selected.image}
                    alt={selected.name}
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <DialogTitle className="text-2xl leading-tight">
                    {selected.name}
                    {selected.credentials ? (
                      <span className="ml-1 font-sans text-[0.62rem] uppercase tracking-[0.16em] text-stone">
                        {selected.credentials}
                      </span>
                    ) : null}
                  </DialogTitle>
                  <DialogDescription className="mt-1">
                    {selected.role}
                  </DialogDescription>
                </div>
              </div>

              <div className="mt-6 space-y-3 text-[0.92rem] leading-relaxed text-ink/75">
                {selected.bio.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              {selected.highlights && selected.highlights.length > 0 ? (
                <ul className="mt-5 grid gap-2 rounded-2xl border border-spruce/10 bg-white/50 p-4">
                  {selected.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-start gap-2 text-[0.82rem] text-spruce"
                    >
                      <Sparkles
                        className="mt-0.5 size-3.5 shrink-0 text-copper"
                        aria-hidden
                      />
                      {highlight}
                    </li>
                  ))}
                </ul>
              ) : null}

              {selected.bioAfterList && selected.bioAfterList.length > 0 ? (
                <div className="mt-4 space-y-3 text-[0.92rem] leading-relaxed text-ink/75">
                  {selected.bioAfterList.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              ) : null}

              {selected.group === "doctors" ? (
                <Button asChild size="md" className="mt-6 w-full sm:w-auto">
                  <a href={`#${selected.id}`}>
                    Read the full profile
                    <ArrowUpRight className="size-3.5" aria-hidden />
                  </a>
                </Button>
              ) : null}
            </div>
          ) : null}
        </DialogContent>
      </Dialog>
    </>
  );
}

function TeamCard({
  member,
  group,
  onSelect,
}: {
  member: TeamMember;
  group: TeamGroup;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={cn(
        "group block w-full cursor-pointer text-left",
        group === "doctors" && "text-left",
      )}
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-spruce/10 bg-bone">
        <Image
          src={member.image}
          alt={`${member.name}${member.credentials ? `, ${member.credentials}` : ""}`}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-spruce/75 via-spruce/5 to-transparent opacity-80 transition-opacity group-hover:opacity-95"
          aria-hidden
        />
        <div className="absolute bottom-3 left-3 right-3">
          <p className="font-display text-lg leading-tight text-cream">
            {member.name}
          </p>
          <p className="mt-0.5 text-[0.62rem] leading-snug text-cream/65">
            {member.role}
          </p>
        </div>
        <span className="absolute right-3 top-3 grid size-7 place-items-center rounded-full bg-cream/20 text-cream opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
          <ArrowUpRight className="size-3.5" aria-hidden />
        </span>
      </div>
      <p className="mt-2 flex items-center gap-1 text-[0.68rem] font-medium text-fern">
        Read bio
        <ArrowUpRight className="size-3" aria-hidden />
      </p>
    </button>
  );
}
