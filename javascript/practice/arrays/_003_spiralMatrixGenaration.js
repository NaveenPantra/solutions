function matrixGeneration(dim=1) {
    let matrix = []

    for (let i = 0; i < dim; i++) {
        matrix[i] = [];
        for (let j = 0; j < dim; j++) {
            matrix[i].push(0)
        }
    }

    let row = 0;
    let col = 0;
    let counter = 1;

    while (true) {
        if (matrix?.[row]?.[col] !== 0) {
            break;
        }

        // look to the right
        while (matrix?.[row]?.[col] === 0) {
            matrix[row][col] = Math.pow(counter, 2);
            counter++;
            col++;
        }

        // look to bottom
        col--;
        row++;
        while (matrix?.[row]?.[col] === 0) {
            matrix[row][col] = Math.pow(counter, 2);
            counter++;
            row++;
        }

        // look to the left
        row--;
        col--;
        while (matrix?.[row]?.[col] === 0) {
            matrix[row][col] = Math.pow(counter, 2);
            counter++;
            col--;
        }

        // look to the top
        col++;
        row--;
        while (matrix?.[row]?.[col] === 0) {
            matrix[row][col] = Math.pow(counter, 2);
            counter++;
            row--;
        }

        // again left
        row++;
        col++;

    }
    return matrix;
}
