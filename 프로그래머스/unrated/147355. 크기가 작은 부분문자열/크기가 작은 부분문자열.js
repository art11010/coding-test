function solution(t, p) {
    let answer = 0;
    const pLength = p.length
    t.split('').forEach((startString,idx)=>{
        const sliceT = t.slice(idx,idx+pLength)
        if(sliceT.length === pLength){
            answer += (Number(sliceT) <= Number(p))
        }
    })
    return answer;
}