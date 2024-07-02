package com.campus.virtual.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.campus.virtual.models.Activity;
import com.campus.virtual.models.Asistencias;
import com.campus.virtual.models.CatalogoCursos;
import com.campus.virtual.models.Materias;
import com.campus.virtual.models.WebUser;

public interface MateriasRepository extends JpaRepository<Materias, Long>{

	
	@Query("select a from Materias a where a.activo = true and a.curso.id=:idCurso")
	List<?> getByActiveXCurso(Long idCurso);
	
	@Query("select a from Materias a where a.activo =true")
	List<?> getToAssign();
	
	
}
