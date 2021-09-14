// https://edabit.com/challenge/qNMtrtizgssAQqP2b

class Name {
    
    constructor(fname, lname) {
        this._fname = fname[0].toUpperCase() + fname.slice(1).toLowerCase();
        this._lname = lname[0].toUpperCase() + lname.slice(1).toLowerCase();
    }          
    get fname() {
        return this._fname;
    }
    get lname() {
        return this._lname;
    }  
    get fullname() {
        return this._fname + ' ' + this._lname;
    }
    get initials() {
        return this._fname[0] + '.' + this._lname[0];
    }
}
