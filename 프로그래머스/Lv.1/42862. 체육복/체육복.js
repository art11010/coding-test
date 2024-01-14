function solution(n, lost, reserve) {
    let answer = 0;
    let lost_filter;
    let reserve_filter;

    lost_filter = lost.filter(e => !reserve.includes(e)).sort((a, b)=> a-b)
    reserve_filter = reserve.filter(e => !lost.includes(e)).sort((a, b)=> a-b)

    for(let i=0; i<lost_filter.length; i++) {
        for(let j=0; j<reserve_filter.length; j++) {
            if(lost_filter[i]-1 == reserve_filter[j] || lost_filter[i]+1 == reserve_filter[j]) {
                lost_filter.shift();
            }
        }
    }

    answer = n - lost_filter.length;

    return answer;
}