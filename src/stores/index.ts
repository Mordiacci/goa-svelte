import { writable } from 'svelte/store';
import UsersAPI from '$lib/api/UsersAPI';
import errors from '$lib/api/errors';

/**
 * Creates a writable store to manage user state and fetch user data.
 * @returns {object} An object with `subscribe` and `fetchUser` methods.
 */
function createUser() {
  const { subscribe, set, update } = writable({
    isLoading: false,
    data: null,
  });

  /**
   * Fetches user data from the API and updates the store state.
   * @returns {Promise<boolean>} `true` if successful, `false` otherwise.
   */
  async function fetchUser() {
    update((state) => ({ ...state, isLoading: true }));

    try {
      const response = await UsersAPI.userInfo();

      if (errors.isError(response)) {
        console.warn("API returned an error:", response);
        set({ isLoading: false, data: null });
        return false;
      }

      set({ isLoading: false, data: response });
      return true;
    } catch (err) {
      console.error("Failed to fetch user:", err.message || err);
      set({ isLoading: false, data: null });
      return false;
    }
  }

  return {
    subscribe,
    fetchUser,
  };
}

// Export the user store instance
export const user = createUser();
