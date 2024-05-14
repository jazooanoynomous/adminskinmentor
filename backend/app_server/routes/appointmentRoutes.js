const express = require("express");
const router = express.Router();
const AppointmentController = require("../controllers/appointmentController");


router.post("/add", AppointmentController.addAppointment);
router.get('/doctor/:doctorId', AppointmentController.getAppointmentsByDoctorId);
router.get('/', AppointmentController.getAppointmentsAll);
router.get('/requester/:requesterId', AppointmentController.getAppointmentsByRequesterId);
router.put('/doctor', AppointmentController.updateAppointmentResponse);
router.get('/:appointmentId', AppointmentController.getAppointmentById);

router.get("/getAppointmentsByBoth/:doctorId/:requesterId",
 AppointmentController.getAppointmentsByDoctorAndRequesterId);


 router.delete('/:requesterId', AppointmentController.deleteAppointmentsByRequesterId);
 


module.exports = router;