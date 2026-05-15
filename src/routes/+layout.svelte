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

<div class="min-h-screen bg-[#080a0e] text-zinc-100">
  <Nav />
  <div class:page-enter={!transitioning}>
    <slot />
  </div>

  <!-- Footer -->
  <footer class="border-t border-zinc-900 py-10 px-6">
    <div class="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <div class="flex items-center gap-2.5">
        <div class="w-7 h-7 rounded-lg flex items-center justify-center"
          style="background: linear-gradient(135deg,#059669,#10b981)">
          <span class="text-white font-black text-xs">AA</span>
        </div>
        <span class="text-sm font-mono text-zinc-500">ashraf<span class="text-accent-500">-aminu</span></span>
      </div>
      <p class="text-xs text-zinc-700 font-mono">
        Built with SvelteKit · Deployed on Vercel · {new Date().getFullYear()}
      </p>
      <div class="flex items-center gap-1 text-xs text-zinc-700">
        <span class="w-1.5 h-1.5 rounded-full bg-accent-500 animate-pulse inline-block" />
        <span class="font-mono">All systems operational</span>
      </div>
    </div>
  </footer>
</div>
