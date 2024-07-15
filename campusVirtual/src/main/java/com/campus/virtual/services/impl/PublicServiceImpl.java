package com.campus.virtual.services.impl;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.campus.virtual.models.AdminUser;
import com.campus.virtual.models.CatalogoCursos;
import com.campus.virtual.models.Materias;
import com.campus.virtual.models.OrdenPago;
import com.campus.virtual.repository.CatalogoCursosRepository;
import com.campus.virtual.repository.CuentaAdminRepository;
import com.campus.virtual.repository.MateriasRepository;
import com.campus.virtual.repository.RepositoryOrder;
import com.campus.virtual.repository.TipActRepository;
import com.campus.virtual.services.PublicService;

@Service
public class PublicServiceImpl implements PublicService {
	
	private static final Logger logger = LoggerFactory.getLogger(PublicServiceImpl.class);

	
	@Autowired
	private CatalogoCursosRepository cursoRepo;

	@Autowired
	private CuentaAdminRepository AdminUserRepo;
	
	@Autowired
	private MateriasRepository materiaRepo;;
	
	@Autowired
	private TipActRepository tipActRepo;;
	
	
///////////////////////////////SERVICIOS CATALOGOS//////////////////////////////
	@Override
	public Object addCurso(CatalogoCursos newCurso) throws Exception {
		// TODO Auto-generated method stub
		return this.cursoRepo.save(newCurso);
	}

	@Override
	public Object getAllCursos() throws Exception {
		// TODO Auto-generated method stub
		List<CatalogoCursos> cursos =  this.cursoRepo.getAllCurso();
		
		 return cursos;
	}
	

	@Override
	public Object putCursos(CatalogoCursos curso) throws Exception {
		// TODO Auto-generated method stub
		return this.cursoRepo.save(curso);
	}	
	
	
	
	@Override
	public Object getCursoToMatricula(int orde) throws Exception {
		// TODO Auto-generated method stub
		return this.cursoRepo.getCursoToMatricula(orde);
	}

	
	

	@Override
	public Object ColabXcurso(Long idColab, Long idCurso) throws Exception {
		
		CatalogoCursos curso = new CatalogoCursos();
		AdminUser docente = new AdminUser();
		docente =this.AdminUserRepo.findById(idColab).get();
		curso= this.cursoRepo.findById(idCurso).get();
		
		curso.setDocente(docente);
		this.cursoRepo.save(curso);
		logger.info("Docente se grabo en el curso");
		docente.setCurso(curso);
		docente.setIdCurso(curso.getId());
		docente.setNameCurso(curso.getName());
		this.AdminUserRepo.save(docente);
		logger.info("Curso se grabo en el docente");

		return "ok";
	}
	
	
	@Override
	public Object getActiveMateriaByCurso(Long idCurso)throws Exception {
		return this.materiaRepo.getByActiveXCurso(idCurso);
	}

	@Override
	public Object geTipActByActive() throws Exception {
		// TODO Auto-generated method stub
		return this.tipActRepo.getByActive();
	}

	@Override
	public Object getMateriasToAsignarByCurso() throws Exception {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Object putMateriaByCurso(Materias materia) throws Exception {
		// TODO Auto-generated method stub
		return this.materiaRepo.save(materia);
	}

	
	
	
	
	

///////////////////////////////SERVICIOS ORDEN DE PAGOS//////////////////////////////	
	
	


}
