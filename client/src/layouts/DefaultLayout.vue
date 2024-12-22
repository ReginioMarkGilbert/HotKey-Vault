<script setup lang="ts">
// Layout component that wraps the main content
</script>

<template>
  <div class="min-h-screen bg-background">
    <header class="border-b">
      <div class="container py-4">
        <nav class="flex items-center justify-between">
          <h1 class="text-xl font-bold">Hotkey Vault</h1>
          <div class="flex items-center gap-4">
            <!-- Add navigation items here if needed -->
          </div>
        </nav>
      </div>
    </header>

    <main class="container py-8">
      <slot />
    </main>

    <footer class="border-t">
      <div class="container py-4 text-sm text-muted-foreground">
        <p>© 2024 Hotkey Vault. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>