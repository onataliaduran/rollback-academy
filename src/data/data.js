export const allCourses = [
  {
    id: 1,
    img:
      "https://firebasestorage.googleapis.com/v0/b/pruebachicos-ojdmti.appspot.com/o/rollback%2Falgorithm%20(1).png?alt=media&token=e05334a4-1cd4-476d-b333-11a9f78c7966",
    title: "Algorithms",
    description:
      "Bacon ipsum dolor amet shoulder doner beef, brisket short ribs chuck bresaola pork loin short loin filet mignon.",
    price: 10.99,
    category: "programingFundamentals",
  },
  {
    id: 2,
    img:
      "https://firebasestorage.googleapis.com/v0/b/pruebachicos-ojdmti.appspot.com/o/rollback%2Fdt.png?alt=media&token=f18370b7-ba7e-487d-b095-aa594fcc7a44",
    title: "Data Structures",
    description:
      "Bacon ipsum dolor amet shoulder doner beef, brisket short ribs chuck bresaola pork loin short loin filet mignon.",
    price: 10.99,
    category: "programingFundamentals",
  },
  {
    id: 3,
    img:
      "https://firebasestorage.googleapis.com/v0/b/pruebachicos-ojdmti.appspot.com/o/rollback%2Funnamed%20(1).png?alt=media&token=fd7b92c7-c4f3-484b-9d9c-b8bd26647328",
    title: "Design Patterns",
    description:
      "Bacon ipsum dolor amet shoulder doner beef, brisket short ribs chuck bresaola pork loin short loin filet mignon.",
    price: 10.99,
    category: "programingFundamentals",
  },
  {
    id: 4,
    img:
      "https://firebasestorage.googleapis.com/v0/b/pruebachicos-ojdmti.appspot.com/o/react%20(1).png?alt=media&token=cb0e42d0-afb5-48b2-ac55-38c2bdd43218",
    title: "React",
    description:
      "Bacon ipsum dolor amet shoulder doner beef, brisket short ribs chuck bresaola pork loin short loin filet mignon.",
    price: 9.99,
    category: "frontend",
  },
  {
    id: 5,
    img:
      "https://firebasestorage.googleapis.com/v0/b/pruebachicos-ojdmti.appspot.com/o/rollback%2Fangular%20(1).png?alt=media&token=d71e11d4-7535-4e9d-8226-c38b9bda687b",
    title: "Angular",
    description:
      "Bacon ipsum dolor amet shoulder doner beef, brisket short ribs chuck bresaola pork loin short loin filet mignon.",
    price: 9.99,
    category: "frontend",
  },
  {
    id: 6,
    img:
      "https://firebasestorage.googleapis.com/v0/b/pruebachicos-ojdmti.appspot.com/o/rollback%2Fvue-logo%20(1).png?alt=media&token=009ba371-b253-469c-ab67-e9ca1c64e643",
    title: "Vue",
    description:
      "Bacon ipsum dolor amet shoulder doner beef, brisket short ribs chuck bresaola pork loin short loin filet mignon.",
    price: 9.99,
    category: "frontend",
  },
  {
    id: 7,
    title: "Node",
    description:
      "Bacon ipsum dolor amet shoulder doner beef, brisket short ribs chuck bresaola pork loin short loin filet mignon.",
    price: 9.99,
    category: "backend",
  },
  {
    id: 8,
    title: "Deno",
    description:
      "Bacon ipsum dolor amet shoulder doner beef, brisket short ribs chuck bresaola pork loin short loin filet mignon.",
    price: 9.99,
    category: "backend",
  },
];

export const getCategory = (category) =>
  allCourses.filter((course) => course.category === category);