
const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
    "association_demo",
    "root",
    "YOUR_MYSQL_PASSWORD",
    {
        host: "localhost",
        dialect: "mysql",
        logging: false
    }
);

const User = sequelize.define("User", {
    name: DataTypes.STRING
});

const Profile = sequelize.define("Profile", {
    bio: DataTypes.STRING
});

const Post = sequelize.define("Post", {
    title: DataTypes.STRING
});

const Tag = sequelize.define("Tag", {
    name: DataTypes.STRING
});

// One-to-One (1:1)
User.hasOne(Profile);
Profile.belongsTo(User);

// One-to-Many (1:M)
User.hasMany(Post);
Post.belongsTo(User);

// Many-to-Many (M:N)
Post.belongsToMany(Tag, { through: "PostTags" });
Tag.belongsToMany(Post, { through: "PostTags" });

async function main() {
    try {
        await sequelize.authenticate();
        console.log("Database connected successfully!");

        await sequelize.sync();
        console.log("All association tables created successfully!");
    } catch (error) {
        console.log("Error:", error.message);
    } finally {
        await sequelize.close();
    }
}

main();
