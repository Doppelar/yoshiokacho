export const MUSE_LABEL = "MUSEで作成";

export function MuseMark() {
  return (
    <>
      <span
        aria-hidden="true"
        className="ml-1 inline-flex rounded border border-primary-accent bg-mirai-brand-mint px-1 py-0.5 align-middle text-[10px] font-bold leading-none text-primary-accent"
      >
        MUSE
      </span>
      <span className="sr-only">（{MUSE_LABEL}）</span>
    </>
  );
}
