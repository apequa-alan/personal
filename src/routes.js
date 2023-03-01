export default [
  {
    path: "/",
    name: "Home",
    component: () => import("./pages/Main.vue"),
  },
  {
    path: "/",
    name: "Home",
    component: () => import("./pages/Main.vue"),
  },
  {
    path: "/news",
    name: "News",
    component: () => import("./pages/News.vue"),
  },
  {
    path: "/news/",
    name: "News",
    component: () => import("./pages/news/Experimenting.vue"),
  },
  {
    path: "/news/",
    name: "News",
    component: () => import("./pages/news/FatherlandDay.vue"),
  },
  {
    path: "/news/",
    name: "News",
    component: () => import("./pages/news/GiftDad.vue"),
  },
  {
    path: "/news/",
    name: "News",
    component: () => import("./pages/news/Presentation.vue"),
  },
  {
    path: "/news/",
    name: "News",
    component: () => import("./pages/news/Stock.vue"),
  },
 

  {
    path: "/portfolio/documents",
    name: "documents",
    component: () => import("./pages/PortfolioPages/Documents.vue"),
  },
  {
    path: "/portfolio/advantages",
    name: "Advantages",
    component: () => import("./pages/PortfolioPages/Advantages.vue"),
  },
  {
    path: "/portfolio/children-advantages",
    name: "ChildrenAdvantages",
    component: () => import("./pages/PortfolioPages/ChildrenAdvantages.vue"),
  },
  {
    path: "/project-deals",
    name: "ProjectDeals",
    component: () => import("./pages/ProjectDeals.vue"),
  },

  {
    path: "/section-deals",
    name: "SectionDeals",
    component: () => import("./pages/SectionDeals.vue"),
  },

  {
    path: "/methods/programs",
    name: "Methods/Programs",
    component: () => import("./pages/Methods/Programs.vue"),
  },
  {
    path: "/methods/inventions",
    name: "Methods/Inventions",
    component: () => import("./pages/Methods/Inventions.vue"),
  },
  {
    path: "/methods/nod",
    name: "Methods/Nod",
    component: () => import("./pages/Methods/Nod.vue"),
  },
  {
    path: "/methods/experience-translation",
    name: "Methods/ExperienceTranslation",
    component: () => import("./pages/Methods/ExperienceTranslation.vue"),
  },
  {
    path: "/methods/entertainment-scripts",
    name: "Methods/EntertainmentScripts",
    component: () => import("./pages/Methods/EntertainmentScripts.vue"),
  },

  {
    path: "/my-group/matinees",
    name: "Matinees",
    component: () => import("./pages/MyGroup/Matinees.vue"),
  },
  {
    path: "/my-group/work",
    name: "Work",
    component: () => import("./pages/MyGroup/Work.vue"),
  },

  {
    path: "/for-parents",
    name: "ForParents",
    component: () => import("./pages/ForParents.vue"),
  },

  {
    path: "/my-group/winter",
    name: "Winter",
    component: () => import("./pages/MyGroup/Winter.vue"),
  },

  {
    path: "/my-group/newYear",
    name: "NewYear",
    component: () => import("./pages/MyGroup/newYear.vue"),
  },

  {
    path: "/my-group/autumn",
    name: "Autumn",
    component: () => import("./pages/MyGroup/autumn.vue"),
  },

  {
    path: "/my-group/spatialEnvironment",
    name: "SpatialEnvironment",
    component: () => import("./pages/MyGroup/spatialEnvironment.vue"),
  },

  {
    path: "/my-group/experimentation",
    name: "Experimentation",
    component: () => import("./pages/MyGroup/experimentation.vue"),
  },
];
