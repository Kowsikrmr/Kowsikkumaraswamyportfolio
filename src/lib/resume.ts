/** Embedded resume PDF (base64 chunks) for reliable client-side download. */
import { R0 } from "./resume-0";
import { R1 } from "./resume-1";
import { R2 } from "./resume-2";

export const RESUME_PDF_BASE64 = R0 + R1 + R2;
export const RESUME_FILENAME = "Kowsik_Naraayanan_K_Resume.pdf";

/** Trigger a PDF download from the embedded base64 data. */
export function downloadResume() {
  const bin = atob(RESUME_PDF_BASE64);
  const bytes = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
  const blob = new Blob([bytes], { type: "application/pdf" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = RESUME_FILENAME;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}
