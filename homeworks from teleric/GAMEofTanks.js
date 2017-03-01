// Game of Tanks 
// mv id n dir - 
//x id dir
//N - br komandi
function solve(args) {
    const EMPTY_FIELD = -1;
    const DEBRI = 'X';

   const arr = args[0].split(' ').map(Number);
   const rows = arr[0];
   const cols = arr[1];

   let field = new Array(rows);
   field.fill(EMPTY_FIELD);
    for(let i in field ){
       field[i] = new Array(cols);
       field[i].fill(EMPTY_FIELD);
    }

    for (let i in tankPositions) {
        field[tankPositions[i].row][tankPositions[i].col] = i;
    }
   
    args[1].split(';').forEach(function(coord) {
     const arr =  coord.split(' ').map(Number);
     const x = arr[0];
     const y = arr[1];
     field [x][y] = DEBRI;
    });

   // commandSplit
   //funkcia za mv na tanka 
   let tankPositions = [
       {row: 0 , col: 0}, // tank0
       {row: 0 , col: 0}, // tank1
       {row: 0 , col: 0}, // tank2
       {row: 0 , col: 0}, // tank3
       {row: rows -1 , col: cols -1}, // tank4
       {row: rows -1 , col: col-1}, // tank5
       {row: rows -1 , col: col - 1}, // tank6
       {row: rows -1,  col: cols -1}, // tank7
   ];
   let playerTanks = [4,4];
   //move
   function moveTank(id, n , dir) {
       let deltaRow, deltaCol;
       if(dir === 'u') {
           deltaRow = -1;
       }
       else if (dir === 'd') {
           deltaRow = +1;
       }
       if(dir === 'l') {
           deltaRow = -1;
       }
       else if (dir === 'r') {
           deltaRow = +1;
       }
       else {
           //wtf
       }

       let tankRow = tankPositions[id].row;
       let tankCol = tankPositions[id].col;
       field[tankRow][tankCol] = EMPTY_FIELD;
       while(n>0) {
           const newPosRow = tankRow + deltaRow;
           const newPosCol = tankCol + deltaCol;
           if (newPosRow < 0 || newPosRow > rows -1 ) {
               break;
           }
           if (newPosCol < 0 || newPosCol > cols -1) {
               break;
           }
           if(field[newPosRow][newPosCol] ! ==EMPTY_FIELD) {
               bnrek;
           }
           tankRow = newPosRow;
           tankCol = newPosCol;
           n -= 1;
       }
       tankPositions[id].row = tankRow;
       tankPositions[id].col = tankCol;
       field[tankRow][tankCol] = id;
// shooting conditions
        let shotRow = tankPositions[id].row + deltaRow;
        let shotCol = tankPositions[id].col + deltaCol;

       while(0 <=shotRow && shotRow < rows && 0 <= shotCol && showCol < cols) { 
           if(field[shotRow][shotCol] === EMPTY_FIELD) {
               shotRow += deltaRow;
               shotCol += deltaCol;
           } else if (field[shotRow][shotCol] === DEBRI) {
               field[shotRow][shotCol] = EMPTY_FIELD;
               break;
           }
           else {
               const deadTankId = field[shotRow][shotCol];
               field[shotRow][shotCol] = EMPTY_FIELD;
               //const playerId = deadTankId / 4 | 0;
               const playerId = deadTankId < 4 ? 0 : 1;
               playerTanks[playerId] -= 1;
               if(playerTanks[playerId] === 0) {
                   const loserName = ['Koceto', 'Cuki'][playerId];
                   console.log('{Loser Name is gg}');
               }
               console.log('Tank ${deadTankId} is gg');
           }
       }
    //shoot 
    function shootWithTank(id, dir) {

    }

   const n = +args[2];
   for(let i = 3; i < n+3; i += 1) {
       const commandSplit = args[i].split(' ');
       if(commandSplit[0] === 'mv') {
           moveTank(+commandSplit[1, +commandSplit[2], +commandSplit[3]]);
       }
       else if(commandSplit[0] === 'x'){

       }
   }

console.log(field);
}

    solve([
        '5 5',
        '2 0; 2 1; 2 2; 2 3; 2 4',
        '13',
        'mv 7 2 1',
        'x 7 u',
        'x 0 d',
        'x 6 u',
        'x 5 u',
        'x 2d',
        'x 3 d',
        'mv 4 1 u',
        'mv 4 4 1',
        'mv 1 1 1,',
        'x 4 u',
        'mv 4 2 r',
        'x 2 d',
])}