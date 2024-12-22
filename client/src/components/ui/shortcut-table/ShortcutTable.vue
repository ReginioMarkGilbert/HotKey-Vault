<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ref, onMounted } from 'vue'
import { shortcutApi } from '@/lib/api'

interface Shortcut {
  id?: string
  description: string
  key: string
}

const shortcuts = ref<Shortcut[]>([])
const newShortcut = ref<Shortcut>({
  description: '',
  key: ''
})

const loadShortcuts = async () => {
  try {
    const data = await shortcutApi.getShortcuts()
    shortcuts.value = data
  } catch (error) {
    console.error('Failed to load shortcuts:', error)
  }
}

const saveShortcuts = async () => {
  try {
    await shortcutApi.saveShortcuts(shortcuts.value)
  } catch (error) {
    console.error('Failed to save shortcuts:', error)
  }
}

const addShortcut = async () => {
  if (newShortcut.value.description && newShortcut.value.key) {
    shortcuts.value.push({
      id: crypto.randomUUID(),
      ...newShortcut.value
    })
    await saveShortcuts()
    newShortcut.value = { description: '', key: '' }
  }
}

const removeShortcut = async (id: string) => {
  shortcuts.value = shortcuts.value.filter(s => s.id !== id)
  await saveShortcuts()
}

onMounted(loadShortcuts)
</script>

<template>
  <div class="space-y-4">
    <!-- Add new shortcut form -->
    <div class="flex gap-4">
      <Input
        v-model="newShortcut.description"
        placeholder="Description"
        class="flex-1"
      />
      <Input
        v-model="newShortcut.key"
        placeholder="Shortcut key"
        class="w-48"
      />
      <Button @click="addShortcut">Add</Button>
    </div>

    <!-- Shortcuts table -->
    <div class="rounded-md border">
      <table class="w-full">
        <thead>
          <tr class="border-b bg-muted/50">
            <th class="p-4 text-left font-medium">Description</th>
            <th class="p-4 text-left font-medium">Shortcut</th>
            <th class="p-4 text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="shortcut in shortcuts"
              :key="shortcut.id"
              class="border-b transition-colors hover:bg-muted/50">
            <td class="p-4">{{ shortcut.description }}</td>
            <td class="p-4">
              <kbd class="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100">
                {{ shortcut.key }}
              </kbd>
            </td>
            <td class="p-4 text-right">
              <Button
                variant="ghost"
                size="sm"
                @click="removeShortcut(shortcut.id!)"
              >
                Remove
              </Button>
            </td>
          </tr>
          <tr v-if="shortcuts.length === 0">
            <td colspan="3" class="p-4 text-center text-muted-foreground">
              No shortcuts added yet.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>