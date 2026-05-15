<script lang="ts">
  import { me } from '$lib/utils/data';

  let name = '';
  let email = '';
  let message = '';
  let status: 'idle' | 'sending' | 'sent' | 'error' = 'idle';
  let errors: Record<string, string> = {};

  function validate() {
    const e: Record<string, string> = {};
    if (!name.trim())    e.name    = 'Name is required';
    if (!email.trim())   e.email   = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = 'Invalid email';
    if (!message.trim()) e.message = 'Message is required';
    return e;
  }

  async function handleSubmit() {
    errors = validate();
    if (Object.keys(errors).length) return;
    status = 'sending';
    await new Promise(r => setTimeout(r, 1200));
    status = 'sent';
    name = ''; email = ''; message = '';
  }

  const contacts = [
    { icon: '✉️', label: 'Email',    val: me.email,          href: `mailto:${me.email}` },
    { icon: '🐙', label: 'GitHub',   val: 'Tapetal',         href: me.github },
    { icon: '💼', label: 'LinkedIn', val: 'ashraf-aminu',    href: me.linkedin },
    { icon: '🐦', label: 'Twitter',  val: '@ashraf_amyn_',   href: me.twitter },
  ];
</script>

<section class="py-16 sm:py-20 px-4 sm:px-6" id="contact">
  <div class="max-w-4xl mx-auto">

    <!-- Header -->
    <div class="text-center mb-10 sm:mb-12">
      <p class="text-xs font-mono text-accent-500 uppercase tracking-widest mb-2 sm:mb-3">// get in touch</p>
      <h2 class="text-2xl sm:text-3xl md:text-4xl font-black text-zinc-900 dark:text-zinc-100">Let's Work Together</h2>
      <p class="text-zinc-600 dark:text-zinc-500 mt-2 sm:mt-3 max-w-md mx-auto text-sm leading-relaxed">
        Have a project in mind, or just want to chat? I'm always open to interesting conversations.
      </p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-5 gap-4 sm:gap-6">

      <!-- Contact links -->
      <div class="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
        {#each contacts as item}
          <a
            href={item.href} target="_blank" rel="noopener"
            class="flex items-center gap-3 p-4 rounded-2xl border transition-all group
              border-gray-200 dark:border-zinc-800
              bg-white dark:bg-surface-800
              hover:border-gray-300 dark:hover:border-zinc-700
              hover:shadow-md dark:hover:shadow-none"
          >
            <span class="text-lg w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0
              bg-gray-100 dark:bg-zinc-900
              border border-gray-200 dark:border-zinc-800">
              {item.icon}
            </span>
            <div class="min-w-0 flex-1">
              <p class="text-[10px] font-mono text-zinc-500 dark:text-zinc-600 uppercase tracking-widest">{item.label}</p>
              <p class="text-xs font-semibold text-zinc-700 dark:text-zinc-300 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors truncate">{item.val}</p>
            </div>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
              class="shrink-0 text-gray-300 dark:text-zinc-700 group-hover:text-zinc-500 dark:group-hover:text-zinc-400 group-hover:translate-x-0.5 transition-all">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        {/each}
      </div>

      <!-- Form -->
      <div class="lg:col-span-3 rounded-2xl border p-4 sm:p-5 md:p-6
        border-gray-200 dark:border-zinc-800
        bg-white dark:bg-surface-800">

        {#if status === 'sent'}
          <div class="flex flex-col items-center justify-center py-12 text-center gap-4">
            <div class="w-14 h-14 rounded-2xl bg-accent-500/10 border border-accent-500/20 flex items-center justify-center text-2xl">✅</div>
            <div>
              <h3 class="text-base font-bold text-zinc-900 dark:text-zinc-100 mb-1">Message sent!</h3>
              <p class="text-sm text-zinc-500">I'll get back to you as soon as possible.</p>
            </div>
            <button
              on:click={() => status = 'idle'}
              class="text-sm text-accent-500 hover:text-accent-400 font-medium transition-colors"
            >
              Send another →
            </button>
          </div>

        {:else}
          <form on:submit|preventDefault={handleSubmit} class="space-y-4" novalidate>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <!-- Name -->
              <div>
                <label for="cf-name" class="block text-[11px] font-semibold uppercase tracking-widest mb-1.5 text-zinc-600 dark:text-zinc-500">Name</label>
                <input
                  id="cf-name" type="text" bind:value={name} placeholder="Your name"
                  class="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all
                    text-zinc-900 dark:text-zinc-100
                    placeholder:text-zinc-400 dark:placeholder:text-zinc-700
                    bg-gray-50 dark:bg-zinc-900
                    border {errors.name ? 'border-red-400 dark:border-red-800' : 'border-gray-200 dark:border-zinc-800'}
                    focus:border-accent-500 focus:ring-1 focus:ring-accent-500/30"
                />
                {#if errors.name}<p class="text-[11px] text-red-500 mt-1">{errors.name}</p>{/if}
              </div>

              <!-- Email -->
              <div>
                <label for="cf-email" class="block text-[11px] font-semibold uppercase tracking-widest mb-1.5 text-zinc-600 dark:text-zinc-500">Email</label>
                <input
                  id="cf-email" type="email" bind:value={email} placeholder="you@example.com"
                  class="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all
                    text-zinc-900 dark:text-zinc-100
                    placeholder:text-zinc-400 dark:placeholder:text-zinc-700
                    bg-gray-50 dark:bg-zinc-900
                    border {errors.email ? 'border-red-400 dark:border-red-800' : 'border-gray-200 dark:border-zinc-800'}
                    focus:border-accent-500 focus:ring-1 focus:ring-accent-500/30"
                />
                {#if errors.email}<p class="text-[11px] text-red-500 mt-1">{errors.email}</p>{/if}
              </div>
            </div>

            <!-- Message -->
            <div>
              <label for="cf-message" class="block text-[11px] font-semibold uppercase tracking-widest mb-1.5 text-zinc-600 dark:text-zinc-500">Message</label>
              <textarea
                id="cf-message" bind:value={message} rows={5} placeholder="Tell me about your project…"
                class="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all resize-none
                  text-zinc-900 dark:text-zinc-100
                  placeholder:text-zinc-400 dark:placeholder:text-zinc-700
                  bg-gray-50 dark:bg-zinc-900
                  border {errors.message ? 'border-red-400 dark:border-red-800' : 'border-gray-200 dark:border-zinc-800'}
                  focus:border-accent-500 focus:ring-1 focus:ring-accent-500/30"
              ></textarea>
              {#if errors.message}<p class="text-[11px] text-red-500 mt-1">{errors.message}</p>{/if}
            </div>

            <!-- Submit -->
            <button
              type="submit" disabled={status === 'sending'}
              class="w-full py-3.5 rounded-xl text-sm font-bold text-white transition-all duration-300 disabled:opacity-60 flex items-center justify-center gap-2"
              style="background: linear-gradient(135deg,#059669,#10b981); box-shadow: 0 4px 20px rgba(16,185,129,0.2);"
            >
              {#if status === 'sending'}
                <span class="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                Sending…
              {:else}
                Send message
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
                  <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                </svg>
              {/if}
            </button>

          </form>
        {/if}
      </div>
    </div>

  </div>
</section>