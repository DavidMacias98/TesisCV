package com.campus.virtual.services;

import java.util.List;

import com.campus.virtual.models.Asistencias;

public interface AsistenciasService {

	
	
	
	Object getAsistenciasByCurso(Long idCurso)throws Exception;
	Object putAsistencia(Long idDocentes)throws Exception;
	
	List<?> getStudentXassistByCurso(Long idAssist)throws Exception;
	
	List<?> getDetalleByAssist(Long idAssist)throws Exception;
	
	Object putDetallePresent(Long idAssistDetalle,Boolean status)throws Exception;
	
	
	
	
	//////////////////repre////////////////////////////////
	List<?> getPorAsistenciaByRepre(Long idRepre) throws Exception;
	
	
	
//////////////////student////////////////////////////////
	List<?> getDetalleByStudent(Long idStudent)throws Exception;
	
	

	
}
