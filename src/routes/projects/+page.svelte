<script lang="ts">
  import { projects } from '$lib/utils/data';
  import type { Project } from '$lib/utils/data';

  type Category = 'all' | Project['category'];
  let activeFilter: Category = 'all';

  $: filtered = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  const categories: { val: Category; label: string }[] = [
    { val: 'all',       label: 'All' },
    { val: 'fullstack', label: 'Full-Stack' },
    { val: 'frontend',  label: 'Frontend' },
    { val: 'security',  label: 'Security' },
  ];
</script>

<svelte:head>
  <title>Projects — {projects[0]?.title ? 'Ashraf Aminu' : 'Portfolio'}</title>
</svelte:head>

<main class="pt-28 pb-24 px-6 min-h-screen">
  <div class="max-w-5xl mx-auto">
    <!-- Header -->
    <div class="mb-14 animate-fade-up">
      <p class="text-xs font-mono text-accent-500 uppercase tracking-widest mb-3">// portfolio</p>
      <h1 class="text-4xl md:text-5xl font-black text-zinc-100 mb-4">All Projects</h1>
      <p class="text-zinc-500 text-base max-w-lg leading-relaxed">
        A collection of projects I've built — from Web3 platforms and encrypted messaging to inventory systems and payment integration applications.
      </p>
    </div>

    <!-- Filter pills -->
    <div class="flex flex-wrap gap-2 mb-10">
      {#each categories as { val, label }}
        <button
          on:click={() => activeFilter = val}
          class="px-4 py-2 rounded-xl text-sm font-semibold border transition-all duration-200"
          class:bg-accent-500={activeFilter === val}
          class:text-white={activeFilter === val}
          class:border-accent-500={activeFilter === val}
          class:shadow-lg={activeFilter === val}
          class:text-zinc-500={activeFilter !== val}
          class:border-zinc-800={activeFilter !== val}
          class:bg-surface-800={activeFilter !== val}
          class:hover:border-zinc-700={activeFilter !== val}
        >
          {label}
        </button>
      {/each}
    </div>

    <!-- Project grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
      {#each filtered as project (project.id)}
        <article
          class="group rounded-2xl border border-zinc-800 bg-surface-800 overflow-hidden hover:border-zinc-700 transition-all duration-300 hover:shadow-xl flex flex-col"
        >
          <!-- Card top bar accent -->
          <div class="h-1 w-full" style="background: linear-gradient(90deg, {project.accent}, {project.accent}66)" />

          <div class="p-6 flex flex-col flex-1">
            <div class="flex items-start justify-between gap-3 mb-4">
              <div class="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                style="background:{project.accent}15; border:1px solid {project.accent}25">
                {project.icon}
              </div>
              <div class="flex items-center gap-2">
                {#if project.featured}
                  <span class="text-[10px] font-black font-mono px-2 py-0.5 rounded-full"
                    style="color:#10b981; background:rgba(16,185,129,0.1); border:1px solid rgba(16,185,129,0.2)">
                    FEATURED
                  </span>
                {/if}
                <span class="text-[11px] font-mono text-zinc-700">{project.year}</span>
              </div>
            </div>

            <h2 class="text-lg font-black text-zinc-100 mb-2 group-hover:text-white transition-colors">
              {project.title}
            </h2>
            <p class="text-sm text-zinc-500 leading-relaxed flex-1 mb-4">{project.description}</p>

            <!-- Tags -->
            <div class="flex flex-wrap gap-1.5 mb-5">
              {#each project.tags.slice(0, 4) as tag}
                <span class="text-[10px] font-mono px-2 py-0.5 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-500">
                  {tag}
                </span>
              {/each}
              {#if project.tags.length > 4}
                <span class="text-[10px] font-mono px-2 py-0.5 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-600">
                  +{project.tags.length - 4}
                </span>
              {/if}
            </div>

            <!-- Links -->
            <div class="flex items-center gap-3 mt-auto pt-4 border-t border-zinc-800">
              {#if project.demo}
                <a href={project.demo} target="_blank" rel="noopener"
                  class="flex items-center gap-1.5 text-xs font-semibold transition-colors"
                  style="color:{project.accent}">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
                  </svg>
                  Live demo
                </a>
              {/if}
              {#if project.repo}
                <a href={project.repo} target="_blank" rel="noopener"
                  class="flex items-center gap-1.5 text-xs font-semibold text-zinc-600 hover:text-zinc-300 transition-colors ml-auto">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                  </svg>
                  GitHub
                </a>
              {/if}
            </div>
          </div>
        </article>
      {/each}
    </div>

    {#if filtered.length === 0}
      <div class="text-center py-20 text-zinc-700">
        <p class="text-4xl mb-3">🔍</p>
        <p class="font-mono text-sm">No projects in this category yet</p>
      </div>
    {/if}
  </div>
</main>
