<template>
  <li class="nav-item dropdown pointer" @click="handleOpenDropdown" ref="dropdownRef">
    <a class="nav-link dropdown-toggle">{{ title }}</a>
    <div :class="{ 'dropdown-menu': true, show: isOpened }">
      <router-link
        v-for="item in items"
        class="dropdown-item"
        :to="item.link"
        >{{ item.title }}</router-link
      >
    </div>
  </li>
</template>
<script>
import { ref, onMounted, onUnmounted } from "vue";

export default {
  name: "ListDropdown",
  props: {
    title: String,
    items: Array,
  },
  setup() {
    const isOpened = ref(false);
    const dropdownRef = ref(null);

    const handleOpenDropdown = () => {
      isOpened.value = true;
    };

    const handleCloseDropdown = (event) => {
      if (!dropdownRef.value?.contains(event.target)) {
        isOpened.value = false;
      }
    };
    onMounted(() => {
      window.addEventListener("click", handleCloseDropdown);
    });
    onUnmounted(() => {
      window.removeEventListener("click", handleCloseDropdown);
    });

    return { isOpened, handleOpenDropdown, handleCloseDropdown, dropdownRef };
  },
};
</script>

<style scoped>
.pointer {
  cursor: pointer;
}
</style>
