<script lang="ts">
  import { projects } from '$lib/utils/data';
  const featured = projects.filter(p => p.featured);
</script>

<section class="py-16 sm:py-20 md:py-24 px-4 sm:px-6">
  <div class="max-w-5xl mx-auto">
    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10 sm:mb-12">
      <div>
        <p class="text-xs font-mono text-accent-500 uppercase tracking-widest mb-1 sm:mb-2">// selected work</p>
        <h2 class="text-2xl sm:text-3xl md:text-4xl font-black text-zinc-900 dark:text-zinc-100">Featured Projects</h2>
      </div>
      <a href="/projects" class="hidden md:flex items-center gap-2 text-sm font-medium text-zinc-600 dark:text-zinc-500 hover:text-accent-500 dark:hover:text-accent-400 transition-colors group">
        All projects
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" class="group-hover:translate-x-1 transition-transform">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </a>
    </div>

    <div class="space-y-4 sm:space-y-6">
      {#each featured as project, i}
        <article
          class="group relative rounded-2xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-surface-800 overflow-hidden hover:border-gray-300 dark:hover:border-zinc-600 transition-all duration-300 hover:shadow-2xl"
          style="hover:shadow-color: {project.accent}22"
        >
          <!-- Accent top line -->
          <div class="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style="background: linear-gradient(90deg, transparent, {project.accent}, transparent)"></div>

          <div class="p-4 sm:p-6 md:p-8 flex flex-col md:flex-row gap-4 sm:gap-6">
            <!-- Icon + number -->
            <div class="flex md:flex-col items-center md:items-start gap-4 md:gap-3 flex-shrink-0">
              <div class="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0"
                style="background: {project.accent}18; border: 1px solid {project.accent}30">
                {project.icon}
              </div>
              <span class="text-4 sm:text-5xl font-black text-gray-300 dark:text-zinc-800 font-mono hidden md:block">0{i + 1}</span>
            </div>

            <!-- Content -->
            <div class="flex-1 min-w-0">
              <div class="flex items-start justify-between gap-4 flex-wrap">
                <div>
                  <h3 class="text-lg sm:text-xl font-black text-zinc-900 dark:text-zinc-100 mb-1 group-hover:text-accent-500 dark:group-hover:text-white transition-colors">
                    {project.title}
                  </h3>
                  <p class="text-xs sm:text-sm text-zinc-600 dark:text-zinc-500 mb-3 sm:mb-4 max-w-xl leading-relaxed">{project.longDesc}</p>
                </div>
                <span class="text-[10px] sm:text-xs font-mono text-zinc-600 dark:text-zinc-700 flex-shrink-0">{project.year}</span>
              </div>

              <!-- Tags -->
              <div class="flex flex-wrap gap-2 mb-4 sm:mb-5">
                {#each project.tags as tag}
                  <span class="text-[10px] sm:text-[11px] font-mono px-2 sm:px-2.5 py-1 rounded-md border"
                    style="color:{project.accent}; border-color:{project.accent}30; background:{project.accent}10">
                    {tag}
                  </span>
                {/each}
              </div>

              <!-- Links -->
              <div class="flex items-center gap-4">
                {#if project.demo}
                  <a href={project.demo} target="_blank" rel="noopener"
                    class="flex items-center gap-1.5 text-xs font-semibold transition-colors"
                    style="color:{project.accent}">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
                    </svg>
                    Live demo
                  </a>
                {/if}
                {#if project.repo}
                  <a href={project.repo} target="_blank" rel="noopener"
                    class="flex items-center gap-1.5 text-xs font-semibold text-zinc-600 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-300 transition-colors">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                    </svg>
                    Source
                  </a>
                {/if}
              </div>
            </div>
          </div>
        </article>
      {/each}
    </div>

    <div class="text-center mt-10">
      <a href="/projects"
        class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-zinc-400 border border-zinc-800 hover:border-zinc-600 hover:text-zinc-200 transition-all bg-surface-800">
        View all {projects.length} projects →
      </a>
    </div>
  </div>
</section>
