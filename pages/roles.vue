<script lang="ts" setup>
import type { UserRole } from '~/shared/types/user'
import { useRolesStore } from '~/stores/roles'

const store = useRolesStore()
const data = ref(store)
const fetchedNewRoles = ref<UserRole[]>([])
let interval: NodeJS.Timeout | null = null

const developerRoles = computed(() => {
  return data.value.roles
    .filter((r) => {
      return r.roleName.toLowerCase() === 'developer'
    })
    .map((r) => {
      return r.roleName
    })
})
const designerRoles = computed(() => {
  return data.value.roles
    .filter((r) => {
      return (
        r.roleName.toLowerCase() === 'designer'
        || r.roleName.toLowerCase() === 'ux'
      )
    })
    .map((r) => {
      return r.roleName
    })
})
const studentRoles = computed(() => {
  return data.value.roles
    .filter((r) => {
      return r.roleName.toLowerCase().includes('student')
    })
    .map((r) => {
      return r.roleName
    })
})
const otherRoles = computed(() => {
  return data.value.roles
    .filter((r) => {
      return (
        r.roleName.toLowerCase() !== 'developer'
        && r.roleName.toLowerCase() !== 'designer'
        && r.roleName.toLowerCase() !== 'ux'
        && !r.roleName.toLowerCase().includes('student')
      )
    })
    .map((r) => {
      return r.roleName
    })
})

store.fetch()

onBeforeMount(() => {
  interval = setInterval(async () => {
    const res = await $fetch('/api/roles')
    fetchedNewRoles.value = res.results
      .filter(role => role[0] !== null && role[1] !== null)
      .map(role => ({
        roleName: role[0],
        personId: role[1],
      }))
    filterNewRoles()
  }, 10000) // Refresh every 10 seconds
})

onUnmounted(() => {
  if (interval) {
    clearInterval(interval)
  }
})

const filterNewRoles = () => {
  const existingRoleIds = new Set(data.value.roles.map(role => role.personId))
  fetchedNewRoles.value = fetchedNewRoles.value.filter(
    role => !existingRoleIds.has(role.personId),
  )

  if (fetchedNewRoles.value.length > 0) {
    store.add(fetchedNewRoles.value)
  }
}
</script>

<template>
  <div className="flex flex-col h-screen p-4 w-max-w-4xl mx-auto">
    <h1
      className="font-bold text-3xl mb-4"
      title="Penpot members by role in the past month"
    >
      Penpot members by role in the past month
    </h1>
    <div>
      <h2>Developers</h2>
      <ul class="flex flex-wrap gap-4">
        <li
          v-for="(role, index) in developerRoles"
          :key="index"
          :title="role"
        >
          ⌨️
        </li>
      </ul>
      <h2>Designers</h2>
      <ul class="flex flex-wrap gap-4">
        <li
          v-for="(role, index) in designerRoles"
          :key="index"
          :title="role"
        >
          🎨
        </li>
      </ul>
      <h2>Student</h2>
      <ul class="flex flex-wrap gap-4">
        <li
          v-for="(role, index) in studentRoles"
          :key="index"
          :title="role"
        >
          👨‍🎓
        </li>
      </ul>
      <h2>Other</h2>
      <ul class="flex flex-wrap gap-4">
        <li
          v-for="(role, index) in otherRoles"
          :key="index"
          :title="role"
        >
          😺
        </li>
      </ul>
      <button
        class="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        @click="store.fetch"
      >
        Refresh Roles
      </button>
    </div>
  </div>
</template>

<style></style>
