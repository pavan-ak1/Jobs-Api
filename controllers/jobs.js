
const getAllJobs = async (req,res)=>{
    res.send('get all route')
};

const getJobs = async (req,res)=>{
    res.send('get single job')
};
const createJobs = async (req,res)=>{
    res.send('create route')
};
const updateJobs = async (req,res)=>{
    res.send('update route')
};
const deleteJobs = async (req,res)=>{
    res.send('Delete route')
};


module.exports = {
    getAllJobs,
    getJobs,
    createJobs,
    updateJobs,
    deleteJobs,
}
