function solution(id_list, report, k) {
    const reportIdsSet = {}
    const reportCountsSet = {}

    id_list.forEach((id)=>{
        reportIdsSet[id] = []
        reportCountsSet[id] = 0
    })

    report.forEach((reportData)=>{
        const [reporter,reported] = reportData.split(' ')
        if(!reportIdsSet[reporter].includes(reported)){
            reportIdsSet[reporter].push(reported)
            reportCountsSet[reported]++
        }
    })

    const pauseIds = Object.entries(reportCountsSet).filter(([id,reportCount])=>reportCount >= k).map(([id,reportCount])=>id)

    const answer = id_list.map((id)=>{
        const reportIds = reportIdsSet[id]
        let reportCount = 0

        reportIds.forEach((reportId)=>{
            if(pauseIds.includes(reportId)){
                reportCount++
            }
        })
        return reportCount
    })

    return answer;
}