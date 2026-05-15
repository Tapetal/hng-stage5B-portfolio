<script lang="ts">
  import { timeline } from '$lib/utils/data';
</script>

<section class="py-16 sm:py-20 px-4 sm:px-6">
  <div class="max-w-4xl mx-auto">

    <div class="text-center mb-12 sm:mb-14">
      <p class="text-xs font-mono text-zinc-600 dark:text-zinc-500 uppercase tracking-widest mb-2 sm:mb-3">// my journey</p>
      <h2 class="text-2xl sm:text-3xl md:text-4xl font-black text-zinc-900 dark:text-zinc-100">Professional Experience</h2>
    </div>

    <div class="space-y-6 sm:space-y-8">
      {#each timeline as item}
        <div class="border-l-2 pl-4 sm:pl-6 md:pl-8 relative" style="border-color: {item.accent}30;">

          <!-- Dot -->
          <div
            class="absolute -left-[9px] top-1 w-[18px] h-[18px] rounded-full border-[3px] border-white dark:border-[#080a0e] flex items-center justify-center"
            style="background: {item.accent};"
          >
            <div class="w-1.5 h-1.5 rounded-full bg-white opacity-80"></div>
          </div>

          <!-- Card -->
          <div class="rounded-2xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-surface-800 p-4 sm:p-5 md:p-6 transition-all hover:border-gray-300 dark:hover:border-zinc-700">

            <!-- Top row -->
            <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4 mb-3">
              <div>
                <h3 class="text-base sm:text-lg font-bold text-zinc-900 dark:text-zinc-100 leading-snug">
                  {item.title}
                </h3>
                <div class="flex flex-wrap items-center gap-x-2 gap-y-1 mt-1 text-xs sm:text-sm">
                  <span class="font-semibold text-zinc-700 dark:text-zinc-300">{item.company}</span>
                  <span class="text-gray-300 dark:text-zinc-700">•</span>
                  <span class="text-zinc-600 dark:text-zinc-500">{item.location}</span>
                </div>
              </div>

              <!-- Period badge -->
              <span
                class="self-start sm:self-auto shrink-0 text-[10px] sm:text-[11px] font-mono px-2.5 py-1 rounded-lg border"
                style="color:{item.accent}; border-color:{item.accent}30; background:{item.accent}10;"
              >
                {item.period}
              </span>
            </div>

            <!-- Description -->
            <p class="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-3 sm:mb-4">{item.desc}</p>

            <!-- Highlights -->
            {#if item.highlights?.length}
              <div>
                <h4 class="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider mb-2" style="color:{item.accent}">
                  Key Highlights
                </h4>
                <ul class="space-y-1">
                  {#each item.highlights as h}
                    <li class="flex items-start gap-2 text-[11px] sm:text-sm text-zinc-600 dark:text-zinc-400">
                      <span class="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style="background:{item.accent}"></span>
                      {h}
                    </li>
                  {/each}
                </ul>
              </div>
            {/if}
          </div>
        </div>
      {/each}
    </div>

  </div>
</section>