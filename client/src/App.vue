<script setup lang="ts">
import { Button } from '@/components/ui/button'
import ShortcutTable from '@/components/ui/shortcut-table/ShortcutTable.vue'
</script>

<template>
  <div class="container py-10 space-y-8">
    <div class="flex justify-between items-center">
      <h1 class="text-3xl font-bold">Hotkey Vault</h1>
      <Button>Save Changes</Button>
    </div>

    <div class="rounded-lg border bg-card p-8">
      <ShortcutTable />
    </div>
  </div>
</template>
