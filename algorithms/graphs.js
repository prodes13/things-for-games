class Graph {
	constructor() {
		this.adjacencyList = {};
	}
	addVertex(vertex) {
		if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
	}
	addEdge(v1, v2) {
		this.adjacencyList[v1].push(v2);
		this.adjacencyList[v2].push(v1);
	}
	removeEdge(vertex1, vertex2) {
		this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
				item => item !== vertex2
			);
		this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
				item => item !== vertex1
			);
	}
}

let g = new Graph();
g.addVertex("Dallas");
g.addVertex("Tokyo");
g.addVertex("Aspen");
g.addEdge("Dallas", "Tokyo");
g.addEdge("Dallas", "Aspen");
g.removeEdge("Dallas", "Aspen");