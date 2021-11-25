
export class ListNode {
  public val: number;
  public next: ListNode | null;

  constructor(val?: number, next?: ListNode) {
    this.val = val || 0;
    this.next = next || null;
  }
}


export const list1 = {
  val: 5,
  next: {
    val: 7,
    next: {
      val: 9,
      next: null,
    }
  }
}

export const list2 = {
  val: 4,
  next: {
    val: 6,
    next: {
      val: 8,
      next: {
        val: 9,
        next: null,
    },
    }
  }
}
