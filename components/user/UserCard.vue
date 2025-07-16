<script setup lang="ts">
  const props = defineProps <{
    user: {
      roleName: string;
      personId: string;
    };
  }>();

  const avatarUrl = computed(() => {
    switch (props.user.roleName.toLowerCase()) {
      case 'developer':
        return '/images/developer-avatar.png';
      case 'designer':
      case 'ux':
        return '/images/designer-avatar.png';
      case 'student':
        return '/images/student-avatar.png';
      case 'marketing':
        return '/images/marketing-avatar.png';
      default:
        return '/images/developer-avatar.png';
    }
  });
</script>

<template>
  <div class="user-card">
    <img :src="avatarUrl" alt="">
    <div class="user-role">
      <slot/>
    </div>
  </div>
</template>

<style scoped>
.user-card {
  border: 1px solid #eee;
  padding: 16px;
}

.user-role {
  font-weight: bold;
}
</style>

