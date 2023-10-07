function solution(survey, choices) {
    const initialSetting = 'RCJA';
    const mbtiTypeScore = {}
    const arr = ['R','T','C','F','J','M','A','N']
    const twoDemArr = 
    arr.map((type)=>{
      mbtiTypeScore[type] = 0  
    })

    const score = {
        1:3,
        2:2,
        3:1,
        4:0,
        5:1,
        6:2,
        7:3
    }

    survey.forEach((mbti,idx)=>{
        const [front,end] = mbti.split('')
        const mbtiScore = score[choices[idx]]
        if(choices[idx] <= 3){
            mbtiTypeScore[front] += mbtiScore
        }
        else if(choices[idx] >= 5){
            mbtiTypeScore[end] += mbtiScore
        }
    })

    const answer = initialSetting.replace(/R/,(match)=>{
        return mbtiTypeScore['R'] < mbtiTypeScore['T'] ? 'T' : match
    }).replace(/C/,(match)=>{
        return mbtiTypeScore['C'] < mbtiTypeScore['F'] ? 'F' : match
    }).replace(/J/,(match)=>{
        return mbtiTypeScore['J'] < mbtiTypeScore['M'] ? 'M' : match
    }).replace(/A/,(match)=>{
        return mbtiTypeScore['A'] < mbtiTypeScore['N'] ? 'N' : match
    })

    return answer
}