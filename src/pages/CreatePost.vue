<template>
  <div class="container">
    <form action="">
      <div class="mb-3">
        <label for="title" class="form-label">Название</label>
        <input
          class="form-control"
          id="title"
          v-model="title"
          placeholder="Любое название"
        />
      </div>
      <div class="mb-3">
        <label for="desc" class="form-label">Описание</label>
        <textarea class="form-control" id="desc" v-model="desc" rows="3" />
      </div>
      <div class="mb-3">
        <label for="formFileMultiple" class="form-label">Добавить файлы</label>
        <input
          :onchange="onChangeImages"
          accept="image/png, image/gif, image/jpeg"
          class="form-control"
          type="file"
          id="formFileMultiple"
          multiple
        />
      </div>
      <button type="button" class="btn btn-primary" @click="handleCreatePost">
        Primary
      </button>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";

import { uploadFiles } from "../store/posts";

export default {
  name: "App",
  components: {},
  setup() {
    const title = ref("");
    const desc = ref("");
    const files = ref([]);

    const onChangeImages = (event) => {
      files.value = event.target.files;
    };

    const handleCreatePost = async () => {
      const res = await uploadFiles(files.value);
      console.log(res);
    };
    return { title, desc, files, onChangeImages, handleCreatePost };
  },
};
</script>
