<script lang="ts">
  import '../app.css';
  import Nav from '$lib/components/layout/Nav.svelte';
  import { page } from '$app/stores';
  import { afterNavigate } from '$app/navigation';
  import { onMount } from 'svelte';

  let transitioning = false;

  afterNavigate(() => {
    transitioning = false;
    window.scrollTo({ top: 0, behavior: 'instant' });
  });
</script>

<div class="min-h-screen bg-[var(--body-bg)] text-[var(--body-text)]">
  <Nav />
  <div class:page-enter={!transitioning}>
    <slot />
  </div>

  <!-- Footer -->
  <footer class="border-t border-gray-200 dark:border-zinc-900 py-8 sm:py-10 px-4 sm:px-6">
    <div class="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
      <div class="flex items-center gap-2.5">
        <img src="/logo.png" alt="Ashraf Aminu Logo" class="w-6 sm:w-7 h-6 sm:h-7" />
        <span class="text-xs sm:text-sm font-mono text-zinc-600 dark:text-zinc-500">ashraf<span class="text-accent-500">-aminu</span></span>
      </div>
      <p class="text-[10px] sm:text-xs text-zinc-700 dark:text-zinc-700 font-mono">
        Built with SvelteKit · Deployed on Vercel · {new Date().getFullYear()}
      </p>
      <div class="flex items-center gap-1 text-[10px] sm:text-xs text-zinc-700 dark:text-zinc-700">
        <span class="w-1.5 h-1.5 rounded-full bg-accent-500 animate-pulse inline-block"></span>
        <span class="font-mono">All systems operational</span>
      </div>
    </div>
  </footer>
</div>
