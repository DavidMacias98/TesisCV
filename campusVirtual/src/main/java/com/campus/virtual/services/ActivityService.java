package com.campus.virtual.services;

import java.math.BigDecimal;
import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.campus.virtual.dto.RequestActivity;
import com.campus.virtual.models.Activity;
import com.campus.virtual.models.Asistencias;

public interface ActivityService {

	
	
	
	Object getActivityByCurso(Long idCurso)throws Exception;
	Object getActivityDetalleByActivity(Long idActivity)throws Exception;
	Object putCalificarActDet(Long idActDet,BigDecimal calificacion)throws Exception;
	
	Object putActivity(RequestActivity idActivity)throws Exception;
	Object putActivityFile(Long IdActivity,MultipartFile file)throws Exception;
	
	List<?> putStudentXActivityByCurso(Activity idActivity)throws Exception;
	
	List<?> getDetalleByActivity(Long idActivity)throws Exception;
	
	
	//////////ESTUIANTE//////////
	Object getActivityDetByStudent(Long idStudent);
	Object putActivityByStudent(Long idActivityDetalle,MultipartFile activity)throws Exception;
}
