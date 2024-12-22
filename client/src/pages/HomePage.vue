<script setup lang="ts">
import { ref } from 'vue'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import ShortcutTable from '@/components/ui/shortcut-table/ShortcutTable.vue'
import { Search } from 'lucide-vue-next'

const searchQuery = ref('')
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

    <!-- Search section -->
    <div class="flex items-center space-x-2">
      <div class="relative flex-1 max-w-sm">
        <Search class="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          v-model="searchQuery"
          class="pl-8"
          placeholder="Search shortcuts..."
        />
      </div>
    </div>

    <div class="rounded-lg border bg-card p-8">
      <ShortcutTable :search-query="searchQuery" />
    </div>
  </div>
</template>