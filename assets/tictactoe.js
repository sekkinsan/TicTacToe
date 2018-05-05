class TicTacToe {
    constructor(selector) {
        this.rows = 3;
        this.cols = 3;
        this.selector = selector;
        this.move = 1;
        this.play = true;
        this.createBoard();
    }

    createBoard() {
        const $board = $(this.selector);
        for (let row = 0; row <this.rows; row++) {
            const $row = $('<div>')
              .addClass('row');
            for (let col = 0; col < this.cols; col++) {
                const $col = $('<div>')
                  .addClass('col empty');
                  $row.append($col);
            }
            $board.append($row);
        }
    }

    setupEventListeners() {
        const $board = $(this.selector);
        const that = this;

        $board.on('click', '.col.empty', function() {
            if (that.text()=="" && play) {
                if ((move%2)==1) { that.append("X"); }
                else { $that.append("O"); }
            move++;
            }
        });
    }
};