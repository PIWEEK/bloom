<script lang="ts" setup>
// import type { UserRole } from '~/shared/types/user';
import { useRolesStore } from '~/stores/roles'

const store = useRolesStore()

await callOnce(store.fetch)

console.log('Roles store initialized', store.roles)
</script>

<template>
  <div className="flex flex-col h-screen p-4 w-max-w-4xl mx-auto">
    <div class="card-wrapper">
      <UserCard
        v-for="(role, index) in store.roles"
        :key="index"
        :user="role"
        :title="role.roleName"
      >
        {{ role.roleName }}
      </UserCard>
    </div>
  </div>
</template>

<style scoped>
.card-wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fill, 150px);
  gap: 16px;
}
</style>
