package com.campus.virtual.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.campus.virtual.models.CatalogoCursos;
import com.campus.virtual.models.WebUser;

public interface CatalogoCursosRepository extends JpaRepository<CatalogoCursos, Long>{


		@Query("select a from CatalogoCursos  a")
		List<?> getAllCurso();
	

		@Query("select a from CatalogoCursos  a where a.orde=:orde")
		List<?> getCursoToMatricula(int orde);

}
