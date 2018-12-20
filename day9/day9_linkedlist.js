const LinkedList = function () {
  this.head = null
  this.tail = null
}

const Node = function (value, next, prev) {
  this.value = value
  this.next = next
  this.prev = prev
}
