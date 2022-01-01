/**
 * This datastructure represents a table. What is special about
 * this table is that it mimics the structure of a single array;
 * Elements are inserted 'from left to right' and after the maximum
 * number of elements in a row has been reached, a new row is created.
 * Since all rows have the same length, each 'empty' element in a row
 * is set to null.
 * 
 * Example: The array [1, 2, 3, 4, 5, 6] where the number of columns is
 * 2 is transformed into the following matrix: [ [1, 2][3, 4][5, 6] ].
 * After inserting the element '7', it becomes: [ [1, 2][3, 4][5, 6][7, null] ].
 */
export default class LinearTable<T> {
    /** This is the matrix that represents the table */
    matrix: Array< Array<T | null> > = [];
    /** This is the maximum number of columns. DO NOT CHANGE THIS. */
    columns!: number;

    /**
     * Constructs a linear table.
     * @param columns The maximum number of columns (positive nonzero integer)
     * @param data Optional data to initialize the table with
     */
    constructor(columns: number, data?: Array<T | null>) {
        this.columns = columns;
        if (data !== undefined)
            this.pushAll(data);
    }

    /**
     * Counts the total number of items in this table.
     * All 'empty' (null) elements are not counted.
     * @returns The total number of items in the table
     */
    totalItems = (): number => {
        const lastColumn = this.matrix[this.matrix.length-1];
        let i = 0;
        for (let item of lastColumn) {
            if (item !== null) i++;
        }
        return (this.matrix.length - 1) * this.columns + i;
    }

    /**
     * Retrieves the index of the last non-null element.
     * @returns [last column, last row]
     */
    lastIndex = (): [number, number] => {
        const y = this.matrix.length - 1;
        for (let x=0; x<this.columns; x++) {
            if (this.matrix[y][x] === null)
                return [y, x - 1]
        }
        return [y, this.columns - 1];
    }

    /**
     * Retrieves the element at the given position in the table.
     * @param column The column
     * @param row The row
     * @returns The element at the given position
     */
    get = (column: number, row: number): T | null => {
        if (this.matrix.length === 0 || column < 0 || column >= this.matrix.length)
            return null;
        return this.matrix[column][row];
    }

    /**
     * Appends the given element to this table. The time complexity is
     * linear.
     * @param data The element to insert
     */
    push = (data: T | null): void => {
        if (this.matrix.length === 0) {
            const tmp = Array<T | null>(this.columns).fill(null);
            tmp[0] = data;
            this.matrix.push(tmp);
            return;
        }
        const lastRow = this.matrix[this.matrix.length-1];
        for (let i=0; i<this.columns; i++) {
            if (lastRow[i] === null) {
                lastRow[i] = data;
                return;
            }
        }
        const tmp = Array<T | null>(this.columns).fill(null);
        tmp[0] = data;
        this.matrix.push(tmp);
    }

    /**
     * Appends all the given data to this table. The time complexity
     * is linear.
     * @param data The elements to insert
     */
    pushAll = (data: Array<T | null>): void => {
        for (let t of data)
            this.push(t);
    }
}
