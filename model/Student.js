const { Schema, model } = require('mongoose');
const StudentSchema = new Schema(
    {
        name: {
            type: String,
            required:true,
        },

        std_id: {
            type: String,
            required:true,
        },
        email: {
            type: String,
            require: true
        },
        courses:{
               type: [""],
               require:true,
            default:["javastack"]
        }
    },{
        timestamps:true
    }
)

module.exports = model("students", StudentSchema);