package com.campus.virtual.services.impl;

import java.text.DecimalFormat;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.campus.virtual.dto.CabezeraRespondePorcentajeAssistByStudent;
import com.campus.virtual.dto.RespondePorcentajeAssistByStudent;
import com.campus.virtual.models.AdminUser;
import com.campus.virtual.models.Asistencias;
import com.campus.virtual.models.AsistenciasDetalles;
import com.campus.virtual.models.CatalogoCursos;
import com.campus.virtual.models.OrdenPago;
import com.campus.virtual.models.WebUser;
import com.campus.virtual.repository.AsistenciasDetalleRepository;
import com.campus.virtual.repository.AsistenciasRepository;
import com.campus.virtual.repository.CuentaAdminRepository;
import com.campus.virtual.repository.RepositoryOrder;
import com.campus.virtual.services.AsistenciasService;
import com.campus.virtual.services.CuentaService;

@Service
public class AsistenciasServiceImpl implements AsistenciasService {

	@Autowired
	private AsistenciasRepository AssistsRepo;
	
	@Autowired
	private AsistenciasDetalleRepository AssistsDetalleRepo;
	
	@Autowired
	private CuentaAdminRepository adminRepo;
	
	@Autowired
	private RepositoryOrder RepoOrden;
	
	@Autowired
	private CuentaService cuentaService;
	
	


	@Override
	public Object getAsistenciasByCurso(Long idCurso) throws Exception {
		// TODO Auto-generated method stub
		return this.AssistsRepo.getAssistsByCurso(idCurso);
	}

	
	
	
	@Override
	public Object putAsistencia(Long idDocente) throws Exception {
		
		
		
		
		AdminUser docente= this.adminRepo.findById(idDocente).get();
		List<OrdenPago> matriculas = (List<OrdenPago>) this.RepoOrden.findByCurso(docente.getCurso().getId());
		
		if(matriculas.isEmpty()) {
			throw new Exception("NO HAY ESTUDIANTE MATRICULADOS EN ESTE CURSO");
		}
	
		Asistencias asistencia = this.AssistsRepo.getCurrentAssist(docente.getCurso().getId());
		if(asistencia != null) {
			throw new Exception("Ya existe una lista de asistencia de hoy");
		}
		asistencia = new Asistencias();
		asistencia.setDocente(docente);
		asistencia.setCurso(CatalogoCursos.builder().id(docente.getCurso().getId()).build());;
		asistencia.setFechaAsistencia(LocalDate.now());
		return this.AssistsRepo.save(asistencia);
	}


	@Override
	public List<?> getStudentXassistByCurso(Long idAssists) throws Exception {
		
		Asistencias asistencia =this.AssistsRepo.findById(idAssists).get();
		
		List<OrdenPago> matriculas = (List<OrdenPago>) this.RepoOrden.findByCurso(asistencia.getCurso().getId());
		
		if(matriculas.isEmpty()) {
			throw new Exception("NO HAY ESTUDIANTE MATRICULADOS EN ESTE CURSO");
		}
		
		List<AsistenciasDetalles> adlist = new ArrayList<>();
	
			matriculas.stream().forEach(x->{
			AsistenciasDetalles ito  =new AsistenciasDetalles();
			ito.setAssists(asistencia);
			ito.setStudent(x.getEstudiante());
			adlist.add(ito);
			}
			);
		// TODO Auto-generated method stub
			this.AssistsDetalleRepo.saveAll(adlist);
		return  this.AssistsDetalleRepo.getAssistsByCurso(idAssists);
	}




	@Override
	public List<?> getDetalleByAssist(Long idAssist) throws Exception {
		return this.AssistsDetalleRepo.getAssistsByCurso(idAssist);
	}




	@Override
	public Object putDetallePresent(Long idAssistDetalle,Boolean status) throws Exception {
		
		AsistenciasDetalles detalle = this.AssistsDetalleRepo.findById(idAssistDetalle).get();
		detalle.setPresent(status);
		return this.AssistsDetalleRepo.save(detalle);
	}
	
	
	
	
	//////////////////////////////////////////////////////////////
	/////////////////////////////////////////////////////////////
	/////////////////////////REPRE///////////////////////////
	///////////////////////////////////////////////////////////\
	//////////////////////////////////////////////////////////
	
	@Override
	public List<?> getPorAsistenciaByRepre(Long idRepre) throws Exception {
		
		List<WebUser> StudenByRepre= new ArrayList<>();
		List<CabezeraRespondePorcentajeAssistByStudent> response= new ArrayList<>();
		StudenByRepre= (List<WebUser>) cuentaService.getStudentByRepre(idRepre);
		StudenByRepre.stream().forEach(x->{
			CabezeraRespondePorcentajeAssistByStudent resp=new CabezeraRespondePorcentajeAssistByStudent();
			List<RespondePorcentajeAssistByStudent>respIto=new ArrayList<>();
			RespondePorcentajeAssistByStudent ito = new RespondePorcentajeAssistByStudent();
			double totalPresent = this.AssistsDetalleRepo.getCountAssisTrueByStudent(x.getId());
			double totalAssists= this.AssistsDetalleRepo.getCountAssisByStudent(x.getId());
			
			ito.setName("Aistencias");
			ito.setValue(totalAssists);
			respIto.add(ito);
			if(totalPresent<totalAssists){
				ito = new RespondePorcentajeAssistByStudent();
				ito.setName("Faltas");
				ito.setValue(totalAssists-totalPresent);
				respIto.add(ito);
			}
			resp.setStudent(x.getName()+" "+ x.getApe());
			resp.setTotalAssist(totalAssists);
			resp.setData(respIto);
			response.add(resp);
			totalPresent=0;
			totalAssists=0;
		}
				);
		return response;
	}
	
	
	
	//////////////////////////////////////////////////////////////
	/////////////////////////////////////////////////////////////
	/////////////////////////STUDENT///////////////////////////
	///////////////////////////////////////////////////////////\
	//////////////////////////////////////////////////////////
	@Override
	public List<?> getDetalleByStudent(Long idStudent) throws Exception {
		return this.AssistsDetalleRepo.getAssistsByStudent(idStudent);
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	





}
