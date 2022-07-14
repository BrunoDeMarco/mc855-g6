import { PrismaClient } from "@prisma/client";
import { DateRange } from "../model/dateRange";
import { PatientAttendance, PatientAttendanceType } from "../model/patient";

const prisma = new PrismaClient();

export const createAttendance = async (attendance: PatientAttendance) => {
	try {
		const createdAttendance = await prisma.attendances.create({
			data: {
				number: attendance.number as number,
                hc: attendance.hc,
                type: attendance.type as number, 
                speciality: attendance.speciality as number | null
			}
		});
		return createdAttendance.attendance_id;
	} catch (err) {
		return -1;
	}
};

export const fetchAttendances = async (range?: DateRange): Promise<PatientAttendance[]> => {
	try {

		if (range) {
			return await prisma.attendances.findMany({
				where: {
					createdAt: {
						lte: range.final,
						gte: range.initial
					}
				}
			})
		} else {
			return await prisma.attendances.findMany()
		}
		
	} catch (err) {
		return [];
	}
}

export const isAttendance = (object: any): object is PatientAttendance => {
	if (object.speciality && isNaN(object.speciality)) {
		return false
	}

    return !isNaN(object.number) && !isNaN(object.type)
}