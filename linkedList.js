class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

const countNodes = (head) => {
  let count = 1
  let current = head
  while (current.next !== null) {
    current = current.next
    count += 1
  }
  return count
}

let nodeA = new Node(6)
let nodeB = new Node(3)
let nodeC = new Node(4)
let nodeD = new Node(2)
let nodeE = new Node(1)
let nodeF = new Node(23)

nodeA.next = nodeB
nodeB.next = nodeC
nodeC.next = nodeD
nodeD.next = nodeE
nodeE.next = nodeF

console.log("The linked list length is ", countNodes(nodeA))