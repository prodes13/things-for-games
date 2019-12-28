// https://www.youtube.com/watch?v=KFEvF_ymuzY&list=PLRqwX-V7Uu6bePNiZLnglXUp2LXIjlCdb&index=3
// 6

var tree;
function setup() {
  createCanvas(600, 400);
  background(51);

  tree = new Tree();
  for(var i = 0; i < 10; i++) {
    tree.addValue(floor(random(0, 100)));
  }
  console.log(tree);
  tree.traverse();

  var result = tree.search(10);
  if(result === null) {
    console.log('Not found!');
  } else {
    console.log(this);
  }
}
