const {getAllJobs,getJobs,deleteJobs,updateJobs,createJobs} = require('../controllers/jobs');
const express = require('express');
const router = express.Router();


router.route('/').post(createJobs).get(getAllJobs);
router.route('/:id').get(getJobs).delete(deleteJobs).patch(updateJobs);





module.exports = router;