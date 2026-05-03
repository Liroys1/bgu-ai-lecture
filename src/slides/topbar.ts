export function topbar(num: number, label: string): string {
  return `
    <div class="topbar">
      <div class="brand">
        <div class="bgu-logo">B</div>
        <span>מיטאפ פורום 20–80 · בר גיורא · 5 במאי 2026</span>
      </div>
      <div>פורום 20–80 · בן־גוריון · ${label} · ${String(num).padStart(2,'0')} / 20</div>
    </div>
  `;
}
