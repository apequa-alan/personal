<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
    <div class="container">
      <div
        class="navbar-collapse offcanvas-collapse"
        id="navbarsExampleDefault"
      >
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link to="/" class="nav-link">Главная</router-link>
          </li>
          <li class="nav-item active">
            <router-link class="nav-link" to="/news">Новости</router-link>
          </li>
          <ListDropdown title="Портфолио" :items="firstLinks" />
          <li class="nav-item active">
            <router-link class="nav-link" to="/project-deals"
              >Проектная деятельность</router-link
            >
          </li>
          <li class="nav-item active">
            <router-link class="nav-link" to="/section-deals"
              >Куржковая работа</router-link
            >
          </li>
          <ListDropdown title="Методическая копилка" :items="secondLinks" />
          <li class="nav-item active">
            <router-link class="nav-link" to="/my-group"
              >Моя группа</router-link
            >
          </li>
          <li class="nav-item active">
            <router-link class="nav-link" to="/for-parents"
              >Для вас родители</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="container">
    <router-view />
    <div class="footer">
      <hr />
      <p> Сайт посетило {{ visitCount }} гостей</p>
    </div>
  </div>
</template>

<script>
import ListDropdown from "./components/ListDropdown.vue";

import "bootstrap/dist/css/bootstrap-grid.css";
import "bootstrap/dist/css/bootstrap.min.css";

const firstLinks = [
  { title: "Портфолио документов", link: "/portfolio/documents" },
  { title: "Мои достижения", link: "/portfolio/advantages" },
  { title: "Достижения воспитанников", link: "/portfolio/children-advantages" },
];
const secondLinks = [
  { title: "Программы", link: "/methods/programs" },
  { title: "Методические разработки", link: "/methods/inventions" },
  { title: "Конспекты НОД", link: "/methods/nod" },
  {
    title: "Трансляция педагогического опыта",
    link: "/methods/experience-translation",
  },
  {
    title: "Сценарии утренников и праздников",
    link: "/methods/entertainment-scripts",
  },
];

export default {
  name: "App",
  components: {
    ListDropdown,
  },
  setup() {
    const startDate = new Date("2023.02.18");
    const now = new Date();

    return {
      visitCount: Math.floor((now.getTime() - startDate.getTime()) / 1000000),
      secondLinks,
      firstLinks,
    };
  },
};
</script>
<style scoped>
.footer {
  width: 320px;
  position: fixed;
  bottom: 0;
}
</style>
