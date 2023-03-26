<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
    <div class="container header-width">
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
          <ListDropdown title="Портфолио" :items="portfolioLinks" />
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
          <ListDropdown title="Методическая копилка" :items="methodLinks" />
          <ListDropdown title="Моя группа" :items="myGroupLinks" />
          <li class="nav-item active">
            <router-link class="nav-link" to="/for-parents"
              >Для вас родители</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="main">
    <div class="container">
      <router-view />
    </div>
  </div>
  <div class="footer">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <hr />
          <p> Сайт посетили {{ visitCount }} раз</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ListDropdown from "./components/ListDropdown.vue";

import "bootstrap/dist/css/bootstrap-grid.css";
import "bootstrap/dist/css/bootstrap.min.css";

const portfolioLinks = [
  { title: "Портфолио документов", link: "/portfolio/documents" },
  { title: "Мои достижения", link: "/portfolio/advantages" },
  { title: "Достижения воспитанников", link: "/portfolio/children-advantages" },
];
const methodLinks = [
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

const myGroupLinks = [
  { title: "Утренники", link: "/my-group/matinees" },
  { title: "Воспитательная работа", link: "/my-group/work" },
  { title: "Осень", link: "/my-group/autumn"},
  { title: "Эксперементирование", link: "/my-group/experimentation" },
  { title: "Новый год", link: "/my-group/newYear" },
  { title: "Предметно-пространственная среда", link: "/my-group/spatialEnvironment" },
  { title: "Зима", link: "/my-group/Winter" },
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
      portfolioLinks,
      methodLinks,
      myGroupLinks
    };
  },
};
</script>
<style>
@import "./main.css";

.main {
  min-height: calc(100vh - 160px);
}
</style>
