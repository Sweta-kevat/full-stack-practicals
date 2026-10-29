const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class Course extends Model {}

    Course.init({
        courseCode: DataTypes.STRING,
        courseName: DataTypes.STRING,
        credits: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: "Course"
    });

    return Course;
};