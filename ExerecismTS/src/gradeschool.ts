
class School {

    constructor(private db = {}) { }

    add( student: string, grade : number ) {

        if (this.db[grade])
            this.db[grade].push(student);
        else
            this.db[grade] = [student];

        this.db[grade].sort();
    }

    grade( grade: number) {
        return this.db[grade] ? this.db[grade] : [];
    }

    roster() {
        return this.db;
    }

}