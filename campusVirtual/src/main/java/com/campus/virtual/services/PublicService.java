package com.campus.virtual.services;

import java.util.List;

import com.campus.virtual.models.CatalogoCursos;
import com.campus.virtual.models.Materias;
import com.campus.virtual.models.OrdenPago;
import com.campus.virtual.models.WebUser;
import com.campus.virtual.models.WebUserAddress;


public interface PublicService {

	/////////////////////servicios catalogo cursos///////////////
	Object addCurso(CatalogoCursos newuser)throws Exception;
	Object getAllCursos()throws Exception;
	Object putCursos(CatalogoCursos curso)throws Exception;
	
	Object getCursoToMatricula(int orde)throws Exception;

	Object ColabXcurso(Long idColab, Long idCurso)throws Exception;
	Object getActiveMateriaByCurso(Long idCurso)throws Exception;
	Object geTipActByActive()throws Exception;

	Object getMateriasToAsignarByCurso()throws Exception;
	
	Object putMateriaByCurso(Materias materia)throws Exception;
	
	
}