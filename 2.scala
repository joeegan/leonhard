import scala.collection.mutable.ListBuffer

def fibonacci(limit: Int, arr: ListBuffer[Int], prevPrevTerm: Int, prevTerm: Int): List[Int] = {
	val term = prevTerm + prevPrevTerm;
	if (term <= limit) {
		arr += (term);
		fibonacci(limit, arr, prevTerm, term);
	}
	else arr.toList;
}

def sumEvens(nums: List[Int], result: Int = 0): Int = {
	nums.filter(a => a % 2 == 0).sum
}

val arr = new ListBuffer[Int]()
arr += 1
arr += 2
println(sumEvens(fibonacci(4000000, arr, 1, 2)))