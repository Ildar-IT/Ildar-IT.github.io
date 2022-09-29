

const getTree = (items) => {
  items.forEach((el) => {
    if (el.parent) {
      let isParentIndex = items.findIndex((x) => x.id === el.parent);
      items[isParentIndex].children = [
        ...(items[isParentIndex].children || []),
        el
      ];
    }
  });
 
  return [...items].filter((el) => !el.parent)
};

const items = [
  { id: 1, name: "Item 1", parent: 3 },
  { id: 3, name: "Item 3" },
  { id: 4, name: "Item 4", parent: 1 }
];

const result = getTree(items)
console.log(result);

// const result = getTree(items)

// console.log(result)
// const categories = [
//   { id: 1, name: "name 1", parent: null },
//   { id: 2, name: "name 2", parent: 1 },
//   { id: 3, name: "name 3", parent: 6 },
//   { id: 4, name: "name 4", parent: 5 },
//   { id: 5, name: "name 5", parent: 6 },
//   { id: 6, name: "name 6", parent: null },
//   { id: 7, name: "name 7", parent: null },
//   { id: 9, name: "name 9", parent: 4 }
// ];

// function buildTree(array) {

//   const map = new Map(categories.map((item) => [item.id, item]));
//   for (let item of map.values()) {

//     if (!map.has(item.parent)) {
//       continue;
//     }
//     const parent = map.get(item.parent);

//     parent.children = [...parent.children || [], item];
//     console.log(parent.children)
//   }

//   return [...map.values()].filter((item) => !item.parent);
// }

// const tree = buildTree(categories);
// console.log(tree);
