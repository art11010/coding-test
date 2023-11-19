function solution(s) {
    let convertCount = 0, deleteZeroCount = 0
    while(s !== '1'){
        const beforeSLength = s.length
        const nowSLength = s.replace(/0/gi,'').length

        convertCount++
        deleteZeroCount += (beforeSLength - nowSLength)

        s = nowSLength.toString(2)
    }
    const answer = [convertCount, deleteZeroCount]
    return answer
}