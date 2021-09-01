<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated height-hint= 200px>
      <q-toolbar>
        <q-toolbar-title class="text-center"> Rick and Morty </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MainLayout'
}
</script>
