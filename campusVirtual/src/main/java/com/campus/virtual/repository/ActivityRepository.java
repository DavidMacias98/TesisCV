package com.campus.virtual.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.campus.virtual.models.Activity;
import com.campus.virtual.models.Asistencias;
import com.campus.virtual.models.CatalogoCursos;
import com.campus.virtual.models.WebUser;

public interface ActivityRepository extends JpaRepository<Activity, Long>{

	
	@Query("select a from Activity a where a.materia.curso.id = :idCurso ")
	List<?> getActivityByCurso(Long idCurso);
	

	
}
