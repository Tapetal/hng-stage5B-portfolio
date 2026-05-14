<script lang="ts">
  import { timeline } from '$lib/utils/data';
</script>

<section class="py-24 px-6">
  <div class="max-w-3xl mx-auto">
    <div class="text-center mb-14">
      <p class="text-xs font-mono text-accent-500 uppercase tracking-widest mb-3">// my journey</p>
      <h2 class="text-3xl md:text-4xl font-black text-zinc-100">Timeline</h2>
    </div>

    <div class="relative">
      <!-- Vertical line -->
      <div class="absolute left-4 md:left-1/2 top-0 bottom-0 w-px"
        style="background: linear-gradient(to bottom, rgba(16,185,129,0.4), rgba(16,185,129,0.1), transparent)" />

      <div class="space-y-10">
        {#each timeline as item, i}
          <div class="relative flex flex-col md:flex-row gap-6 md:gap-0"
            class:md:flex-row-reverse={i % 2 !== 0}>

            <!-- Dot -->
            <div class="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border-2 border-[#080a0e] top-2"
              style="background: {item.accent}; box-shadow: 0 0 12px {item.accent}60" />

            <!-- Content card -->
            <div class="ml-10 md:ml-0 md:w-[calc(50%-2rem)]"
              class:md:pr-8={i % 2 === 0}
              class:md:pl-8={i % 2 !== 0}>
              <div class="rounded-2xl border border-zinc-800 bg-surface-800 p-5 hover:border-zinc-700 transition-all duration-300 group">
                <!-- Year badge -->
                <span class="inline-block text-[10px] font-black font-mono px-2.5 py-1 rounded-full mb-3"
                  style="color:{item.accent}; background:{item.accent}15; border: 1px solid {item.accent}30">
                  {item.year}
                </span>
                <h3 class="text-base font-bold text-zinc-100 mb-1.5 group-hover:text-white transition-colors">
                  {item.title}
                </h3>
                <p class="text-sm text-zinc-500 leading-relaxed">{item.desc}</p>
              </div>
            </div>

            <!-- Spacer for alternating layout -->
            <div class="hidden md:block md:w-[calc(50%-2rem)]" />
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>
