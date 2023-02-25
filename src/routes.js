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
];
