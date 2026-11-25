function calculateAverage(data) {
    if (data.length === 0) return null;
    const sum = data.reduce((total, student) => total + student.score, 0);
    return sum / data.length;
}

function findTopStudent(data) {
    if (data.length === 0) return null;
    const best = data.reduce((leader, student) =>
        student.score > leader.score ? student : leader
    );
    return best.name;
}

function filterFailed(data, passScore) {
    return data
        .filter(student => student.score < passScore)
        .map(student => student.name);
}

function addLetterGrade(data) {
    return data.map(student => {
        let letter = "C";
        if (student.score >= 90) letter = "A";
        else if (student.score >= 75) letter = "B";
        return { ...student, letter };
    });
}

module.exports = { calculateAverage, findTopStudent, filterFailed, addLetterGrade };
