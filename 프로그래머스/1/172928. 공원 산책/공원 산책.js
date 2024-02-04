function solution(park, routes) {
    let answer = [];
    let direction = {
        'N': [-1, 0],
        'S': [1, 0],
        'W': [0, -1],
        'E': [0, 1]
    };
    let start_point = [];
    let max_x = park.length-1;
    let max_y = park[0].length-1;

    for (let i = 0; i < park.length; i++) {
        for (let j = 0; j < park[i].length; j++) {
            if (park[i][j] == 'S') {
                start_point = [i, j];
            }
        }
    }

    routes.forEach(e => {
        let [dir, distance] = e.split(' ');
        let [nx, ny] = [start_point[0], start_point[1]];
        let isTrue = true;
        for (let i = 0; i < Number(distance); i++) {
            nx += direction[dir][0];
            ny += direction[dir][1];
            if (nx < 0 || nx > max_x || ny < 0 || ny > max_y || park[nx][ny] == 'X') {
                isTrue = false;
                break;
            }
        }

        if (isTrue) {
            start_point = [nx, ny];
        }
    });

    return start_point;
}