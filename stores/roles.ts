import type { UserRole } from "~/shared/types/user";

interface RolesStoreState {
  roles: UserRole[];
}

export const useRolesStore = defineStore("rolesStore", {
  state: (): RolesStoreState => ({
    roles: [],
  }),
  actions: {
    async fetch() {
      const { data } = await useFetch("/api/roles");

      const roles: UserRole[] = data.value?.results
        ?.filter(role => role[0] !== null && role[1] !== null)
        .map(role => {
          return {
            role: role[0],
            personId: role[1],
          };
        }) ?? [];

      this.roles = roles;
      return roles;
    },
    add(newRoles: UserRole[]) {
      this.roles.push(...newRoles);
    }
  },
});
