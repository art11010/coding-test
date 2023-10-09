function solution(numbers, hand) {
    const phoneNumberIdx = {
        1 : [0,0],
        2 : [0,1],
        3 : [0,2],
        4 : [1,0],
        5 : [1,1],
        6 : [1,2],
        7 : [2,0],
        8 : [2,1],
        9 : [2,2],
        0 : [3,1],
    }
    let leftRowIdx = 3, leftColIdx = 0, rightRowIdx = 3, rightColIdx = 2

    let answer = ''

    const calculateDistance = (startRowIdx,startColIdx,targetRowIdx,targetColIdx)=>{
        const rowDistance = Math.abs(startRowIdx-targetRowIdx)
        const colDistance = Math.abs(startColIdx-targetColIdx)

        return rowDistance + colDistance
    }



    numbers.forEach(number=>{
        const [numRowIdx,numColIdx] = phoneNumberIdx[number]

        if(number === 1 || number === 4 || number === 7){
            leftRowIdx = numRowIdx
            leftColIdx = numColIdx

            answer = answer.concat('L')
            return
        }

        if(number === 3 || number === 6 || number === 9){
            rightRowIdx = numRowIdx
            rightColIdx = numColIdx

            answer = answer.concat('R')
            return 
        }

        const leftDistance = calculateDistance(leftRowIdx,leftColIdx,numRowIdx,numColIdx)
        const rightDistance = calculateDistance(rightRowIdx,rightColIdx,numRowIdx,numColIdx)

        if(leftDistance < rightDistance){
            leftRowIdx = numRowIdx
            leftColIdx = numColIdx

            answer = answer.concat('L')
        }
        else if(leftDistance > rightDistance){
            rightRowIdx = numRowIdx
            rightColIdx = numColIdx

            answer = answer.concat('R')
        }
        else{
            if(hand === 'left'){
                leftRowIdx = numRowIdx
                leftColIdx = numColIdx

                answer = answer.concat('L')
            }
            else if(hand === 'right'){
                rightRowIdx = numRowIdx
                rightColIdx = numColIdx

                answer = answer.concat('R')
            }
        }
    })

    return answer
}