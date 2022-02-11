
const StudentSchema = require("../model/Student")
exports.getAllStudents = async (req,res) => {
    try {
        let payload = await StudentSchema.find();
        res.status(200).json({ message: "fetched data", payload})
    } catch (error) {
        res.status(501).json({ message: "SERVER"})  
    }
};
exports.getStudent = async(req,res) => {
    try {
        let payload = await StudentSchema.findOne({ _id: req.params.id });
         res.status(200).json({ message: "fetched data", payload})
    } catch (error) {
         res.status(501).json({ message: "SERVER",}) 
    }
}
exports.updateStudent = async (req, res) => {
    try {
        let { name, std_id, email, courses } = req.body;
        let payload = await StudentSchema.findByIdAndUpdate(
            req.params.id,
            {
                name,
                std_id,
                email,
                courses
            },
            { new: true }

        );
        await payload.save();
        res.status(201).json({message:"successfully student updated",payload})
        
    } catch (error) {
         res.status(501).json({message:"successfully student updated"})
    }
}

exports.createStudent = async (req, res) => {
    try {
    let { name, std_id, email, courses } = req.body;
    let payload = {
        name,
        std_id,
        email,
        courses
    };
    let data = await StudentSchema.create(payload);
    res.status(201).json({message:"successfully created",data})
    }
    catch (error) {
    console.log(error);
    res.status(501).json({message:"server error",data})
     }
   
}

exports.deleteStudent = async(req,res) => {
    try {
      await StudentSchema.findByIdAndDelete(req.params.id );
         res.status(200).json({ message: "fetched data"})
    } catch (error) {
         res.status(501).json({ message: "SERVER error",}) 
    }
}