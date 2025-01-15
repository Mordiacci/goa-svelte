import { writable } from 'svelte/store';
import UsersAPI from '$lib/api/UsersAPI';
import errors from '$lib/api/errors';

function createUser() {
  const { subscribe, update } = writable({ isLoading: false, data: null });

  async function fetchUser() {
    update((state) => ({ ...state, isLoading: true }));

    try {
      const response = await UsersAPI.userInfo();
      if (errors.isError(response)) {
        update(() => ({ isLoading: false, data: null }));
        return false;
      }

      update(() => ({ isLoading: false, data: response }));
      return true;
    } catch (err) {
      console.error("Failed to fetch user:", err);
      update(() => ({ isLoading: false, data: null }));
      return false;
    }
  }

  return {
    subscribe,
    fetchUser,
  };
}

export const user = createUser();