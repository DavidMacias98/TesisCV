package com.campus.virtual.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.campus.virtual.models.Asistencias;
import com.campus.virtual.models.CatalogoCursos;
import com.campus.virtual.models.WebUser;

public interface AsistenciasRepository extends JpaRepository<Asistencias, Long>{


	@Query(value ="SELECT * FROM campus.asistencias WHERE fecha_asistencia = CURRENT_DATE and curso=:idCurso" , nativeQuery = true)
	Asistencias getCurrentAssist(Long idCurso);
	
	
	
	@Query("select a from Asistencias a where a.curso.id = :idCurso ")
	List<?> getAssistsByCurso(Long idCurso);
	
	
	
}
