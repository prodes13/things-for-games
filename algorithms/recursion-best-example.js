function printChildren() {

}

function printChildrenRecursive(t) {
  if(t.children.length === 0) return;
  t.children.forEach(child => {
    console.log(child.name);
    printChildrenRecursive(child);
  });
}

const tree = {
  name: 'John',
  children: [
    {
      name: 'Jim',
      children: []
    },
    {
      name: 'Zoe',
      children: [
        { 
          name: 'Kyle', 
          children: [
            {
              name: 'Teddy',
              children: []
            }
          ] 
        },
        { name: 'Sophia', children: []}
      ]
    }
  ]
}

printChildrenRecursive(tree);