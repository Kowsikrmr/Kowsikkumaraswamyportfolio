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
      <DialogContent className="max-h-[min(90vh,640px)] max-w-lg overflow-y-auto border-border bg-card sm:max-w-xl">
        {study ? (
          <>
            <DialogHeader>
              <DialogTitle className="font-display text-xl tracking-tight text-ink sm:text-2xl">
                {study.title}
              </DialogTitle>
              <DialogDescription className="text-muted-foreground">{study.context}</DialogDescription>
            </DialogHeader>
            <div className="space-y-4 text-sm leading-relaxed">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-champagne">Problem</p>
                <p className="mt-1 text-muted-foreground">{study.problem}</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-champagne">What I did</p>
                <p className="mt-1 text-muted-foreground">{study.built}</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-champagne">Tools</p>
                <ul className="mt-2 flex flex-wrap gap-1.5">
                  {study.tools.map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-border bg-secondary px-2.5 py-0.5 text-xs text-foreground"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-champagne">Result</p>
                <p className="mt-1 text-muted-foreground">{study.outcome}</p>
              </div>
            </div>
          </>
        ) : null}
      </DialogContent>
    </Dialog>
  );
}
