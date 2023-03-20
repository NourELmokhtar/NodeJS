function NameAge(name, age) {
    const CurrentDate = new Date();
    const UserBirhDate = new Date(age)

    const Year = CurrentDate.getFullYear() - UserBirhDate.getFullYear()
    if (Year < 0) {
        return "Invalid Date ";
    }
    else {
        return ("Hello : ", name, "Your age is: " + Year);
    }
}
module.exports = {
    HelloMSG: NameAge
}