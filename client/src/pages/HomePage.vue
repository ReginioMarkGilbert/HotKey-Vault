<script setup lang="ts">
import { Button } from '@/components/ui/button'
import ShortcutTable from '@/components/ui/shortcut-table/ShortcutTable.vue'
</script>

<template>
  <div class="space-y-8">
    <div class="flex items-center justify-between">
      <div>
        <h2 class="text-3xl font-bold tracking-tight">Shortcuts</h2>
        <p class="text-muted-foreground">
          Manage your keyboard shortcuts in one place.
        </p>
      </div>
      <Button>Save Changes</Button>
    </div>

    <div class="rounded-lg border bg-card p-8">
      <ShortcutTable />
    </div>
  </div>
</template>