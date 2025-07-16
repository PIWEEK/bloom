<script setup lang="ts">
import { useAnimate, useInView } from 'motion-v'

const props = defineProps <{
  user: {
    roleName: string
    personId: string
  }
}>()

const avatarUrl = computed(() => {
  switch (props.user.roleName.toLowerCase()) {
    case 'developer':
      return '/images/developer-avatar.png'
    case 'designer':
    case 'ux':
      return '/images/designer-avatar.png'
    case 'student':
      return '/images/student-avatar.png'
    case 'marketing':
      return '/images/marketing-avatar.png'
    default:
      return '/images/developer-avatar.png'
  }
})

const [userCard, animate] = useAnimate()
const isInView = useInView(userCard)

watch(isInView, (inView) => {
  if (inView) {
    animate(userCard.value, { opacity: 1 }, { duration: 1 })
  }
})
</script>

<template>
  <div
    ref="userCard"
    class="user-card"
  >
    <img
      :src="avatarUrl"
      alt=""
    >
    <div class="user-role">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.user-card {
  border: 1px solid #eee;
  padding: 16px;
  aspect-ratio: 1 / 1;
  opacity: 0;
}

.user-role {
  font-weight: bold;
}
</style>
