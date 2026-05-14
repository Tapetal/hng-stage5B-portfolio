<script lang="ts">
  import { skills } from '$lib/utils/data';
</script>

<section class="py-24 px-6 relative overflow-hidden">
  <!-- Background accent -->
  <div class="absolute inset-0 pointer-events-none"
    style="background: radial-gradient(ellipse 50% 40% at 50% 50%, rgba(16,185,129,0.04) 0%, transparent 70%)" />

  <div class="max-w-5xl mx-auto relative z-10">
    <div class="text-center mb-14">
      <p class="text-xs font-mono text-accent-500 uppercase tracking-widest mb-3">// tools & technologies</p>
      <h2 class="text-3xl md:text-4xl font-black text-zinc-100">What I Work With</h2>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {#each skills as { cat, items }, i}
        <div class="rounded-2xl border border-zinc-800 bg-surface-800 p-5 hover:border-zinc-700 transition-all duration-300 group"
          style="animation-delay: {i * 0.08}s">
          <p class="text-[10px] font-black font-mono text-accent-500 uppercase tracking-widest mb-4">{cat}</p>
          <div class="flex flex-wrap gap-2">
            {#each items as item}
              <span class="text-xs font-mono px-2.5 py-1 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 group-hover:border-zinc-700 transition-colors">
                {item}
              </span>
            {/each}
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
