<script lang="ts">
  import { skillGroups } from '$lib/utils/data';

  const skillIcons: Record<string, string> = {
    'React.js': 'https://img.icons8.com/?size=100&id=asWSSTBrDlTW&format=png&color=000000',
    'Next.js': 'https://img.icons8.com/?size=100&id=MWiBjkuHeMVq&format=png&color=000000',
    'TailwindCSS': 'https://img.icons8.com/?size=100&id=x7XMNGh2vdqA&format=png&color=000000',
    'TypeScript': 'https://img.icons8.com/?size=100&id=wpZmKzk11AzJ&format=png&color=000000',
    'Node.js': 'https://cdn-icons-png.flaticon.com/512/5968/5968322.png',
    'Express.js': 'https://img.icons8.com/?size=100&id=WNoJgbzDr3i2&format=png&color=000000',
    'REST APIs': 'https://img.icons8.com/?size=100&id=EPbEfEa7o8CB&format=png&color=000000',
    'MongoDB': 'https://img.icons8.com/?size=100&id=B403GJErHZpx&format=png&color=000000',
    'PostgreSQL': 'https://img.icons8.com/?size=100&id=38561&format=png&color=000000',
    'SQL': 'https://img.icons8.com/?size=100&id=UFXRpPFebwa2&format=png&color=000000',
    'Supabase': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg',
    'AWS': 'https://img.icons8.com/?size=100&id=33039&format=png&color=000000',
    'Firebase': 'https://img.icons8.com/?size=100&id=62452&format=png&color=000000',
    'Git/GitHub': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'
  };

  // Inject extra skills into the correct groups if not already present
  const extraDatabases = ['Supabase'];
  const extraTools = ['Git/GitHub'];

  const enrichedGroups = skillGroups.map((group) => {
    if (group.title.toLowerCase().includes('database')) {
      const missing = extraDatabases.filter((s) => !group.skills.includes(s));
      return { ...group, skills: [...group.skills, ...missing] };
    }
    if (group.title.toLowerCase().includes('tool')) {
      const missing = extraTools.filter((s) => !group.skills.includes(s));
      return { ...group, skills: [...group.skills, ...missing] };
    }
    return group;
  });
</script>

<section class="py-16 sm:py-20 px-4 sm:px-6">
  <div class="max-w-5xl mx-auto">
    <div class="text-center mb-8 sm:mb-10">
      <p class="text-xs font-mono text-zinc-500 dark:text-zinc-500 uppercase tracking-widest mb-2 sm:mb-3">// skills</p>
      <h2 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-zinc-900 dark:text-zinc-100">What I Build With</h2>
    </div>

    <div class="grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2">
      {#each enrichedGroups as group}
        <div class="rounded-[28px] border border-gray-300 dark:border-white/5 bg-white dark:bg-surface-800 p-3 sm:p-5">
          <h3 class="mb-3 sm:mb-4 text-xs sm:text-[11px] font-semibold uppercase tracking-[0.3em] text-gray-600 dark:text-zinc-400">
            {group.title}
          </h3>

          <div class="grid grid-cols-2 gap-2 sm:gap-3">
            {#each group.skills as skill}
              <div class="flex items-center gap-2 sm:gap-2.5 rounded-2xl border border-gray-200 dark:border-white/5 bg-gray-100 dark:bg-zinc-950/40 px-2.5 sm:px-3 py-2 sm:py-2.5 transition hover:bg-gray-200 dark:hover:bg-white/5">
                <!-- Icon container: smaller than before (was h-10 w-10 / img h-6 w-6) -->
                <div class="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg sm:rounded-xl bg-gray-200 dark:bg-surface-900">
                  <img
                    src={skillIcons[skill] || '/logo.png'}
                    alt={skill}
                    class="h-4 w-4 object-contain"
                  />
                </div>
                <span class="truncate text-xs font-medium text-zinc-200 leading-tight">{skill}</span>
              </div>
            {/each}
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>