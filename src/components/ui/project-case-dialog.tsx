import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { CaseStudy } from "@/data/case-studies";

type ProjectCaseDialogProps = {
  study: CaseStudy | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function ProjectCaseDialog({ study, open, onOpenChange }: ProjectCaseDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[min(90vh,720px)] max-w-lg overflow-y-auto border-border bg-card text-card-foreground sm:max-w-xl">
        {study ? (
          <>
            <DialogHeader>
              <p className="font-display text-[0.65rem] uppercase tracking-[0.28em] text-primary">
                Case study
              </p>
              <DialogTitle className="font-display text-xl sm:text-2xl">{study.title}</DialogTitle>
              <DialogDescription className="text-sm text-muted-foreground">
                {study.context}
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-5 text-sm leading-relaxed">
              <section>
                <h3 className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-amber">
                  Problem
                </h3>
                <p className="mt-1.5 text-muted-foreground">{study.problem}</p>
              </section>
              <section>
                <h3 className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-amber">
                  What I built
                </h3>
                <p className="mt-1.5 text-muted-foreground">{study.built}</p>
              </section>
              <section>
                <h3 className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-amber">
                  Tools
                </h3>
                <ul className="mt-2 flex flex-wrap gap-1.5">
                  {study.tools.map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-border bg-secondary/60 px-2.5 py-0.5 text-xs text-foreground/90"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </section>
              <section>
                <h3 className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-amber">
                  Outcome
                </h3>
                <p className="mt-1.5 text-muted-foreground">{study.outcome}</p>
              </section>
              <section className="rounded-lg border border-dashed border-border/80 bg-secondary/30 px-3 py-2.5">
                <h3 className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  Metric
                </h3>
                <p className="mt-1 font-mono text-xs text-muted-foreground">{study.metric}</p>
              </section>
            </div>
          </>
        ) : null}
      </DialogContent>
    </Dialog>
  );
}
