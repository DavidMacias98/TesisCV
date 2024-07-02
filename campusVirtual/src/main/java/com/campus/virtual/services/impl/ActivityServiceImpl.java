package com.campus.virtual.services.impl;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.campus.virtual.dto.RequestActivity;
import com.campus.virtual.models.Activity;
import com.campus.virtual.models.ActivityDetalles;
import com.campus.virtual.models.AdminUser;
import com.campus.virtual.models.Asistencias;
import com.campus.virtual.models.AsistenciasDetalles;
import com.campus.virtual.models.CatalogoCursos;
import com.campus.virtual.models.OrdenPago;
import com.campus.virtual.models.WebUser;
import com.campus.virtual.repository.ActivityDetalleRepository;
import com.campus.virtual.repository.ActivityRepository;
import com.campus.virtual.repository.AsistenciasDetalleRepository;
import com.campus.virtual.repository.AsistenciasRepository;
import com.campus.virtual.repository.CuentaAdminRepository;
import com.campus.virtual.repository.RepositoryOrder;
import com.campus.virtual.services.ActivityService;
import com.campus.virtual.services.AsistenciasService;
import com.campus.virtual.services.BlogStorageAzure;

@Service
public class ActivityServiceImpl implements ActivityService {

	@Autowired
	private ActivityRepository activityRepo;
	
	@Autowired
	private ActivityDetalleRepository activitysDetalleRepo;
	
	@Autowired
	private CuentaAdminRepository adminRepo;
	
	@Autowired
	private RepositoryOrder RepoOrden;
	
	@Autowired
	private BlogStorageAzure storage;

	@Override
	public Object getActivityByCurso(Long idCurso) throws Exception {
		// TODO Auto-generated method stub
		return this.activityRepo.getActivityByCurso(idCurso);
	}
	
	@Override
	public Object getActivityDetalleByActivity(Long idActivity) throws Exception {
		// TODO Auto-generated method stub
		return this.activitysDetalleRepo.getActivityDetalleByActivity(idActivity);
	}
	
	@Override
	public Object putCalificarActDet(Long idActDet,BigDecimal calificacion) throws Exception {
		
		ActivityDetalles detalle= new ActivityDetalles();
		detalle=this.activitysDetalleRepo.findById(idActDet).get();
		detalle.setCalificacion(calificacion);
		detalle.setStatusCalifica("CALIFICADO");
		// TODO Auto-generated method stub
		return this.activitysDetalleRepo.save(detalle);
	}
	
	
	
	
	
	@Override
	public Object putActivity(RequestActivity request) throws Exception {
		
		
		AdminUser docente= this.adminRepo.findById(request.getDocente().getId()).get();
		List<OrdenPago> matriculas = (List<OrdenPago>) this.RepoOrden.findByCurso(docente.getCurso().getId());
		
		if(matriculas.isEmpty()) {
			throw new Exception("NO HAY ESTUDIANTE MATRICULADOS EN ESTE CURSO");
		}
		
		Activity activity= new Activity();
		activity.setDocente(request.getDocente());
		activity.setMateria(request.getMateria());
		activity.setNameTema(request.getNameTema());
		activity.setTipo(request.getTipo());
		 DateTimeFormatter formatter = DateTimeFormatter.ofPattern("M/d/yyyy");
		activity.setFechaMaxEntrega(LocalDate.parse(request.getFechaMaxEntrega(),formatter));
		activity.setObservacion(request.getObservacion());
		return this.activityRepo.save(activity);
	}
	
	
	
	@Override
	public Object putActivityFile(Long IdActivity, MultipartFile file) throws Exception {
		// TODO Auto-generated method stub
		Object response = null;
		//Activity activity = new Activity();
		AdminUser docente;
		Activity activity;
		 try {
			 activity= this.activityRepo.findById(IdActivity).get();
		docente=this.adminRepo.findById(activity.getDocente().getId()).get();
		response=storage.upload(file, docente.getId()+"activity","multiplo");
		activity.setUrlFile(response.toString());
		 } catch (Exception e) {
		        // Manejo de la excepción
		        throw new Exception("Mensaje de error", e);
		    }
		///por revisar
		 this.activityRepo.save(activity);
		 
		return this.putStudentXActivityByCurso(activity);
	}

	@Override
	public List<?> putStudentXActivityByCurso(Activity activity) throws Exception {
	
		List<OrdenPago> matriculas = (List<OrdenPago>) this.RepoOrden.findByCurso(activity.getMateria().getCurso().getId());
		List<ActivityDetalles>Actividades = new ArrayList<>();
		matriculas.stream().forEach(x->{
			
			ActivityDetalles ito  =new ActivityDetalles();
			ito.setUrlActivity(activity.getUrlFile());
			ito.setStudent(x.getEstudiante());
			ito.setActivity(activity);
			Actividades.add(ito);
			});
		
		return this.activitysDetalleRepo.saveAll(Actividades);
	}
	
	
	
	
	
/////para el docente ver todas las tareas de los alumnos enviada por actividad
	@Override
	public List<?> getDetalleByActivity(Long idActivity) throws Exception {
		// TODO Auto-generated method stub
		return null;
	}

	
	
	
	
	///////////////////////////////////////////////////////
	//////////////////////////////////////////////////////
	/////////////////////////////////////////////////////
	/////////////////////////////STUDENT/////////////////
	
/////cargar la tarea por el estudiante
	@Override
	public Object putActivityByStudent(Long idActivityDetalle, MultipartFile activity) throws Exception {
		Object response;
		ActivityDetalles detalle= this.activitysDetalleRepo.findById(idActivityDetalle).get();
		response=storage.upload(activity, detalle.getStudent().getId()+detalle.getActivity().getTipo().getName()+detalle.getActivity().getId(),"multiplo");
		detalle.setNumeroIntento(detalle.getNumeroIntento()+1);
		detalle.setStatusEntrega("ENTREGADO");
		detalle.setUrlActivityPresentada(response.toString());
		return this.activitysDetalleRepo.save(detalle);
	}
	@Override
	public Object getActivityDetByStudent(Long idStudent) {
		List<?> activityDet = new ArrayList<>();
		activityDet = this.activitysDetalleRepo.getActivityByStudent(idStudent);
		return activityDet;
	}
	
	
	







	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	





}
