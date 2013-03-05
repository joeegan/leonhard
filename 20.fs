let timesDescending top =
    let mutable i = top : int
    let mutable sum = (float 1.0)
    while i <= top && i > 0 do
      sum <- sum * (float i)
      i <- i - 1
    sum

let addSumOfDigits num =
    let arr = num.ToString().Replace(".","").ToCharArray()
    Console.Write(arr)
    List.reduce (fun prev curr -> prev + curr) arr

printfn "%f" (timesDescending (100))
printfn "addSumOfDigits %A " (addSumOfDigits (timesDescending 100))