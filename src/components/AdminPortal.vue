<script setup>
import { ref } from 'vue';

const emit = defineEmits(['close', 'login']);

const username = ref('');
const password = ref('');
const error = ref('');
const isLoading = ref(false);
const showPassword = ref(false);

const handleLogin = async () => {
  if (!username.value || !password.value) {
    error.value = 'Please enter username and password';
    return;
  }

  isLoading.value = true;
  error.value = '';

  setTimeout(() => {
    if (username.value === 'arsn' && password.value === 'sulfideacidic167') {
      emit('login', { username: username.value });
      username.value = '';
      password.value = '';
    } else {
      error.value = 'Invalid username or password';
    }
    isLoading.value = false;
  }, 500);
};

const handleClose = () => {
  username.value = '';
  password.value = '';
  error.value = '';
  showPassword.value = false;
  emit('close');
};

const handleKeyup = (e) => {
  if (e.key === 'Enter') {
    handleLogin();
  }
};

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
};
</script>

<template>
  <div class="admin-portal-overlay" @click="handleClose">
    <div class="admin-portal-modal" @click.stop>
      <div class="admin-portal-header">
        <h2>Admin Portal</h2>
        <button class="admin-portal-close" @click="handleClose" aria-label="Close">×</button>
      </div>

      <div class="admin-portal-content">
        <div class="admin-form-group">
          <label for="username">Username</label>
          <input
            id="username"
            v-model="username"
            type="text"
            placeholder="Enter username"
            @keyup="handleKeyup"
            class="admin-input"
          />
        </div>

        <div class="admin-form-group">
          <label for="password">Password</label>
          <div class="password-input-wrapper">
            <input
              id="password"
              v-model="password"
              :type="showPassword ? 'text' : 'password'"
              placeholder="Enter password"
              @keyup="handleKeyup"
              class="admin-input"
            />
            <button 
              type="button"
              class="password-toggle-btn"
              @click="togglePasswordVisibility"
              :aria-label="showPassword ? 'Hide password' : 'Show password'"
            >
              {{ showPassword ? '👁️' : '👁️‍🗨️' }}
            </button>
          </div>
        </div>

        <div v-if="error" class="admin-error">{{ error }}</div>

        <button
          @click="handleLogin"
          :disabled="isLoading"
          class="admin-login-btn"
        >
          {{ isLoading ? 'Logging in...' : 'Login' }}
        </button>
      </div>
    </div>
  </div>
</template>

