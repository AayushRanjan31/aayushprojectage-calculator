function calculateAge(birthDate, currentDate) {
    var birth = new Date(birthDate);
    var current = new Date(currentDate);

    const nextBirthday = new Date(current.getFullYear(), birth.getMonth(), birth.getDate());
    if (nextBirthday < current) {
        nextBirthday.setFullYear(nextBirthday.getFullYear() + 1);
      }

       extbirth.innerHTML =" Next B'Day :- " + nextBirthday.toDateString();

    const dayOfWeekNumber = birth.getDay();
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayOfWeekName = daysOfWeek[dayOfWeekNumber];
    ageweekday.innerHTML ="Days of the week :- " + dayOfWeekName;

    var difference = current - birth;

            var daysDifference = Math.floor(difference / (1000 * 60 * 60 * 24));
            ageday.innerHTML =" Age in days :- " + daysDifference + " days";

            var weeksDifference = Math.floor(difference / (1000 * 60 * 60 * 24 * 7));
            var day = Math.floor((difference % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24));
            ageweek.innerHTML =" Age in weeks :- " + weeksDifference + " weeks, " + day + " days";

            var hours = difference / (1000 * 60 * 60);
            agehour.innerHTML =" Age in hours :- " + hours + " hours";

            var minutes = difference / (1000 * 60);
            ageminute.innerHTML =" Age in minutes :- " + minutes + " minutes";

            var seconds = difference / 1000;
            agesecond.innerHTML =" Age in seconds :- " + seconds + " seconds";

    var years = current.getFullYear() - birth.getFullYear();
    var months = current.getMonth() - birth.getMonth();
    var days = current.getDate() - birth.getDate();

    if (days < 0) {
        months--;
        current.setMonth(current.getMonth() - 1);
        days += new Date(current.getFullYear(), current.getMonth() + 1, 0).getDate();
    }
    if (months < 0) {
        years--;
        months += 12;
    }
    
    var totalmonths = years * 12 + months
    agemonth.innerHTML =" Age in months :- " + totalmonths + " months, " + days + " days";

    

    return years + " years, " + months + " months, " + days + " days";
}

function displayAge() {
    var birthDate = document.getElementById('birthDate').value;
    var currentDate = document.getElementById('currentDate').value;

    var fullfinalage = calculateAge(birthDate, currentDate);
    document.getElementById('result').textContent = " " + fullfinalage;
    
}