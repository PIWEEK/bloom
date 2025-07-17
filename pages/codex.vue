<script lang="ts" setup>
import { useRolesStore } from '~/stores/roles'

const store = useRolesStore()

await callOnce(store.fetch)
</script>

<template>
  <div class="flex flex-col h-screen p-4 w-max-w-4xl mx-auto">
    <div

      class="card-wrapper"
    >
      <template
        v-for="(role, index) in store.roles"
        :key="index"
      >
        <UserDeveloperCard
          v-if="role.roleName.toLowerCase() === 'developer'"
        />
        <UserDesignerCard
          v-if="role.roleName.toLowerCase() === 'designer'"
        />
        <UserUxCard
          v-if="role.roleName.toLowerCase() === 'ux'"
        />
        <UserCard
          v-if="role.roleName.toLowerCase().includes('student') || role.roleName.toLowerCase().includes('marketing')"
          :user="role"
          :title="role.roleName"
        >
          {{ role.roleName }}
        </UserCard>
      </template>
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
