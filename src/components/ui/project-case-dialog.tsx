import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { CaseStudy } from "@/data/case-studies";

type Props = {
  study: CaseStudy | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function ProjectCaseDialog({ study, open, onOpenChange }: Props) {
  return (
    <Dialog open={open && !!study} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[min(90vh,640px)] max-w-lg overflow-y-auto sm:max-w-xl">
        {study ? (
          <>
            <DialogHeader>
              <DialogTitle className="font-display text-xl sm:text-2xl">{study.title}</DialogTitle>
              <DialogDescription>{study.context}</DialogDescription>
            </DialogHeader>
            <div className="space-y-4 text-sm leading-relaxed">
              <div>
                <p className="font-display text-xs font-semibold uppercase tracking-wider text-amber">Problem</p>
                <p className="mt-1 text-muted-foreground">{study.problem}</p>
              </div>
              <div>
                <p className="font-display text-xs font-semibold uppercase tracking-wider text-amber">What I did</p>
                <p className="mt-1 text-muted-foreground">{study.built}</p>
              </div>
              <div>
                <p className="font-display text-xs font-semibold uppercase tracking-wider text-amber">Tools</p>
                <ul className="mt-2 flex flex-wrap gap-1.5">
                  {study.tools.map((t) => (
                    <li key={t} className="rounded-full border border-border bg-secondary/50 px-2.5 py-0.5 text-xs">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-display text-xs font-semibold uppercase tracking-wider text-amber">Result</p>
                <p className="mt-1 text-muted-foreground">{study.outcome}</p>
              </div>
            </div>
          </>
        ) : null}
      </DialogContent>
    </Dialog>
  );
}
