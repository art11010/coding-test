function solution(arr) {
    arr.sort((a,b)=>b-a)
    let answer,isDivide=false,whileCount = arr[0]
    while(!isDivide){
        isDivide = arr.every((number)=>whileCount%number === 0)
        if(isDivide){
            answer = whileCount
            break
        }
        whileCount++
    }
    return answer
}