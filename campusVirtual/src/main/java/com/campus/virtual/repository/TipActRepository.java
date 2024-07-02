package com.campus.virtual.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.campus.virtual.models.Activity;
import com.campus.virtual.models.Asistencias;
import com.campus.virtual.models.CatalogoCursos;
import com.campus.virtual.models.CatalogoTipoActividad;
import com.campus.virtual.models.Materias;
import com.campus.virtual.models.WebUser;

public interface TipActRepository extends JpaRepository<CatalogoTipoActividad, Long>{

	
	@Query("select a from CatalogoTipoActividad a where a.activo = true  ")
	List<?> getByActive();
	
}
