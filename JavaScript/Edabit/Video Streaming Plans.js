// https://edabit.com/challenge/SrCTGbhwPRyHZSAGu

class StandardPlan extends BasicPlan {
    static hasHD = true;
    static numOfDevices = 2;
    static price = '$12.99';
}

class PremiumPlan extends StandardPlan {
    static hasUHD = true;
    static numOfDevices = 4;
    static price = '$15.99';
}
