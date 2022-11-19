const Step = require("../models/Steps");

const createStep = async (req, res) => {
    const { title, content } = req.body;
    
    if (!title || !content) {
        return res.status(400).json({error: 'Please enter all fields'});
    }

    const stepImage = req.file;

    if (!stepImage) {
        res.status(422).json({
            message: "please upload image",
        });
    }
    const image = stepImage.path;
    const step = await Step.create({
        title: title,
        content: content,
        image: image
    });

    const newStep = await step.save();
    res.status(200).json(newStep);
};

module.exports = {
    createStep,
};
