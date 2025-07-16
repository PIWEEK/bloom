<script lang="ts" setup>
// import type { UserRole } from '~/shared/types/user';
import { useRolesStore } from '~/stores/roles'

const store = useRolesStore()

await callOnce(store.fetch)
</script>

<template>
  <div className="flex flex-col h-screen p-4 w-max-w-4xl mx-auto">
    <div class="card-wrapper">
      <div
        v-for="(role, index) in store.roles"
        :key="index"
      >
        <UserCard
          :user="role"
          :title="role.roleName"
        >
          {{ role.roleName }}
        </UserCard>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1rem;
}
</style>
