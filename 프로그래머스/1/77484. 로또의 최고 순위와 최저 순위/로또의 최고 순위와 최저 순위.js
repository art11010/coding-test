function solution(lottos, win_nums) {
    // 1등 6개 / 2등 5개 / 3등 4개 / 4등 3개 / 5등 2개 / 그 외 낙첨
    const rank = {
        6 : 1,
        5 : 2,
        4 : 3,
        3 : 4,
        2 : 5,
        1 : 6,
        0 : 6
    }
    let check = 0;
    for(let i = 0; i < win_nums.length; i++){
        if(lottos[i] !== 0){
            if(win_nums.includes(lottos[i])) check++;
        }else continue;
    }
    let answer = [rank[check + lottos.filter(v => v === 0).length], rank[check]];


    return answer;
}
