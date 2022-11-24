<template>
  <v-app>
    <app-bar/>
    <side-nav/>
    <v-main>
      <v-container class="py-8 px-6" fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
    <app-footer/>
  </v-app>
</template>

<script setup>
import AppBar from '@/components/AppBar.vue';
import SideNav from '@/components/SideNav.vue';
import AppFooter from '@/components/AppFooter.vue';
</script>
