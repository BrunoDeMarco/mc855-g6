import express from "express";
import { MedicalSpeciality } from "../model/medicalSpecialty";
import { PatientAttendance, PatientAttendanceType } from "../model/patient";
import { createAttendance, fetchAttendances, isAttendance } from "../services/attendanceService";

const attendanceRouter = express.Router();

attendanceRouter.post("/create", async (req, res) => {  
    if (isAttendance(req.body)) {
        let speciality: MedicalSpeciality | null = null
        
        if (req.body.speciality) {
            speciality = +req.body.speciality
        } 

        const attendance: PatientAttendance = {
            number: +req.body.number as number,
            type: +req.body.type as PatientAttendanceType,
            hc: req.body.hc as string | null,
            speciality: speciality
        }

        const createdId = await createAttendance(attendance);
        res.sendStatus(createdId == -1 ? 500 : 200);
    } else {
        res.sendStatus(403);
    }
});

attendanceRouter.get("/fetch", async (req, res) => {
    res.send(await fetchAttendances())
})

export default attendanceRouter;
